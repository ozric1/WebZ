export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      pricing: "Tarifs",
      work: "Projets",
      contact: "Contact",
      faq: "FAQ",
      letsTalk: "Discutons",
    },
    hero: {
      available: "Sites, E-Commerce & Back-Offices Sur Mesure",
      title1: "Le site que vos clients voient.",
      title2: "Le back-office qui le fait tourner.",
      description: "Sites vitrines, e-commerce et systèmes de gestion sur mesure pour les entreprises marocaines. Conception, développement et déploiement — par une seule personne, du premier croquis au code en production.",
      viewWork: "Voir les projets",
      whatIDo: "Ce que je construis",
      auditCta: "Audit gratuit — 15 min",
      bookCall: "Réserver un appel",
      responseGuarantee: "Réponse sous 2h ouvrées · Devis fixe · 50% au démarrage, solde à la livraison",
    },
    about: {
      title: "Pourquoi webZ ?",
      subtitle: "Un seul interlocuteur, du design au code en production.",
      cards: [
        {
          title: "Pas d'intermédiaire",
          description: "Vous échangez directement avec le développeur. Pas de chef de projet junior, pas de devis gonflé, pas de sous-traitance."
        },
        {
          title: "Le back-office avec le site",
          description: "La vitrine sans outil de gestion ne sert à rien. Chaque boutique et système est livré avec son panneau d'administration sur mesure."
        },
        {
          title: "Déploiement & Accompagnement",
          description: "Code moderne (React, Next.js, Firebase), hébergement ultra-rapide et support WhatsApp direct pour faire évoluer votre outil."
        }
      ]
    },
    services: {
      title: "Ce que je construis.",
      description: "Six choses que je livre. Pas de sous-traitance, pas d'intermédiaire.",
      footerNote: "« Chaque projet est livré avec son back-office quand il en a besoin. Vous n'avez pas à chercher un deuxième prestataire pour gérer vos produits. »",
      items: [
        {
          title: "1. Sites vitrines & corporate",
          description: "Pour les entreprises qui ont besoin d'une présence crédible. Design soigné, responsive, optimisé Google (SEO local Maroc), formulaire relié à WhatsApp ou email. Livré en 7 à 10 jours."
        },
        {
          title: "2. E-commerce",
          description: "Boutiques en ligne complètes : catalogue, panier, comptes clients, passerelle de paiement marocaine (CMI) ou paiement à la livraison, bilingue FR/AR ou FR/EN. Et surtout : le back-office pour gérer vos commandes et vos stocks sans toucher au code."
        },
        {
          title: "3. Back-offices & dashboards",
          description: "Vous avez déjà une activité mais vos données sont éparpillées sur Excel et WhatsApp ? Je construis une interface sécurisée qui centralise vos clients, vos commandes, vos stocks et vos plannings. Accessible sur mobile et ordinateur."
        },
        {
          title: "4. Réservation & prise de rendez-vous",
          description: "Pour restaurants, clubs équestres, cabinets médicaux, centres de bien-être. Parcours client direct vers WhatsApp ou système avec confirmation automatique, créneaux en temps réel et gestion des tables ou plannings."
        },
        {
          title: "5. Applications métier sur mesure",
          description: "Outils de terrain, commande en restaurant (prise de commande serveur sans dépendance internet), gestion d'interventions, portails clients. Conçus pour les réalités du terrain au Maroc."
        },
        {
          title: "6. Intégrations",
          description: "Connexion de vos outils entre eux : WhatsApp Business API, Firebase, passerelles SMS, Google Sheets, webhooks, systèmes de paiement locaux."
        }
      ]
    },
    work: {
      title: "Projets Sélectionnés.",
      description: "Quatre types de projets récents, du site vitrine au back-office temps réel.",
      viewCaseStudy: "Voir l'étude de cas",
      projects: [
        {
          category: "Éco-resort & parc animalier, Benslimane",
          title: "Natura Jungle",
          description: "Site immersif et parcours de réservation directe via WhatsApp. En ligne depuis 6 mois, zéro commission vers les plateformes.",
          features: ["Next.js", "Réservation", "WhatsApp"]
        },
        {
          category: "Parfums & soins, Maroc",
          title: "Madibee",
          description: "E-commerce complet : catalogue, panier, comptes clients, recherche, bilingue FR/EN. Avec un back-office qui pilote produits, catégories, stock et commandes en temps réel.",
          features: ["React", "Firebase", "E-commerce", "Back-office"]
        },
        {
          category: "Executive communication coaching",
          title: "Zentia",
          description: "Site de positionnement haut de gamme avec parcours d'audit et prise de contact directe.",
          features: ["Next.js", "Design", "Formulaire"]
        },
        {
          category: "Cabinet fiduciaire & juridique",
          title: "AGEFIC",
          description: "Site corporate livré. Mise en ligne en attente de validation des partenaires.",
          features: ["Next.js", "Corporate"]
        },
        {
          category: "Complexes Sportifs Premium (Prototype UI)",
          title: "SportsArena",
          description: "Prototype de réservation nouvelle génération pour complexes sportifs haut de gamme. Cartographie 3D et planification instantanée.",
          features: ["Cartographie 3D", "Réservation", "Paiement"]
        },
        {
          category: "Analyses VIP & Nightlife (Prototype UI)",
          title: "Nightly",
          description: "Plateforme analytique dédiée aux établissements de prestige. Suivi des tables VIP et gestion des flux en temps réel.",
          features: ["Tables VIP", "Temps Réel", "Dashboard"]
        },
        {
          category: "Location VIP & Chauffeur Privé (Prototype UI)",
          title: "Hilton VIP Rentals",
          description: "Concept exclusif de location de véhicules haut de gamme avec chauffeur privé.",
          features: ["Réservation", "Chauffeur", "Flotte Prestige"]
        }
      ]
    },
    pricing: {
      title: "Tarifs clairs & transparents",
      subtitle: "Un investissement serein, pensé pour votre croissance.",
      tiers: [
        {
          name: "L'Essentiel",
          description: "Idéal pour les lancements",
          price: "Paiement unique",
          features: [
            "Design Moderne & Responsive",
            "Optimisation SEO technique",
            "Formulaire + WhatsApp",
            "2 rounds de révisions inclus",
            "Code source 100% cédé"
          ],
          button: "Commencer"
        },
        {
          name: "Premium géré (WaaS)",
          description: "Le choix des entreprises en croissance",
          price: "Abonnement mensuel de 12 mois",
          features: [
            "Site sur mesure inclus",
            "Hébergement ultra-rapide & SSL",
            "Sauvegardes quotidiennes",
            "2h de contenu dédiées / mois",
            "Support WhatsApp sous 24h"
          ],
          popular: true,
          button: "Choisir WaaS"
        },
        {
          name: "Sur Mesure",
          description: "E-Commerce & Applications Métier",
          price: "Périmètre après audit",
          features: [
            "Boutique e-commerce + back-office",
            "Gestion des stocks temps réel",
            "Paiement sécurisé (CMI, Stripe)",
            "Applications & systèmes métier"
          ],
          button: "Demander une Étude"
        }
      ]
    },
    contact: {
      title1: "Vous avez",
      title2: "un projet ?",
      description: "Décrivez-le en trois lignes sur WhatsApp. Je vous réponds sous 2h ouvrées, et je vous dis franchement si je suis la bonne personne.",
      startProject: "Décrire mon projet sur WhatsApp",
      steps: [
        {
          title: "Audit Diagnostic (15 min)",
          description: "Nous échangeons directement pour identifier où votre entreprise perd du temps, de l'énergie ou des commissions. Sans engagement."
        },
        {
          title: "Proposition & Périmètre Cadré",
          description: "Nous définissons une solution pragmatique avec un calendrier clair et un devis fixe sans coût caché."
        },
        {
          title: "Conception & Architecture",
          description: "Nous concevons l'expérience utilisateur et l'architecture technique adaptées à vos contraintes de terrain."
        },
        {
          title: "Développement & Tests",
          description: "Développement avec du code moderne, performant et sécurisé, testé rigoureusement sur mobile et 4G."
        },
        {
          title: "Déploiement & Lancement",
          description: "Mise en ligne, tests opérationnels avec vos équipes et prise en main immédiate du back-office."
        },
        {
          title: "Suivi & Évolution (WaaS)",
          description: "Nous gérons l'hébergement, la sécurité et les mises à jour pour que votre outil reste toujours à la pointe."
        }
      ]
    },
    footer: {
      rights: "webZ. Tous droits réservés."
    },
    banner: {
      construction: "SportsArena & Nightly : Prototypes interactifs en cours de finalisation 🔨",
      underConstruction: "Prototype UI 🔨"
    }
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      pricing: "Pricing",
      work: "Projects",
      contact: "Contact",
      faq: "FAQ",
      letsTalk: "Let's Talk",
    },
    hero: {
      available: "Custom Websites, E-Commerce & Back-Offices",
      title1: "The website your clients see.",
      title2: "The back-office that runs it.",
      description: "Showcase sites, e-commerce, and bespoke management systems for Moroccan and international businesses. Designed, built, and shipped by a single person — from first sketch to production code.",
      viewWork: "View projects",
      whatIDo: "What I Build",
      auditCta: "Free 15-Min Audit",
      bookCall: "Book a Call",
      responseGuarantee: "Response within 2 business hours · Fixed quote · 50% deposit, balance on delivery",
    },
    about: {
      title: "Why webZ?",
      subtitle: "A single technical partner, from design to live production code.",
      cards: [
        {
          title: "Zero Middlemen",
          description: "You deal directly with the developer. No junior project managers, no inflated agency fees, no outsourced code."
        },
        {
          title: "The Back-Office Included",
          description: "A digital storefront without back-office management is useless. Every store and system comes with its tailored management interface."
        },
        {
          title: "Modern Tech & Deployment",
          description: "Modern stack (React, Next.js, Firebase), blazing-fast cloud hosting, and direct WhatsApp support to keep your systems evolving."
        }
      ]
    },
    services: {
      title: "What I Build.",
      description: "Six deliverables. Zero outsourcing, zero middlemen.",
      footerNote: "“Every project is delivered with its back-office when needed. You don't have to hire a second vendor to manage your products.”",
      items: [
        {
          title: "1. Showcase & Corporate Sites",
          description: "For businesses that require credible authority. Bespoke responsive design, local Google SEO optimization, forms connected directly to WhatsApp or email. Delivered in 7 to 10 days."
        },
        {
          title: "2. E-Commerce",
          description: "Complete online stores: product catalog, cart, customer accounts, local payment gateway (CMI) or cash on delivery, bilingual FR/AR or FR/EN. Plus the essential back-office to manage stock and orders without writing code."
        },
        {
          title: "3. Back-Offices & Dashboards",
          description: "Already running a business with data scattered across Excel and WhatsApp? I build a secure management interface centralizing customers, orders, inventory, and schedules. Available on mobile and desktop."
        },
        {
          title: "4. Bookings & Appointments",
          description: "For restaurants, equestrian resorts, medical clinics, and wellness centers. Direct WhatsApp customer flows or automated slots with live table and schedule management."
        },
        {
          title: "5. Custom Business Applications",
          description: "Field tools, offline-capable restaurant ordering for servers, intervention management, client portals. Built for real operational field conditions in Morocco."
        },
        {
          title: "6. Integrations",
          description: "Connecting your business tools together: WhatsApp Business API, Firebase, SMS gateways, Google Sheets, webhooks, and local payment gateways."
        }
      ]
    },
    work: {
      title: "Selected Work.",
      description: "Four recent project archetypes, from luxury showcase to real-time back-office.",
      viewCaseStudy: "View Case Study",
      projects: [
        {
          category: "Eco-Resort & Wildlife Park, Benslimane",
          title: "Natura Jungle",
          description: "Immersive site and direct booking flow via WhatsApp. Live for 6 months, zero commission paid to travel platforms.",
          features: ["Next.js", "Booking", "WhatsApp"]
        },
        {
          category: "Luxury Fragrance & Skincare, Morocco",
          title: "Madibee",
          description: "Full e-commerce: catalog, cart, accounts, search, bilingual FR/EN. Powered by a back-office managing products, stock, and orders in real time.",
          features: ["React", "Firebase", "E-Commerce", "Back-Office"]
        },
        {
          category: "Executive communication coaching",
          title: "Zentia",
          description: "High-end positioning website with structured audit assessment and direct contact flow.",
          features: ["Next.js", "Design", "Forms"]
        },
        {
          category: "Legal & Corporate Advisory",
          title: "AGEFIC",
          description: "Corporate showcase delivered. Public rollout pending partner validation.",
          features: ["Next.js", "Corporate"]
        },
        {
          category: "Elite Sports Arenas (UI Prototype)",
          title: "SportsArena",
          description: "Next-generation booking prototype for premium sports facilities. 3D mapping and instant scheduling engine.",
          features: ["3D Field Mapping", "Booking", "Payments"]
        },
        {
          category: "VIP Table Tracking & Nightlife (UI Prototype)",
          title: "Nightly",
          description: "Prestige hospitality analytics. Real-time VIP table management and reservation tracking.",
          features: ["VIP Tables", "Real-Time", "Dashboard"]
        },
        {
          category: "Luxury Car Rental (UI Prototype)",
          title: "Hilton VIP Rentals",
          description: "Exclusive luxury fleet rental concept with private chauffeur bookings.",
          features: ["Booking", "Chauffeur", "Fleet"]
        }
      ]
    },
    pricing: {
      title: "Clear & Transparent Pricing",
      subtitle: "A stress-free investment tailored for growth.",
      tiers: [
        {
          name: "The Essential",
          description: "Perfect for new launches",
          price: "One-time Payment",
          features: [
            "Modern & Responsive Design",
            "Technical SEO Optimization",
            "Contact Form + WhatsApp",
            "2 revision rounds included",
            "100% source code ownership"
          ],
          button: "Get Started"
        },
        {
          name: "Premium (WaaS)",
          description: "The choice of growing businesses",
          price: "12-Month Monthly Subscription",
          features: [
            "Custom website build included",
            "High-speed hosting & SSL",
            "Daily automated backups",
            "2h dedicated content updates / mo",
            "Guaranteed WhatsApp support (24h)"
          ],
          popular: true,
          button: "Choose WaaS"
        },
        {
          name: "Custom Build",
          description: "E-Commerce & Custom Business Systems",
          price: "Scope defined after audit",
          features: [
            "Full store + back-office (stock, orders)",
            "Real-time inventory management",
            "Secure payments (CMI, Stripe)",
            "Custom business applications"
          ],
          button: "Request a Scoping Call"
        }
      ]
    },
    contact: {
      title1: "Got a",
      title2: "Project?",
      description: "Describe it in three lines on WhatsApp. I reply within 2 business hours and tell you honestly if I'm the right fit.",
      startProject: "Describe my project on WhatsApp",
      steps: [
        {
          title: "15-Min Diagnostic Audit",
          description: "We review your operational workflow to identify where your business is losing time or paying unnecessary fees. Zero commitment."
        },
        {
          title: "Scoping & Fixed Proposal",
          description: "We propose a clear scope, timeline, and fixed quote with zero hidden fees."
        },
        {
          title: "UI Architecture & Strategy",
          description: "We structure the user journey and engineering specs tailored to your field operations."
        },
        {
          title: "Development & Testing",
          description: "Engineered with clean, fast, and secure code, thoroughly verified on mobile devices."
        },
        {
          title: "Deployment & Onboarding",
          description: "Live launch, staff handover, and immediate usability of your back-office."
        },
        {
          title: "Ongoing Care & Scale (WaaS)",
          description: "We handle cloud hosting, security monitoring, and regular updates so your systems remain flawless."
        }
      ]
    },
    footer: {
      rights: "webZ. All rights reserved."
    },
    banner: {
      construction: "SportsArena & Nightly: Interactive prototypes in active development 🔨",
      underConstruction: "UI Prototype 🔨"
    }
  },
  ar: {
    nav: {
      about: "من نحن",
      services: "خدماتنا",
      pricing: "الأسعار",
      work: "المشاريع",
      contact: "اتصل بنا",
      faq: "الأسئلة الشائعة",
      letsTalk: "لنتحدث",
    },
    hero: {
      available: "مواقع ومتاجر ولوحات تحكم مخصصة",
      title1: "الموقع الذي يراه عملاؤك.",
      title2: "لوحة التحكم التي تديره خلف الكواليس.",
      description: "مواقع تعريفية، متاجر إلكترونية، وأنظمة إدارة مخصصة للشركات المغربية. التصميم، البرمجة والإطلاق في بيئة الإنتاج — عبر مهندس واحد، من الفكرة إلى الكود الحي.",
      viewWork: "عرض المشاريع",
      whatIDo: "ماذا أقدم",
      auditCta: "تدقيق مجاني — 15 دقيقة",
      bookCall: "احجز استشارة",
      responseGuarantee: "رد خلال ساعتين من أوقات العمل · عرض سعر ثابت · 50% عند البدء والباقي عند التسليم",
    },
    about: {
      title: "لماذا webZ؟",
      subtitle: "شريك تقني مباشر، من التصميم إلى الكود في بيئة الإنتاج.",
      cards: [
        {
          title: "دون وسطاء أو تعقيد",
          description: "تتواصل مباشرة مع المطور المسؤول. لا مدراء مشاريع مبتدئين، لا تكاليف مضخمة، ولا تفويض لأطراف خارجية."
        },
        {
          title: "لوحة التحكم مع كل موقع",
          description: "الواجهة بدون إدارة لا تفيد مشروعك. نسلم مع كل متجر أو نظام لوحة تحكم مخصصة لإدارة المنتجات والمخزون."
        },
        {
          title: "تكنولوجيا حديثة ودعم مستمر",
          description: "بنية حديثة (React, Next.js, Firebase)، استضافة سحابية فائقة السرعة، ودعم مباشر عبر واتساب لتطوير نظامك."
        }
      ]
    },
    services: {
      title: "ما أقوم ببنائه.",
      description: "ستة حلول أسلمها بالكامل. دون تفويض خارجي ودون وسطاء.",
      footerNote: "« يتم تسليم كل مشروع مع لوحة التحكم الإدارية الخاصة به. لن تحتاج للبحث عن مطور آخر لإدارة منتجاتك ومخزونك. »",
      items: [
        {
          title: "1. مواقع تعريفية ومؤسسية",
          description: "للشركات التي تبحث عن حضور موثوق وقوي. تصميم متقن، متجاوب، متوافق مع محركات البحث (SEO محلي في المغرب)، واستمارة متصلة مباشرة بواتساب أو البريد. التسليم في 7 إلى 10 أيام."
        },
        {
          title: "2. متاجر إلكترونية",
          description: "متاجر إلكترونية كاملة: كتالوج، سلة، حسابات عملاء، بوابة دفع مغربية (CMI) أو الدفع عند الاستلام، ثنائية اللغة (عربي/فرنسي أو فرنسي/إنجليزي). والأهم: لوحة تحكم كاملة لإدارة الطلبات والمخزون دون الحاجة لأي كود."
        },
        {
          title: "3. لوحات تحكم وإدارة (Dashboards)",
          description: "هل بيانات نشاطك مشتتة بين ملفات إكسل ورسائل واتساب؟ أقوم ببناء لوحة تحكم آمنة تجمع عملاءك، طلباتك، مخزونك وجداول عملك في مكان واحد على الهاتف والكمبيوتر."
        },
        {
          title: "4. أنظمة الحجز والمواعيد",
          description: "للمطاعم، نوادي الفروسية، العيادات والمراكز الصحية. مسار مباشر يفتح واتساب أو نظام حجز مؤتمت مع تأكيد فوري ومواعيد في الوقت الحقيقي وإدارة الجداول."
        },
        {
          title: "5. تطبيقات وأنظمة أعمال مخصصة",
          description: "أدوات ميدانية، طلبات المطاعم للنوادل (تعمل دون الحاجة إلى اتصال دائم بالإنترنت)، إدارة المهام، وبوابات العملاء. مصممة لواقع العمل الميداني في المغرب."
        },
        {
          title: "6. الربط البرمجي (Integrations)",
          description: "ربط أدوات عملك ببعضها: واجهة واتساب للأعمال (WhatsApp Business API)، فايربيس، بوابات الرسائل القصيرة، جداول جوجل، الويبهوك، وبوابات الدفع المحلية."
        }
      ]
    },
    work: {
      title: "مشاريع مختارة.",
      description: "أربعة نماذج لمشاريع حديثة، من المواقع التعريفية إلى لوحات التحكم في الوقت الفعلي.",
      viewCaseStudy: "عرض دراسة الحالة",
      projects: [
        {
          category: "منتجع بيئي وحديقة حيوانات، بنسليمان",
          title: "Natura Jungle",
          description: "واجهة غامرة ومسار حجز مباشر عبر واتساب. في الإنتاج منذ 6 أشهر، دون دفع أي عمولة للمنصات الوسيطة.",
          features: ["Next.js", "حجز مباشر", "WhatsApp"]
        },
        {
          category: "عطور فاخرة وعناية نباتية، المغرب",
          title: "Madibee",
          description: "متجر إلكتروني شامل: كتالوج، سلة، حسابات، بحث، ثنائي اللغة FR/EN، مع لوحة تحكم تدير المنتجات والمخزون والطلبات فورياً.",
          features: ["React", "Firebase", "تجارة إلكترونية", "لوحة تحكم"]
        },
        {
          category: "التدريب والاستشارات التنفيذية",
          title: "Zentia",
          description: "موقع تموضع نخبوي مع مسار تدقيق تشخيصي وتواصل مباشر مع الإدارة.",
          features: ["Next.js", "تصميم", "استمارات"]
        },
        {
          category: "استشارات قانونية وضريبية",
          title: "AGEFIC",
          description: "بوابة مؤسسية مسلمة بالكامل. النشر العام بانتظار اعتماد الشركاء.",
          features: ["Next.js", "مؤسسي"]
        },
        {
          category: "المنشآت الرياضية النخبوية (نموذج أولي)",
          title: "SportsArena",
          description: "نموذج أولي لنظام حجز وجدولة متطور للمجمعات الرياضية. تخطيط تفاعلي ومحرك حجوزات فوري.",
          features: ["خرائط تفاعلية", "حجز فوري", "دفع آمن"]
        },
        {
          category: "تحليلات مخصصة وقطاع السهر (نموذج أولي)",
          title: "Nightly",
          description: "منصة تحليلات لأرقى وجهات السهر والضيافة. تتبع طاولات كبار الشخصيات وإدارة الحجوزات.",
          features: ["طاولات VIP", "بيانات فورية", "لوحة تحكم"]
        },
        {
          category: "تأجير السيارات الفاخرة (نموذج أولي)",
          title: "Hilton VIP Rentals",
          description: "منصة تجريبية لتأجير السيارات الفاخرة وخدمات السائق الخاص.",
          features: ["حجز أونلاين", "سائق خاص", "أسطول مميز"]
        }
      ]
    },
    contact: {
      title1: "هل لديك",
      title2: "مشروع؟",
      description: "صف مشروعك في 3 أسطر على واتساب. أجيبك خلال ساعتين من أوقات العمل، وسأخبرك بصراحة إذا كنت الشخص المناسب لمشروعك.",
      startProject: "صف مشروعك عبر واتساب",
      steps: [
        { title: "تدقيق تشغيلي (15 دقيقة)", description: "نحلل سير عملك الحالي ونحدد مواضع هدر الوقت أو العمولات، دون أي التزام." },
        { title: "خطة وتحديد النطاق", description: "نقدم عرضاً واضحاً يحدد النطاق الزمني والتكلفة الثابتة بشفافية تامة دون أي تكاليف خفية." },
        { title: "الهندسة وتجربة المستخدم", description: "نصمم واجهة الاستخدام والبنية التقنية بما يتوافق مع طبيعة العمل على أرض الواقع." },
        { title: "التطوير والاختبار الميداني", description: "بناء الأنظمة بأحدث المعايير البرمجية، واختبارها على مختلف الأجهزة وشبكات الهاتف." },
        { title: "الإطلاق وتسليم لوحة التحكم", description: "إطلاق فوري وتسليم للفرق المعنية مع بدء استخدام لوحة التحكم مباشرة دون أي تعقيد." },
        { title: "المتابعة والتطوير (WaaS)", description: "ندير الاستضافة والأمان والتحديثات الدورية لضمان استمرار عمل نظامك بكفاءة دائمة." }
      ]
    },
    footer: {
      rights: "webZ. جميع الحقوق محفوظة."
    },
    banner: {
      construction: "SportsArena & Nightly: نماذج أولية تفاعلية قيد الإنجاز 🔨",
      underConstruction: "نموذج أولي 🔨"
    }
  }
};
