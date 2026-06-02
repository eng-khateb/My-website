const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const languageButtons = document.querySelectorAll('.language-option');

const translations = {
  en: {
    meta: {
      title: 'Mohamed Ali khateb | IT Specialist',
      description:
        'Professional portfolio website for Mohamed Ali khateb, Computer Engineer and IT Specialist in the UAE.',
    },
    profile: {
      name: 'Mohamed Ali khateb',
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Available to work',
      title: 'Computer Engineer | IT Specialist',
      summary:
        'Computer engineer specialized in web development and programming, with a solid academic background and a passion for continuous learning. Analytical, detail-oriented, and motivated to create advanced digital solutions that align with business goals and deliver strong user experiences.',
      contactButton: 'Contact Me',
      experienceButton: 'View Experience',
      currentRoleLabel: 'Current Role',
      currentCompany: 'NCTC, Sharjah',
      highlight1: 'IT Specialist in Sharjah',
      highlight2: 'Computer Engineering graduate',
      highlight3: 'Web development focused',
    },
    code: {
      line1: 'const engineer = {',
      line2: '  focus: "IT + Web",',
      line3: '  mindset: "Analytical",',
      line4: '  location: "UAE"',
    },
    sections: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    about: {
      heading: 'Technology-minded, practical, and user focused',
      body:
        'I combine computer engineering fundamentals with hands-on experience across IT support, AI content systems, customer-facing operations, and multilingual communication. My work is shaped by careful analysis, steady problem solving, and a drive to keep learning as digital tools evolve.',
    },
    contact: {
      locationLabel: 'Location',
      location: 'Ajman, UAE',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'Whatsapp',
      languagesLabel: 'Languages',
      languages: 'Turkish, English, Arabic',
      heading: "Let's connect",
      body:
        'For IT support, web development, or technology-focused opportunities in the UAE, reach out directly by email or phone.',
    },
    skills: {
      heading: 'A balanced technical and professional toolkit',
      frontend: 'Frontend',
      webDesign: 'Web Design',
      databases: 'Databases',
      dataStructures: 'Data Structures',
      programming: 'Programming',
      productivity: 'Productivity',
      timeManagement: 'Time Management',
      professional: 'Professional',
      attention: 'Attention to Detail',
      problemSolving: 'Problem Solving',
    },
    experience: {
      heading: 'Professional experience across IT, AI, and service operations',
      current: {
        period: 'Current',
        role: 'IT Specialist',
        meta: 'National Contracting Company | Sharjah, UAE',
        body:
          'I am currently working as an IT Specialist at NCTC in Sharjah, UAE. I support technology operations, troubleshooting, and reliable day-to-day IT service delivery.',
      },
      ai: {
        role: 'AI Trainer',
        meta: 'Conectys | Istanbul, Turkey',
        body:
          'Trained and optimized AI systems for TikTok content classification and moderation. Analyzed platform data, collaborated with technical and data teams, improved filter accuracy, and evaluated system performance based on policy updates.',
      },
      moderator: {
        role: 'Content Moderator',
        meta: 'Conectys | Istanbul, Turkey',
        body:
          'Reviewed and monitored sensitive TikTok content for compliance with platform policies and privacy standards. Applied internal guidelines, moderation tools, quick judgment, and strong attention to detail to help maintain a safe digital environment.',
      },
      clinic: {
        role: 'Patient Experience Officer',
        meta: 'Elay Clinic | Istanbul, Turkey',
        body:
          'Supported patients throughout their medical journey, handled inquiries, provided Arabic-Turkish translation, managed follow-ups, registration, data entry, appointment scheduling, medical record updates, insurance checks, billing, and payment support.',
      },
    },
    education: {
      heading: 'Academic foundation and certifications',
      engineering: {
        title: 'Computer Engineering',
        meta: 'Karabuk University, Turkey',
        body:
          'Built a strong foundation in software development, system design, computing theory, hands-on projects, and technical problem solving.',
      },
      languages: {
        title: 'English and Turkish Languages',
        meta: 'Karabuk University, Turkey',
        body:
          'Studied English and Turkish with coursework in grammar, linguistics, and cultural studies, strengthening communication in multicultural environments.',
      },
    },
    certifications: {
      heading: 'Certifications',
      tomer: 'TOMER certificate - Turkish language, Karabuk University',
      english: 'English language achievement certificate, Karabuk University',
      security: 'Security awareness training, Conectys',
      wellness: 'Wellness program - Conectysians Guide, Conectys',
    },
    footer: {
      nationality: 'Turkish & Syrian',
    },
  },
  ar: {
    meta: {
      title: 'محمد علي الخطيب | أخصائي تقنية معلومات',
      description:
        'موقع بورتفوليو احترافي لمحمد علي الخطيب، مهندس حاسوب وأخصائي تقنية معلومات في دولة الإمارات.',
    },
    profile: {
      name: 'محمد علي الخطيب',
    },
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      skills: 'المهارات',
      experience: 'الخبرة',
      education: 'التعليم',
      contact: 'التواصل',
    },
    hero: {
      eyebrow: 'متاح للعمل',
      title: 'مهندس حاسوب | أخصائي تقنية معلومات',
      summary:
        'مهندس حاسوب متخصص في تطوير الويب والبرمجة، بخلفية أكاديمية قوية وشغف بالتعلم المستمر. أتمتع بعقلية تحليلية واهتمام عال بالتفاصيل، وأسعى إلى بناء حلول رقمية متقدمة تتوافق مع أهداف الأعمال وتقدم تجربة مستخدم مميزة.',
      contactButton: 'تواصل معي',
      experienceButton: 'عرض الخبرة',
      currentRoleLabel: 'المنصب الحالي',
      currentCompany: 'NCTC، الشارقة',
      highlight1: 'أخصائي تقنية معلومات في الشارقة',
      highlight2: 'خريج هندسة حاسوب',
      highlight3: 'تركيز على تطوير الويب',
    },
    code: {
      line1: 'const engineer = {',
      line2: '  focus: "IT + Web",',
      line3: '  mindset: "Analytical",',
      line4: '  location: "UAE"',
    },
    sections: {
      about: 'نبذة',
      skills: 'المهارات',
      experience: 'الخبرة',
      education: 'التعليم',
      contact: 'التواصل',
    },
    about: {
      heading: 'عقلية تقنية، أسلوب عملي، وتركيز على المستخدم',
      body:
        'أجمع بين أساسيات هندسة الحاسوب والخبرة العملية في دعم تقنية المعلومات، وأنظمة الذكاء الاصطناعي للمحتوى، والعمليات التي تتعامل مع العملاء، والتواصل متعدد اللغات. يرتكز عملي على التحليل الدقيق، وحل المشكلات بثبات، والرغبة المستمرة في التعلم مع تطور الأدوات الرقمية.',
    },
    contact: {
      locationLabel: 'الموقع',
      location: 'عجمان، الإمارات',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      whatsappLabel: 'واتساب',
      languagesLabel: 'اللغات',
      languages: 'التركية، الإنجليزية، العربية',
      heading: 'لنتواصل',
      body:
        'للفرص المتعلقة بدعم تقنية المعلومات، أو تطوير الويب، أو المجالات التقنية في دولة الإمارات، يمكن التواصل مباشرة عبر البريد الإلكتروني أو الهاتف.',
    },
    skills: {
      heading: 'مجموعة متوازنة من المهارات التقنية والمهنية',
      frontend: 'واجهات المستخدم',
      webDesign: 'تصميم الويب',
      databases: 'قواعد البيانات',
      dataStructures: 'هياكل البيانات',
      programming: 'البرمجة',
      productivity: 'الإنتاجية',
      timeManagement: 'إدارة الوقت',
      professional: 'مهارات مهنية',
      attention: 'الاهتمام بالتفاصيل',
      problemSolving: 'حل المشكلات',
    },
    experience: {
      heading: 'خبرة مهنية في تقنية المعلومات والذكاء الاصطناعي وعمليات الخدمة',
      current: {
        period: 'حاليا',
        role: 'أخصائي تقنية معلومات',
        meta: 'الشركة الوطنية للمقاولات | الشارقة، الإمارات',
        body:
          'أعمل حاليا كأخصائي تقنية معلومات لدى NCTC في الشارقة، الإمارات. أقدم الدعم لعمليات التقنية، وحل الأعطال، وضمان تقديم خدمات تقنية معلومات يومية موثوقة.',
      },
      ai: {
        role: 'مدرب ذكاء اصطناعي',
        meta: 'Conectys | إسطنبول، تركيا',
        body:
          'قمت بتدريب وتحسين أنظمة الذكاء الاصطناعي لتصنيف ومراجعة محتوى TikTok. شمل عملي تحليل بيانات المنصة، والتعاون مع الفرق التقنية وفرق البيانات، وتحسين دقة المرشحات، وتقييم أداء الأنظمة بناء على تحديثات السياسات.',
      },
      moderator: {
        role: 'مشرف محتوى',
        meta: 'Conectys | إسطنبول، تركيا',
        body:
          'راجعت وراقبت المحتوى الحساس على TikTok لضمان الالتزام بسياسات المنصة ومعايير الخصوصية. اعتمدت على الإرشادات الداخلية وأدوات الإشراف وسرعة اتخاذ القرار والاهتمام العالي بالتفاصيل للمساهمة في بيئة رقمية آمنة.',
      },
      clinic: {
        role: 'مسؤول تجربة المرضى',
        meta: 'عيادة Elay | إسطنبول، تركيا',
        body:
          'دعمت المرضى طوال رحلتهم الطبية، وتعاملت مع الاستفسارات، وقدمت الترجمة بين العربية والتركية، وأدرت المتابعات والتسجيل وإدخال البيانات وجدولة المواعيد وتحديث السجلات الطبية والتحقق من التأمين ودعم الفوترة والمدفوعات.',
      },
    },
    education: {
      heading: 'أساس أكاديمي وشهادات مهنية',
      engineering: {
        title: 'هندسة الحاسوب',
        meta: 'جامعة كارابوك، تركيا',
        body:
          'بنيت أساسا قويا في تطوير البرمجيات، وتصميم الأنظمة، ونظريات الحوسبة، والمشاريع العملية، وحل المشكلات التقنية.',
      },
      languages: {
        title: 'اللغتان الإنجليزية والتركية',
        meta: 'جامعة كارابوك، تركيا',
        body:
          'درست اللغتين الإنجليزية والتركية من خلال مقررات في القواعد واللغويات والدراسات الثقافية، مما عزز قدرتي على التواصل في بيئات متعددة الثقافات.',
      },
    },
    certifications: {
      heading: 'الشهادات',
      tomer: 'شهادة TÖMER في اللغة التركية، جامعة كارابوك',
      english: 'شهادة إنجاز في اللغة الإنجليزية، جامعة كارابوك',
      security: 'تدريب التوعية الأمنية، Conectys',
      wellness: 'برنامج الرفاهية - دليل Conectysians، Conectys',
    },
    footer: {
      nationality: 'تركي وسوري',
    },
  },
  tr: {
    meta: {
      title: 'Mohamed Ali khateb | BT Uzmanı',
      description:
        'BAE merkezli Bilgisayar Mühendisi ve BT Uzmanı Mohamed Ali khateb için profesyonel portfolyo web sitesi.',
    },
    profile: {
      name: 'Mohamed Ali khateb',
    },
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      education: 'Eğitim',
      contact: 'İletişim',
    },
    hero: {
      eyebrow: 'Çalışmaya hazır',
      title: 'Bilgisayar Mühendisi | BT Uzmanı',
      summary:
        'Web geliştirme ve programlama alanında uzmanlaşmış, güçlü akademik temele ve sürekli öğrenme tutkusuna sahip bir bilgisayar mühendisiyim. Analitik, detay odaklı ve iş hedefleriyle uyumlu, güçlü kullanıcı deneyimi sunan dijital çözümler üretmeye odaklıyım.',
      contactButton: 'İletişime Geç',
      experienceButton: 'Deneyimi Gör',
      currentRoleLabel: 'Mevcut Pozisyon',
      currentCompany: 'NCTC, Sharjah',
      highlight1: 'Sharjah\'ta BT Uzmanı',
      highlight2: 'Bilgisayar Mühendisliği mezunu',
      highlight3: 'Web geliştirme odaklı',
    },
    code: {
      line1: 'const engineer = {',
      line2: '  focus: "IT + Web",',
      line3: '  mindset: "Analytical",',
      line4: '  location: "UAE"',
    },
    sections: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      education: 'Eğitim',
      contact: 'İletişim',
    },
    about: {
      heading: 'Teknoloji odaklı, pratik ve kullanıcı merkezli',
      body:
        'Bilgisayar mühendisliği temellerini BT desteği, AI içerik sistemleri, müşteri odaklı operasyonlar ve çok dilli iletişim deneyimiyle birleştiriyorum. Çalışma tarzım dikkatli analiz, güvenilir problem çözme ve dijital araçlar geliştikçe sürekli öğrenme isteğiyle şekillenir.',
    },
    contact: {
      locationLabel: 'Konum',
      location: 'Ajman, BAE',
      emailLabel: 'E-posta',
      phoneLabel: 'Telefon',
      whatsappLabel: 'Whatsapp',
      languagesLabel: 'Diller',
      languages: 'Türkçe, İngilizce, Arapça',
      heading: 'İletişim kuralım',
      body:
        'BAE içinde BT desteği, web geliştirme veya teknoloji odaklı fırsatlar için e-posta ya da telefon üzerinden doğrudan iletişime geçebilirsiniz.',
    },
    skills: {
      heading: 'Dengeli teknik ve profesyonel yetenek seti',
      frontend: 'Frontend',
      webDesign: 'Web Tasarımı',
      databases: 'Veritabanları',
      dataStructures: 'Veri Yapıları',
      programming: 'Programlama',
      productivity: 'Verimlilik',
      timeManagement: 'Zaman Yönetimi',
      professional: 'Profesyonel',
      attention: 'Detaylara Dikkat',
      problemSolving: 'Problem Çözme',
    },
    experience: {
      heading: 'BT, AI ve hizmet operasyonları alanında profesyonel deneyim',
      current: {
        period: 'Güncel',
        role: 'BT Uzmanı',
        meta: 'National Contracting Company | Sharjah, BAE',
        body:
          'Şu anda Sharjah, BAE\'de NCTC bünyesinde BT Uzmanı olarak çalışıyorum. Teknoloji operasyonlarını, sorun gidermeyi ve günlük BT hizmetlerinin güvenilir şekilde sürdürülmesini destekliyorum.',
      },
      ai: {
        role: 'AI Eğitmeni',
        meta: 'Conectys | İstanbul, Türkiye',
        body:
          'TikTok içerik sınıflandırma ve moderasyon sistemleri için AI modellerini eğittim ve optimize ettim. Platform verilerini analiz ettim, teknik ve veri ekipleriyle çalıştım, filtre doğruluğunu iyileştirdim ve politika güncellemelerine göre sistem performansını değerlendirdim.',
      },
      moderator: {
        role: 'İçerik Moderatörü',
        meta: 'Conectys | İstanbul, Türkiye',
        body:
          'TikTok üzerindeki hassas içerikleri platform politikaları ve gizlilik standartlarına uygunluk açısından inceledim. Güvenli bir dijital ortam sağlamak için dahili yönergeleri, moderasyon araçlarını, hızlı karar verme becerisini ve detaylara dikkati kullandım.',
      },
      clinic: {
        role: 'Hasta Deneyimi Görevlisi',
        meta: 'Elay Clinic | İstanbul, Türkiye',
        body:
          'Hastaların tıbbi süreçlerinde destek verdim, talepleri yanıtladım, Arapça-Türkçe tercüme sağladım, takipleri, kayıt ve veri girişini, randevu planlamasını, tıbbi kayıt güncellemelerini, sigorta kontrollerini, faturalandırma ve ödeme desteğini yönettim.',
      },
    },
    education: {
      heading: 'Akademik temel ve sertifikalar',
      engineering: {
        title: 'Bilgisayar Mühendisliği',
        meta: 'Karabük Üniversitesi, Türkiye',
        body:
          'Yazılım geliştirme, sistem tasarımı, bilgisayar bilimi teorisi, uygulamalı projeler ve teknik problem çözme alanlarında güçlü bir temel edindim.',
      },
      languages: {
        title: 'İngilizce ve Türkçe Dilleri',
        meta: 'Karabük Üniversitesi, Türkiye',
        body:
          'İngilizce ve Türkçe eğitimi alarak dil bilgisi, dilbilim ve kültürel çalışmalar alanlarında kendimi geliştirdim; çok kültürlü ortamlarda iletişim becerilerimi güçlendirdim.',
      },
    },
    certifications: {
      heading: 'Sertifikalar',
      tomer: 'TÖMER sertifikası - Türkçe dili, Karabük Üniversitesi',
      english: 'İngilizce başarı sertifikası, Karabük Üniversitesi',
      security: 'Güvenlik farkındalığı eğitimi, Conectys',
      wellness: 'Wellness programı - Conectysians Guide, Conectys',
    },
    footer: {
      nationality: 'Türk ve Suriyeli',
    },
  },
};

