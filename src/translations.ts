export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    nav: {
      services: "Services",
      work: "Réalisations",
      contact: "Contact",
      letsTalk: "Discutons",
    },
    hero: {
      available: "Disponibles pour de nouveaux projets",
      title1: "Création d'Expériences",
      title2: "Digitales.",
      description: "Chez webZ, nous créons des sites web hautement modernes et interactifs qui ne sont pas seulement beaux, mais performants. Nous élevons les marques grâce à un design stratégique et un développement robuste.",
      viewWork: "Voir notre travail",
      whatIDo: "Ce que nous faisons",
    },
    services: {
      title: "Notre Expertise.",
      description: "Une approche complète de la création de produits numériques, du concept initial au déploiement final.",
      items: [
        {
          title: "Web Design",
          description: "Création d'interfaces visuellement époustouflantes et centrées sur l'utilisateur qui captivent et convertissent. Accent sur l'esthétique moderne et l'UX intuitive."
        },
        {
          title: "Développement Web",
          description: "Création d'applications web robustes, évolutives et ultra-rapides utilisant des technologies de pointe comme React, Next.js et Tailwind."
        },
        {
          title: "Interactif & 3D",
          description: "Amélioration des expériences avec des animations fluides, WebGL et des éléments interactifs qui rendent votre marque mémorable."
        },
        {
          title: "Déploiement & SEO",
          description: "Garantir que votre site est sécurisé, optimisé pour les moteurs de recherche et déployé sans faille sur une infrastructure moderne."
        }
      ]
    },
    work: {
      title: "Projets Sélectionnés.",
      description: "Un aperçu de nos projets récents, mettant en valeur le design interactif et l'ingénierie robuste.",
      viewCaseStudy: "Voir l'étude de cas",
      projects: [
        {
          category: "Vie Nocturne & Divertissement",
          title: "Nightly",
          description: "Une plateforme élégante au thème sombre redéfinissant la réservation et l'analyse de la vie nocturne avec une visualisation des données en temps réel."
        },
        {
          category: "Éco-Resort & Sanctuaire",
          title: "Natura Jungle",
          description: "Une expérience numérique immersive pour un sanctuaire de nature, invitant à 'Respirer la Nature' à travers des visuels élégants et une interface fluide."
        },
        {
          category: "Gestion d'Installations Sportives",
          title: "SportsArena",
          description: "Interface à haute énergie basée sur une grille pour les réservations d'installations sportives haut de gamme et le suivi des événements."
        },
        {
          category: "Gestion de l'Apprentissage en Entreprise",
          title: "Zentia World",
          description: "Un tableau de bord clair et structuré conçu pour maîtriser la présence de l'entreprise et rationaliser la formation des employés."
        }
      ]
    },
    contact: {
      title1: "Comment Nous Construisons",
      title2: "Votre Site Web.",
      description: "Cessez de perdre des clients à cause d'une présence en ligne obsolète.",
      startProject: "Réserver une Consultation Gratuite",
      steps: [
        { title: "Stratégie", description: "Nous définissons vos objectifs, votre public cible et les fonctionnalités dont vous avez besoin pour optimiser votre activité." },
        { title: "Proposition & Devis", description: "Sur la base de notre échange stratégique, nous vous soumettons une proposition détaillée et une facturation transparente, parfaitement adaptées aux besoins de votre projet." },
        { title: "Wireframing", description: "Nous créons une structure conçue spécifiquement pour maximiser l'expérience utilisateur et les conversions." },
        { title: "Validation & Itération", description: "Nous vous présentons les premiers concepts pour validation, puis nous itérons et ajustons le design pour qu'il corresponde parfaitement à votre vision et à vos exigences." },
        { title: "Design & Développement", description: "Votre site est entièrement conçu et développé avec un code propre et rapide, ainsi que des intégrations pratiques." },
        { title: "Lancement & Suivi", description: "Votre site est en ligne. Vous choisissez si vous souhaitez une propriété totale avec un tableau de bord facile à utiliser, ou un abonnement mensuel où nous gérons les mises à jour." }
      ]
    },
    footer: {
      rights: "webZ. Tous droits réservés."
    }
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      available: "Available for new projects",
      title1: "Crafting Digital",
      title2: "Experiences.",
      description: "At webZ, we build highly modern, interactive websites that don't just look good—they perform. Elevating brands through strategic design and robust development.",
      viewWork: "View Our Work",
      whatIDo: "What We Do",
    },
    services: {
      title: "Our Expertise.",
      description: "A comprehensive approach to digital product creation, from initial concept to final deployment.",
      items: [
        {
          title: "Web Design",
          description: "Crafting visually stunning, user-centric interfaces that captivate and convert. Focusing on modern aesthetics and intuitive UX."
        },
        {
          title: "Web Development",
          description: "Building robust, scalable, and lightning-fast web applications using cutting-edge technologies like React, Next.js, and Tailwind."
        },
        {
          title: "Interactive & 3D",
          description: "Elevating experiences with smooth animations, WebGL, and interactive elements that make your brand memorable."
        },
        {
          title: "Deployment & SEO",
          description: "Ensuring your site is secure, optimized for search engines, and deployed flawlessly on modern infrastructure."
        }
      ]
    },
    work: {
      title: "Selected Work.",
      description: "A showcase of our recent projects, highlighting interactive design and robust engineering.",
      viewCaseStudy: "View Case Study",
      projects: [
        {
          category: "Nightlife & Entertainment",
          title: "Nightly",
          description: "A sleek, dark-themed platform redefining nightlife booking and analytics with real-time data visualization."
        },
        {
          category: "Eco-Resort & Sanctuary",
          title: "Natura Jungle",
          description: "An immersive digital experience for a nature sanctuary, inviting visitors to 'Breathe Nature' through elegant visuals and a fluid interface."
        },
        {
          category: "Sports Facility Management",
          title: "SportsArena",
          description: "High-energy, grid-based interface for premium sports facility reservations and event tracking."
        },
        {
          category: "Corporate Learning Management",
          title: "Zentia World",
          description: "A clean, structured dashboard designed to master corporate presence and streamline employee training."
        }
      ]
    },
    contact: {
      title1: "How We Build",
      title2: "Your Website.",
      description: "Stop losing customers to an outdated web presence.",
      startProject: "Book a Free Consultation",
      steps: [
        { title: "Strategy", description: "We define your goals, target audience, and the features you need to streamline your business." },
        { title: "Proposal & Invoicing", description: "Based on our strategic discussion, we provide a tailored proposal and transparent invoicing aligned with your specific project requirements." },
        { title: "Wireframing", description: "We create a structured layout designed specifically to maximize user experience and conversions." },
        { title: "Review & Refinement", description: "We present the initial concepts for your review, iterating and refining the design to ensure it perfectly aligns with your vision and requirements." },
        { title: "Build & Design", description: "Your site is fully designed and developed with clean, fast code and practical integrations." },
        { title: "Launch & Handover", description: "Your site goes live. You choose whether you want total ownership with an easy-to-use editing dashboard, or a hands-off monthly subscription where we manage the updates." }
      ]
    },
    footer: {
      rights: "webZ. All rights reserved."
    }
  },
  ar: {
    nav: {
      services: "خدماتنا",
      work: "أعمالنا",
      contact: "اتصل بنا",
      letsTalk: "لنتحدث",
    },
    hero: {
      available: "متاحون لمشاريع جديدة",
      title1: "صناعة تجارب",
      title2: "رقمية.",
      description: "في webZ، نقوم ببناء مواقع ويب تفاعلية وحديثة للغاية لا تبدو جيدة فحسب، بل تؤدي أداءً ممتازاً. نرتقي بالعلامات التجارية من خلال التصميم الاستراتيجي والتطوير القوي.",
      viewWork: "شاهد أعمالنا",
      whatIDo: "ماذا نفعل",
    },
    services: {
      title: "خبراتنا.",
      description: "نهج شامل لإنشاء المنتجات الرقمية، من المفهوم الأولي إلى النشر النهائي.",
      items: [
        {
          title: "تصميم الويب",
          description: "صياغة واجهات مذهلة بصرياً وتتمحور حول المستخدم وتأسر الانتباه وتحقق التحويلات. التركيز على الجماليات الحديثة وتجربة المستخدم البديهية."
        },
        {
          title: "تطوير الويب",
          description: "بناء تطبيقات ويب قوية وقابلة للتطوير وسريعة للغاية باستخدام أحدث التقنيات مثل React و Next.js و Tailwind."
        },
        {
          title: "تفاعلي وثلاثي الأبعاد",
          description: "الارتقاء بالتجارب من خلال الرسوم المتحركة السلسة و WebGL والعناصر التفاعلية التي تجعل علامتك التجارية لا تُنسى."
        },
        {
          title: "النشر وتحسين محركات البحث",
          description: "ضمان أن موقعك آمن ومُحسّن لمحركات البحث ومنشور بشكل لا تشوبه شائبة على بنية تحتية حديثة."
        }
      ]
    },
    work: {
      title: "أعمال مختارة.",
      description: "عرض لمشاريعنا الأخيرة، يسلط الضوء على التصميم التفاعلي والهندسة القوية.",
      viewCaseStudy: "عرض دراسة الحالة",
      projects: [
        {
          category: "الحياة الليلية والترفيه",
          title: "Nightly",
          description: "منصة أنيقة ذات طابع داكن تعيد تعريف حجز الحياة الليلية والتحليلات مع تصور البيانات في الوقت الفعلي."
        },
        {
          category: "منتجع بيئي ومحمية",
          title: "Natura Jungle",
          description: "تجربة رقمية غامرة لمحمية طبيعية، تدعو الزوار لـ 'تنفس الطبيعة' من خلال صور أنيقة وواجهة سلسة."
        },
        {
          category: "إدارة المرافق الرياضية",
          title: "SportsArena",
          description: "واجهة عالية الطاقة قائمة على الشبكة لحجوزات المرافق الرياضية المتميزة وتتبع الأحداث."
        },
        {
          category: "إدارة التعلم المؤسسي",
          title: "Zentia World",
          description: "لوحة معلومات نظيفة ومنظمة مصممة لإتقان التواجد المؤسسي وتبسيط تدريب الموظفين."
        }
      ]
    },
    contact: {
      title1: "كيف نبني",
      title2: "موقعك الإلكتروني.",
      description: "توقف عن خسارة العملاء بسبب وجود رقمي قديم.",
      startProject: "احجز استشارة مجانية",
      steps: [
        { title: "الاستراتيجية", description: "نحدد أهدافك، والجمهور المستهدف، والميزات التي تحتاجها لتبسيط عملك." },
        { title: "عرض السعر والاتفاق", description: "بناءً على مناقشتنا الاستراتيجية، نقدم لك عرضاً مخصصاً وفواتير شفافة تتوافق تماماً مع متطلبات مشروعك المحددة." },
        { title: "تخطيط الهيكل", description: "نقوم بإنشاء تخطيط هيكلي مصمم خصيصًا لزيادة تجربة المستخدم ومعدلات التحويل." },
        { title: "المراجعة والتطوير", description: "نقدم لك المفاهيم الأولية للمراجعة، ثم نقوم بالتعديل والتطوير لضمان توافق التصميم تماماً مع رؤيتك ومتطلباتك." },
        { title: "البناء والتصميم", description: "يتم تصميم وتطوير موقعك بالكامل باستخدام كود نظيف وسريع وتكاملات عملية." },
        { title: "الإطلاق والتسليم", description: "يصبح موقعك متاحًا للجمهور. يمكنك اختيار ما إذا كنت تريد ملكية كاملة مع لوحة تحكم سهلة الاستخدام، أو اشتراكًا شهريًا حيث ندير نحن التحديثات." }
      ]
    },
    footer: {
      rights: "webZ. جميع الحقوق محفوظة."
    }
  }
};
