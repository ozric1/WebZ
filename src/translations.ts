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
      available: "Systèmes Digitaux & Automatisation",
      title1: "Des systèmes,",
      title2: "pas juste des sites.",
      description: "webZ conçoit les outils digitaux qui font tourner votre entreprise : réservation directe sans commission, commandes rapides, stock synchronisé. Moins d'allers-retours, zéro ressaisie, plus de marge.",
      viewWork: "Voir nos réalisations",
      whatIDo: "Ce que nous faisons",
      auditCta: "Audit Gratuit — 15 min",
      bookCall: "Réserver un Appel",
      responseGuarantee: "⚡ Réponse garantie sous 2h ouvrées • Échange direct avec Nezar (Fondateur)",
    },
    about: {
      title: "Pourquoi webZ ?",
      subtitle: "L’Expertise Technique au Service de votre Croissance.",
      cards: [
        {
          title: "Moteurs de Croissance",
          description: "Nous ne nous contentons pas de coder des sites ; nous bâtissons des moteurs opérationnels qui rapportent et suppriment la friction."
        },
        {
          title: "Expertise Locale & Réalité Terrain",
          description: "Nous comprenons les habitudes réelles du marché marocain. De la réservation WhatsApp au paiement CMI, nous bâtissons ce qui fonctionne."
        },
        {
          title: "Tech Robuste & Proximité",
          description: "Une technologie moderne (React, Next.js, Node.js), un interlocuteur technique unique et un accompagnement transparent sans jargon."
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
            "Mises à jour dédiées 2h/mois",
            "Support WhatsApp garanti sous 24h",
            "Tableaux de bord personnalisés"
          ],
          popular: true,
          button: "Choisir WaaS"
        },
        {
          name: "Sur Mesure",
          description: "Pour les projets complexes",
          price: "Périmètre après audit",
          features: [
            "Applications Web, Réservations & SaaS",
            "E-Commerce complet & Paiement CMI/Stripe"
          ],
          button: "Demander une Étude"
        }
      ]
    },
    services: {
      title: "Notre Expertise.",
      description: "Des systèmes opérationnels pensés pour supprimer la friction, automatiser vos processus et maximiser vos marges.",
      items: [
        {
          title: "Systèmes Métier & Automatisation",
          description: "Réservations directes WhatsApp/web sans commission, flux de commande, synchronisation stocks/équipes et back-offices sur mesure. L'outil qui élimine la double saisie et booste vos marges."
        },
        {
          title: "Sites Vitrines & E-Commerce",
          description: "Conception de boutiques en ligne à fort taux de conversion, intégration de paiement sécurisé CMI/Stripe, et vitrines professionnelles autonomes pensées pour vendre."
        },
        {
          title: "Design & Expériences Interactives",
          description: "Direction artistique haut de gamme, ergonomie mobile sans compromis, micro-interactions soignées et intégrations WebGL/3D pour marquer durablement les esprits."
        },
        {
          title: "Infrastructure & Sérénité (WaaS)",
          description: "Hébergement cloud ultra-rapide, sauvegardes automatiques quotidiennes, optimisation SEO technique et support réactif garanti sous 24h ouvrées."
        }
      ]
    },
    work: {
      title: "Projets Sélectionnés.",
      description: "Un aperçu de nos projets récents, illustrant l'intégration entre ergonomie soignée et ingénierie opérationnelle.",
      viewCaseStudy: "Voir l'étude de cas",
      projects: [
        {
          category: "Éco-Resort & Club Équestre",
          title: "Natura Jungle",
          description: "Une odyssée digitale captivante pour un éco-resort de luxe. Vitrine immersive et réservation directe WhatsApp sans commission en production active depuis 6 mois.",
          features: ["Expérience Immersive", "Réservations Directes 0%", "Production 6 Mois"]
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
          category: "Haute Parfumerie & Cosmétique",
          title: "Madibee",
          description: "Une boutique e-commerce d'exception dédiée aux fragrances raffinées et aux soins botaniques de prestige. Une direction artistique élégante et un parcours d'achat luxueux — en cours de lancement.",
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
          features: ["Suivi Tables VIP", "Analytiques Temps Réel", "Tableau de Bord"]
        },
        {
          category: "Location VIP & Chauffeur Privé (Prototype UI)",
          title: "Hilton VIP Rentals",
          description: "Un concept exclusif de location de véhicules haut de gamme avec chauffeur privé. Parcours de réservation haut de gamme adapté aux exigences VIP.",
          features: ["Réservation en Ligne", "Chauffeur Privé", "Flotte Prestige"]
        }
      ]
    },
    contact: {
      title1: "Comment nous",
      title2: "collaborons.",
      description: "Un processus clair, cadré et sans surprise pour transformer votre opération.",
      startProject: "Demander un Audit Gratuit (15 min)",
      steps: [
        {
          title: "Audit Diagnostic (15 min)",
          description: "Nous échangeons directement pour identifier où votre entreprise perd du temps, de l'énergie ou des commissions. Sans engagement."
        },
        {
          title: "Proposition & Périmètre Cadré",
          description: "Nous définissons une solution pragmatique avec un calendrier clair et un devis transparent sans coût caché."
        },
        {
          title: "Conception & Architecture",
          description: "Nous concevons l'expérience utilisateur et l'architecture technique adaptées à vos contraintes de terrain."
        },
        {
          title: "Développement & Tests",
          description: "Développement avec du code moderne, performant et sécurisé, testé rigoureusement sur mobile et connexion 4G."
        },
        {
          title: "Déploiement & Lancement",
          description: "Mise en ligne, tests opérationnels avec vos équipes et prise en main immédiate sans courbe d'apprentissage lourde."
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
      construction: "Sportsfields & Nightly : Prototypes interactifs en cours de finalisation 🔨",
      underConstruction: "Prototype UI 🔨"
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
      available: "Digital Systems & Automation",
      title1: "Systems,",
      title2: "not just websites.",
      description: "webZ builds the digital systems that run your business: commission-free direct booking, fast ordering, synced inventory. Less back-and-forth, zero double data-entry, higher margins.",
      viewWork: "View Our Work",
      whatIDo: "What We Do",
      auditCta: "Free 15-Min Audit",
      bookCall: "Book a Call",
      responseGuarantee: "⚡ Guaranteed response under 2h • Direct chat with Nezar (Founder)",
    },
    about: {
      title: "Why webZ?",
      subtitle: "Technical Expertise Driving Real Business Margins.",
      cards: [
        {
          title: "Growth & Profit Engines",
          description: "We don't just code websites; we engineer systems that eliminate operational friction and increase bottom-line profit."
        },
        {
          title: "Real-World Ground Truth",
          description: "We design around real user habits. From instant WhatsApp flows to direct payment gateways, we build what actually gets used."
        },
        {
          title: "Modern Tech & Proximity",
          description: "Cutting-edge stack (React, Next.js, Node.js), a single direct technical partner, and zero agency fluff."
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
            "All-Inclusive: Fast Hosting & SEO",
            "2h/Month Dedicated Content Updates",
            "Guaranteed WhatsApp Support (24h)",
            "Custom Performance Reporting"
          ],
          popular: true,
          button: "Choose WaaS"
        },
        {
          name: "Custom Build",
          description: "For bespoke operational platforms",
          price: "Scope defined after audit",
          features: [
            "Web Applications, Custom Booking & SaaS",
            "Complete E-Commerce & Payment Gateways"
          ],
          button: "Request a Scoping Call"
        }
      ]
    },
    services: {
      title: "Our Expertise.",
      description: "Operational systems designed to eliminate friction, automate workflows, and boost your margins.",
      items: [
        {
          title: "Business Systems & Automation",
          description: "Commission-free WhatsApp/web direct bookings, ordering pipelines, kitchen/stock sync, and custom back-offices. Tools that eliminate double data-entry and maximize margins."
        },
        {
          title: "Storefronts & E-Commerce",
          description: "High-converting online stores, seamless CMI/Stripe payment gateway integration, and modern autonomous business websites designed to sell."
        },
        {
          title: "Interactive Design & 3D",
          description: "Premium art direction, responsive UX design, fluid micro-interactions, and WebGL/3D elements that make your brand truly unforgettable."
        },
        {
          title: "Managed Infrastructure (WaaS)",
          description: "Blazing fast cloud hosting, daily automated backups, technical SEO optimization, and dedicated support within 24 business hours."
        }
      ]
    },
    work: {
      title: "Selected Work.",
      description: "A showcase of our recent projects, highlighting interactive design and robust operational engineering.",
      viewCaseStudy: "View Case Study",
      projects: [
        {
          category: "Eco-Resort & Hospitality",
          title: "Natura Jungle",
          description: "A captivating digital experience for a luxury eco-resort and equestrian club. Featuring an immersive showcase and zero-commission direct WhatsApp booking active for 6 months.",
          features: ["Immersive Experience", "0% Direct Bookings", "6 Months Live"]
        },
        {
          category: "Corporate EdTech & Training",
          title: "Zentia World",
          description: "A bespoke learning platform tailored for corporate leaders and executives. Combining interactive modules, intelligent progress tracking, and executive dashboards.",
          features: ["Corporate EdTech", "Smart Progression", "Executive Dashboard"]
        },
        {
          category: "Corporate Finance & Legal Advisory",
          title: "AGEFIC",
          description: "A high-end institutional showcase designed for a premier legal and tax advisory firm. Combining minimalist design principles with high-performance navigation.",
          features: ["Minimalist Identity", "Strategic Counsel", "Full Data Security"]
        },
        {
          category: "Luxury Fragrance & Botanicals",
          title: "Madibee",
          description: "An ultra-premium e-commerce flagship celebrating bespoke fragrances and prestige botanical hair care. Seamless shopping flow and secure checkout — currently pre-launch.",
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
      title1: "How We",
      title2: "Collaborate.",
      description: "A structured, transparent roadmap to transform your digital operations without friction.",
      startProject: "Book a Free 15-Min Audit",
      steps: [
        {
          title: "15-Min Diagnostic Audit",
          description: "We review your operational workflow to identify where your business is losing time or paying unnecessary commissions. Zero commitment."
        },
        {
          title: "Scoping & Fixed Proposal",
          description: "We propose a clear scope, timeline, and upfront pricing with zero hidden costs or ambiguities."
        },
        {
          title: "UI Architecture & Strategy",
          description: "We structure the user journey and engineering specs tailored to your actual field operations."
        },
        {
          title: "Development & Testing",
          description: "Engineered with clean, fast, and secure code, thoroughly verified across mobile devices and variable networks."
        },
        {
          title: "Deployment & Onboarding",
          description: "Seamless launch, staff handover, and zero heavy training curve for your team."
        },
        {
          title: "Ongoing Care & Scale (WaaS)",
          description: "We handle cloud hosting, monitoring, and regular updates so your systems remain flawless."
        }
      ]
    },
    footer: {
      rights: "webZ. All rights reserved."
    },
    banner: {
      construction: "Sportsfields & Nightly: Interactive prototypes in active development 🔨",
      underConstruction: "UI Prototype 🔨"
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
      available: "أنظمة رقمية وأتمتة للأعمال",
      title1: "أنظمة أعمال،",
      title2: "وليست مجرد مواقع.",
      description: "تبني webZ الأنظمة الرقمية التي تدير أعمالك بكفاءة: حجز مباشر بدون عمولات وساطة، إدارة وتدفق الطلبات، ومزامنة المخزون. وقت أقل، دقة أعلى، وهوامش ربح أكبر.",
      viewWork: "شاهد أعمالنا",
      whatIDo: "ماذا نفعل",
      auditCta: "تدقيق مجاني — 15 دقيقة",
      bookCall: "احجز استشارة",
      responseGuarantee: "⚡ رد مضمون خلال ساعتين من أوقات العمل • تواصل مباشر مع نزار (المؤسس)",
    },
    about: {
      title: "لماذا webZ؟",
      subtitle: "الخبرة التقنية في خدمة نموك وهوامش أرباحك.",
      cards: [
        {
          title: "محركات نمو وأرباح",
          description: "نحن لا نكتفي ببرمجة المواقع فحسب؛ بل نبني محركات تشغيلية تقضي على هدر الوقت وتضاعف المبيعات."
        },
        {
          title: "فهم عميق للسوق المحلي",
          description: "نبني حلولاً تلائم العادات اليومية للعميل وفريق العمل، من الحجز المباشر عبر واتساب إلى بوابات الدفع الآمنة."
        },
        {
          title: "تكنولوجيا حديثة وقرب دائم",
          description: "أحدث التقنيات (React, Next.js, Node.js)، تواصل مباشر مع المطور، ودعم شفاف بدون تعقيدات تقنية."
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
            "ساعتان شهرياً من التحديثات المخصصة",
            "دعم واتساب مضمون خلال 24 ساعة",
            "تقارير دورية للأداء"
          ],
          popular: true,
          button: "اختر WaaS"
        },
        {
          name: "بناء مخصص",
          description: "للمشاريع والأنظمة المعقدة",
          price: "تسعير محدد بعد التدقيق",
          features: [
            "تطبيقات الويب وأنظمة الحجز و SaaS",
            "متاجر إلكترونية متكاملة وبوابات دفع"
          ],
          button: "طلب دراسة للمشروع"
        }
      ]
    },
    services: {
      title: "خبراتنا.",
      description: "أنظمة تشغيلية مصممة للقضاء على هدر الوقت وأتمتة العمليات ومضاعفة الأرباح.",
      items: [
        {
          title: "أنظمة الأعمال والأتمتة",
          description: "أنظمة حجز مباشر عبر واتساب والموقع بدون عمولات، تدفق الطلبات، ومزامنة المخزون وفرق العمل. أدوات تقضي على التكرار وتضاعف أرباحك."
        },
        {
          title: "المتاجر والمواقع المؤسسية",
          description: "متاجر إلكترونية عالية التحويل، بوابات دفع آمنة (CMI/Stripe)، ومواقع مؤسسية متقدمة مصممة لجلب العملاء والطلبات المباشرة."
        },
        {
          title: "تصميم تفاعلي وثلاثي الأبعاد",
          description: "تصميم واجهات وتجارب استخدام فائقة، تفاعلية ثلاثية الأبعاد سلسة، وتجارب بصرية ترسخ علامتك التجارية في الأذهان."
        },
        {
          title: "إدارة البنية التحتية والاستضافة (WaaS)",
          description: "استضافة سحابية فائقة السرعة، نسخ احتياطي يومي، تحسين محركات البحث، ودعم فني مخصص خلال 24 ساعة عمل."
        }
      ]
    },
    work: {
      title: "أعمال مختارة.",
      description: "عرض لمشاريعنا الأخيرة، يبرز التوازن بين الجمالية البصرية والهندسة التشغيلية القوية.",
      viewCaseStudy: "عرض دراسة الحالة",
      projects: [
        {
          category: "الضيافة والمنتجعات البيئية",
          title: "Natura Jungle",
          description: "تجربة رقمية آسرة لمنتجع بيئي فاخر ونادٍ للفروسية. واجهة غامرة ونظام حجز مباشر عبر واتساب بدون عمولات يعمل منذ 6 أشهر.",
          features: ["تجربة تفاعلية غامرة", "حجوزات مباشرة 0% عمولة", "في الإنتاج منذ 6 أشهر"]
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
          description: "منصة تجارة إلكترونية راقية متخصصة في العطور الفاخرة ومستحضرات العناية النباتية بالشعر. تجربة تسوق استثنائية ودفع آمن — قيد الإطلاق حالياً.",
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
      title2: "أنظمتك الرقمية.",
      description: "خطوات مدروسة لتحويل وتطوير عمليات مشروعك بدون أي تعقيد أو مفاجآت.",
      startProject: "طلب تدقيق مجاني (15 دقيقة)",
      steps: [
        { title: "تدقيق تشغيلي (15 دقيقة)", description: "نحلل سير عملك الحالي ونحدد مواضع هدر الوقت أو العمولات الزائدة، دون أي التزام." },
        { title: "خطة وتحديد النطاق", description: "نقدم عرضاً واضحاً يحدد النطاق الزمني والتكلفة بشفافية تامة دون أي تكاليف خفية." },
        { title: "الهندسة وتجربة المستخدم", description: "نصمم واجهة الاستخدام والبنية التقنية بما يتوافق مع طبيعة العمل على أرض الواقع." },
        { title: "التطوير والاختبار الميداني", description: "بناء الأنظمة بأحدث المعايير البرمجية، واختبارها على مختلف الأجهزة وشبكات الهاتف." },
        { title: "الإطلاق والتشغيل الفعلي", description: "إطلاق فوري وتسليم للفرق المعنية دون أي حاجة لفترة تدريب طويلة أو معقدة." },
        { title: "المتابعة والتطوير (WaaS)", description: "ندير الاستضافة والأمان والتحديثات الدورية لضمان استمرار عمل نظامك بكفاءة دائمة." }
      ]
    },
    footer: {
      rights: "webZ. جميع الحقوق محفوظة."
    },
    banner: {
      construction: "Sportsfields & Nightly: نماذج أولية تفاعلية قيد الإنجاز 🔨",
      underConstruction: "نموذج أولي 🔨"
    }
  }
};