let contentOverrides = {};
let currentLanguage = localStorage.getItem('portfolio-language') || 'en';

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
root.dataset.theme = savedTheme;

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

function deepMerge(base, override) {
  if (!override || typeof override !== 'object') {
    return JSON.parse(JSON.stringify(base));
  }

  const merged = Array.isArray(base) ? [...base] : { ...base };
  Object.keys(override).forEach((key) => {
    const baseValue = merged[key];
    const overrideValue = override[key];
    merged[key] =
      baseValue && typeof baseValue === 'object' && typeof overrideValue === 'object'
        ? deepMerge(baseValue, overrideValue)
        : overrideValue;
  });
  return merged;
}

function getLanguageContent(language) {
  return deepMerge(translations[language] || translations.en, contentOverrides[language]);
}

function getTranslation(language, path) {
  return path.split('.').reduce((value, key) => value?.[key], getLanguageContent(language));
}

function setLanguage(language) {
  const dictionary = translations[language] ? language : 'en';
  const isArabic = dictionary === 'ar';
  const languageContent = getLanguageContent(dictionary);

  currentLanguage = dictionary;
  root.lang = dictionary;
  root.dir = isArabic ? 'rtl' : 'ltr';
  root.dataset.lang = dictionary;
  document.title = languageContent.meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', languageContent.meta.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getTranslation(dictionary, element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === dictionary;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('portfolio-language', dictionary);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(currentLanguage);

function updateBackToTopVisibility() {
  if (backToTop) {
    backToTop.classList.toggle('visible', window.scrollY > 420);
  }
}

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
