const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);

const server = http.createServer((request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    return serveStatic(url.pathname, response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Server error');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio server running at http://127.0.0.1:${port}`);
});

function serveStatic(urlPath, response) {
  const pathname = urlPath === '/' ? '/index.html' : decodeURIComponent(urlPath);
  const target = path.normalize(path.join(rootDir, pathname));
  if (!target.startsWith(rootDir)) {
    response.writeHead(403);
    return response.end('Forbidden');
  }
  if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) {
    response.writeHead(404);
    return response.end('Not found');
  }
  response.writeHead(200, {
    'Content-Type': mimeType(target),
    'Cache-Control': target.endsWith('.html') ? 'no-store' : 'public, max-age=300',
  });
  fs.createReadStream(target).pipe(response);
}

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return (
    {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
    }[ext] || 'application/octet-stream'
  );
}
