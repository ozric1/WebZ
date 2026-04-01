export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    nav: {
      services: "Services",
      work: "Réalisations",
      contact: "Contact",
      faq: "FAQ",
      letsTalk: "Discutons",
    },
    hero: {
      available: "Website/App Experts",
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
          description: "Une plateforme analytique de haute performance pour l'industrie de la nuit. Redéfinissez la gestion des réservations avec une visualisation des données en temps réel et un tableau de bord intuitif.",
          features: ["Données Temps Réel", "Gestion de Réservation", "Analyse de Revenus"]
        },
        {
          category: "Éco-Resort & Sanctuaire",
          title: "Natura Jungle",
          description: "Une expérience numérique immersive pour un resort écologique de luxe. Nous avons combiné des visuels haute résolution avec des animations fluides pour présenter les activités équestres et aquatiques du sanctuaire.",
          features: ["Design Immersif", "Système de Réservation", "Animations Fluides"]
        },
        {
          category: "Gestion d'Installations Sportives",
          title: "SportsArena",
          description: "Une plateforme de gestion d'installations sportives à la pointe de la technologie. Utilise des visualisations 3D et un moteur de planification en temps réel pour simplifier les réservations complexes.",
          features: ["Visualisation 3D", "Moteur de Planning", "Multi-Sports"]
        },
        {
          category: "Formation en Anglais Exécutif",
          title: "Zentia World",
          description: "Un écosystème d'apprentissage complet pour la formation en anglais des cadres. Comprend un cursus interactif de 15 modules, un suivi automatisé des progrès et un tableau de bord personnalisé.",
          features: ["E-Learning", "Suivi de Progrès", "Dashboard Client"]
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
    },
    banner: {
      construction: "Nightly & SportsArena : En cours, en construction 🔨",
      underConstruction: "En construction 🔨"
    }
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      contact: "Contact",
      faq: "FAQ",
      letsTalk: "Let's Talk",
    },
    hero: {
      available: "Website/App Experts",
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
          description: "A high-performance analytics dashboard for the nightlife industry. Redefine guest management with real-time data visualization and an intuitive dashboard.",
          features: ["Real-time Data", "Booking Management", "Revenue Analytics"]
        },
        {
          category: "Eco-Resort & Sanctuary",
          title: "Natura Jungle",
          description: "An immersive digital experience for a luxury eco-resort. We combined high-resolution visuals with smooth scroll animations to showcase the sanctuary's equestrian and aquatic activities.",
          features: ["Immersive Design", "Booking System", "Smooth Animations"]
        },
        {
          category: "Sports Facility Management",
          title: "SportsArena",
          description: "A cutting-edge sports facility management platform. Utilizes 3D visualizations and a real-time scheduling engine to simplify complex booking workflows.",
          features: ["3D Visualization", "Scheduling Engine", "Multi-Sport Support"]
        },
        {
          category: "Executive English Training",
          title: "Zentia World",
          description: "A comprehensive e-learning ecosystem for executive English training. Features a 15-module interactive curriculum, automated progress tracking, and a custom student dashboard.",
          features: ["E-Learning", "Progress Tracking", "Student Dashboard"]
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
    },
    banner: {
      construction: "Nightly & SportsArena: On-Going, Under Construction 🔨",
      underConstruction: "Under Construction 🔨"
    }
  },
  ar: {
    nav: {
      services: "خدماتنا",
      work: "أعمالنا",
      contact: "اتصل بنا",
      faq: "الأسئلة الشائعة",
      letsTalk: "لنتحدث",
    },
    hero: {
      available: "Website/App Experts",
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
          description: "لوحة تحكم تحليلية عالية الأداء لصناعة الحياة الليلية. أعد تعريف إدارة الضيوف من خلال تصور البيانات في الوقت الفعلي ولوحة تحكم بديهية.",
          features: ["بيانات فورية", "إدارة الحجز", "تحليلات الإيرادات"]
        },
        {
          category: "منتجع بيئي ومحمية",
          title: "Natura Jungle",
          description: "تجربة رقمية غامرة لمنتجع بيئي فاخر. قمنا بدمج صور عالية الدقة مع رسوم متحركة سلسة لعرض أنشطة الفروسية والمائية في المحمية.",
          features: ["تصميم غامر", "نظام حجز", "رسوم متحركة سلسة"]
        },
        {
          category: "إدارة المرافق الرياضية",
          title: "SportsArena",
          description: "منصة متطورة لإدارة المرافق الرياضية. تستخدم تصورات ثلاثية الأبعاد ومحرك جدولة في الوقت الفعلي لتبسيط سير عمل الحجز المعقد.",
          features: ["تصور ثلاثي الأبعاد", "محرك جدولة", "دعم رياضات متعددة"]
        },
        {
          category: "تدريب اللغة الإنجليزية التنفيذية",
          title: "Zentia World",
          description: "نظام تعليمي إلكتروني شامل لتدريب اللغة الإنجليزية التنفيذية. يتميز بمنهج تفاعلي مكون من 15 وحدة، وتتبع تلقائي للتقدم، ولوحة تحكم مخصصة للطلاب.",
          features: ["تعليم إلكتروني", "تتبع التقدم", "لوحة تحكم الطالب"]
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
    },
    banner: {
      construction: "Nightly & SportsArena: قيد التنفيذ، تحت الإنشاء 🔨",
      underConstruction: "تحت الإنشاء 🔨"
    }
  }
};
