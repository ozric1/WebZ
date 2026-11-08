export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      pricing: "Tarifs",
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
    about: {
      title: "Pourquoi webZ ?",
      subtitle: "L’Expertise Technique au Service de votre Croissance.",
      cards: [
        {
          title: "Moteurs de Croissance",
          description: "Nous ne nous contentons pas de coder des sites ; nous bâtissons des moteurs de croissance pour les entreprises marocaines."
        },
        {
          title: "Expertise Locale",
          description: "Nous comprenons les défis du marché local. D'un complexe sportif à un parc d'aventure, notre mission est de convertir."
        },
        {
          title: "Tech & Proximité",
          description: "Une technologie de pointe (React, Next.js), un design sur mesure, et un accompagnement transparent."
        }
      ]
    },
    pricing: {
      title: "Nos Solutions \"Clés en Main\"",
      subtitle: "Un investissement serein, pensé pour votre croissance.",
      tiers: [
        {
          name: "L'Essentiel",
          description: "Idéal pour les lancements",
          price: "Paiement unique",
          features: [
            "Design Moderne & Responsive",
            "Optimisation SEO de base",
            "Formulaire de contact"
          ],
          button: "Commencer"
        },
        {
          name: "Le Premium (WaaS)",
          description: "Le choix des entreprises en croissance",
          price: "Abonnement mensuel de 12 mois",
          features: [
            "Tout inclus : Hébergement & SEO",
            "Mises à jour illimitées",
            "Support Prioritaire 7j/7",
            "Tableaux de bord personnalisés"
          ],
          popular: true,
          button: "Choisir WaaS"
        },
        {
          name: "Sur Mesure",
          description: "Pour les projets complexes",
          price: "Sur Devis",
          features: [
            "Applications Web & SaaS",
            "Architecture Cloud (Azure/AWS)"
          ],
          button: "Demander un Devis"
        }
      ]
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
          category: "Eco-Luxe & Hôtellerie",
          title: "Natura Jungle",
          description: "Une odyssée digitale captivante pour un éco-resort de luxe et club équestre. Vitrine immersive et application de commande locale reliant serveurs et cuisine en temps réel.",
          features: ["Expérience Immersive", "Commande Locale Temps Réel", "Réservations Directes"]
        },
        {
          category: "E-Learning Corporatif & EdTech",
          title: "Zentia World",
          description: "Une plateforme d'apprentissage sur-mesure destinée aux leaders et cadres dirigeants. Parcours interactif modulaire, suivi de progression intelligent et analytiques d'apprentissage.",
          features: ["EdTech d'Élite", "Progression par IA", "Dashboard Premium"]
        },
        {
          category: "Conseil Fiduciaire & Audit",
          title: "AGEFIC",
          description: "Une vitrine digitale institutionnelle de haute voltige pour un cabinet fiduciaire d'exception. Conception minimaliste, sécurité renforcée et valorisation épurée de l'expertise conseil.",
          features: ["Design Minimaliste", "Conseil Stratégique", "Sécurité Intégrale"]
        },
        {
          category: "Haute Parfumerie & Soins Capillaires de Luxe",
          title: "Madibee",
          description: "Une boutique e-commerce d'exception dédiée aux fragrances raffinées et aux soins capillaires botaniques de prestige. Une direction artistique élégante et un parcours d'achat luxueux.",
          features: ["Haute Parfumerie", "Soins Botaniques Rares", "E-Commerce de Luxe"]
        },
        {
          category: "Complexes Sportifs Premium (Prototype UI)",
          title: "SportsArena",
          description: "Un prototype de réservation nouvelle génération pour complexes sportifs haut de gamme. Cartographie 3D interactive et moteur de planification instantanée.",
          features: ["Cartographie 3D", "Moteur de Réservation", "Paiement Sécurisé"]
        },
        {
          category: "Analyses VIP & Nightlife (Prototype UI)",
          title: "Nightly",
          description: "Une plateforme analytique dédiée aux établissements de prestige. Suivi des tables VIP et gestion des réservations en temps réel via un tableau de bord immersif.",
          features: ["VIP Table Tracking", "Visualisation Temps Réel", "Analyses Prédictives"]
        },
        {
          category: "Location de Voitures de Luxe (Prototype UI)",
          title: "Hilton VIP Rentals",
          description: "Une plateforme conceptuelle de location de voitures de luxe et services de chauffeur privé. Flotte d'exception et réservation fluide pour clientèle VIP.",
          features: ["Réservation en Ligne", "Chauffeur Privé", "Flotte Premium"]
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
      about: "About",
      services: "Services",
      pricing: "Pricing",
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
    about: {
      title: "Why webZ?",
      subtitle: "Technical Expertise Driving Your Growth.",
      cards: [
        {
          title: "Growth Engines",
          description: "We don't just code websites; we build scalable growth engines for local and global businesses."
        },
        {
          title: "Local Expertise",
          description: "We understand market challenges. From sports arenas to adventure parks, our mission is to convert visitors."
        },
        {
          title: "Tech & Proximity",
          description: "Cutting-edge tech (React, Next.js), custom design, and incredibly transparent local support."
        }
      ]
    },
    pricing: {
      title: "Turnkey Solutions",
      subtitle: "A stress-free investment tailored for growth.",
      tiers: [
        {
          name: "The Essential",
          description: "Perfect for new launches",
          price: "One-time Payment",
          features: [
            "Modern & Responsive Design",
            "Basic SEO Optimization",
            "Contact Forms"
          ],
          button: "Get Started"
        },
        {
          name: "Premium (WaaS)",
          description: "The choice of growing businesses",
          price: "12-Month Monthly Subscription",
          features: [
            "All-Inclusive: Hosting & SEO",
            "Unlimited Updates",
            "Priority Support 24/7",
            "Custom Client Dashboards"
          ],
          popular: true,
          button: "Choose WaaS"
        },
        {
          name: "Custom Build",
          description: "For complex web architecture",
          price: "Custom Quote",
          features: [
            "Web Applications & SaaS",
            "Cloud Architecture (AWS/Azure)"
          ],
          button: "Request a Quote"
        }
      ]
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
          category: "Eco-Luxury & Hospitality",
          title: "Natura Jungle",
          description: "A captivating digital experience crafted for an ultra-luxury eco-resort and equestrian club. Featuring bespoke storytelling and a real-time ordering system connecting staff to kitchen.",
          features: ["Immersive Experience", "Real-Time Local Ordering", "Direct Bookings"]
        },
        {
          category: "Corporate EdTech & Training",
          title: "Zentia World",
          description: "A bespoke learning platform tailored for corporate leaders and executives. Combining interactive modules, intelligent progress tracking, and personalized dashboards.",
          features: ["Corporate EdTech", "Smart Progression Tracking", "Executive Dashboard"]
        },
        {
          category: "Corporate Finance & Legal Advisory",
          title: "AGEFIC",
          description: "A high-end institutional showcase designed for a premier legal and tax advisory firm. Combining minimalist design principles with high-performance navigation and structural layout.",
          features: ["Minimalist Identity", "Strategic Counsel", "Full Data Security"]
        },
        {
          category: "Luxury Fragrance & Botanical Hair Care",
          title: "Madibee",
          description: "An ultra-premium e-commerce flagship celebrating bespoke fragrances and prestige botanical hair care. Featuring refined editorial aesthetics and an effortless shopping journey.",
          features: ["Haute Parfumerie", "Botanical Hair Care", "Luxury E-Commerce"]
        },
        {
          category: "Elite Sports Arenas (UI Prototype)",
          title: "SportsArena",
          description: "A prototype reservation ecosystem for elite sports complexes. Featuring interactive 3D field mapping and a real-time scheduling engine built to scale.",
          features: ["3D Field Mapping", "Instant Reservations", "Secure Payments"]
        },
        {
          category: "VIP Table Tracking & Nightlife (UI Prototype)",
          title: "Nightly",
          description: "An analytics platform engineered for prestige nightlife venues. Streamline VIP table management, guest lists, and reservations through a high-performance dashboard.",
          features: ["VIP Table Tracking", "Real-Time Analytics", "Predictive Revenue"]
        },
        {
          category: "Luxury Car Rental (UI Prototype)",
          title: "Hilton VIP Rentals",
          description: "A concept luxury car rental and private chauffeur platform. Offering an exceptional fleet and a seamless booking flow tailored for VIP clients.",
          features: ["Online Booking", "Private Chauffeur", "Premium Fleet"]
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
      about: "من نحن",
      services: "خدماتنا",
      pricing: "الأسعار",
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
    about: {
      title: "لماذا webZ؟",
      subtitle: "الخبرة التقنية في خدمة نموك.",
      cards: [
        {
          title: "محركات النمو",
          description: "نحن لا نكتفي ببرمجة المواقع فحسب؛ بل نبني محركات نمو قابلة للتطوير للشركات."
        },
        {
          title: "خبرة محلية",
          description: "نتفهم تحديات السوق المحلي. مهمتنا هي تحويل زوار موقعك إلى عملاء مخلصين."
        },
        {
          title: "تكنولوجيا وقرب",
          description: "أحدث التقنيات (React, Next.js)، تصميم مخصص، ودعم شفاف وقريب منك."
        }
      ]
    },
    pricing: {
      title: "حلول متكاملة",
      subtitle: "استثمار خالٍ من التوتر ومصمم للنمو المستقبلي.",
      tiers: [
        {
          name: "الأساسي",
          description: "مثالي للمشاريع الناشئة",
          price: "دفع لمرة واحدة",
          features: [
            "تصميم حديث ومتجاوب",
            "تحسين محركات البحث الأساسي",
            "نماذج الاتصال"
          ],
          button: "ابدأ الآن"
        },
        {
          name: "الاحترافي (WaaS)",
          description: "خيار الشركات النامية",
          price: "اشتراك شهري لمدة 12 شهراً",
          features: [
            "شامل كلياً: استضافة و SEO",
            "تحديثات غير محدودة",
            "دعم أولوي على مدار الساعة",
            "لوحات تحكم مخصصة"
          ],
          popular: true,
          button: "اختر WaaS"
        },
        {
          name: "بناء مخصص",
          description: "للمشاريع المعقدة",
          price: "تسعير حسب الطلب",
          features: [
            "تطبيقات الويب و SaaS",
            "البنية التحتية السحابية (Azure/AWS)"
          ],
          button: "طلب عرض سعر"
        }
      ]
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
          category: "الضيافة الفاخرة المستدامة",
          title: "Natura Jungle",
          description: "تجربة رقمية آسرة لمنتجع بيئي فاخر ونادٍ للفروسية. تجمع بين الواجهة التفاعلية وتطبيق طلبات محلي يربط النوادل بالمطبخ في الوقت الفعلي.",
          features: ["تجربة تفاعلية غامرة", "نظام طلبات فوري", "حجوزات مباشرة"]
        },
        {
          category: "منصات التعليم المؤسسي",
          title: "Zentia World",
          description: "منصة تعليمية مخصصة للقادة والمدراء التنفيذيين. تجمع بين المناهج التفاعلية، وتتبع التقدم الذكي، ولوحات التحكم الشخصية.",
          features: ["تعليم إلكتروني نخبوي", "تتبع مدعوم بالذكاء الاصطناعي", "لوحة تحكم للمدراء"]
        },
        {
          category: "الاستشارات المالية والقانونية للشركات",
          title: "AGEFIC",
          description: "بوابة رقمية مؤسسية راقية مصممة لمكتب استشارات قانونية وضريبية رائد. تصميم بسيط وتصفح فائق السرعة يعكس الاحترافية العالية.",
          features: ["هوية بصرية بسيطة", "استشارات استراتيجية", "أمان كامل للبيانات"]
        },
        {
          category: "العطور الفاخرة والعناية بالشعر",
          title: "Madibee",
          description: "منصة تجارة إلكترونية راقية متخصصة في العطور الفاخرة ومستحضرات العناية النباتية بالشعر. إخراج فني أنيق وتجربة تسوق استثنائية.",
          features: ["تجارة إلكترونية فاخرة", "عناية نباتية فائقة", "عطور حصرية"]
        },
        {
          category: "المنشآت الرياضية النخبوية (نموذج أولي)",
          title: "SportsArena",
          description: "نموذج أولي لنظام حجز وجدولة متطور للمجمعات الرياضية النخبوية. تخطيط ثلاثي الأبعاد تفاعلي ومحرك حجوزات فوري.",
          features: ["خرائط ثلاثية الأبعاد", "حجز فوري", "دفع آمن متعدد القنوات"]
        },
        {
          category: "تحليلات مخصصة وقطاع السهر (نموذج أولي)",
          title: "Nightly",
          description: "منصة تحليلات مصممة لأرقى وجهات السهر والضيافة. تبسيط إدارة طاولات كبار الشخصيات والحجوزات عبر لوحة تحكم تفاعلية.",
          features: ["تتبع طاولات كبار الشخصيات", "عرض البيانات الفوري", "التحليلات التنبؤية"]
        },
        {
          category: "تأجير السيارات الفاخرة (نموذج أولي)",
          title: "Hilton VIP Rentals",
          description: "منصة تجريبية لتأجير السيارات الفاخرة وخدمات السائق الخاص. أسطول مميز وتجربة حجز سلسة مخصصة للعملاء المميزين.",
          features: ["الحجز عبر الإنترنت", "سائق خاص", "أسطول مميز"]
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
