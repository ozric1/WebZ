import React from 'react';
import { motion } from 'motion/react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from './ui/coss-accordion';
import { useLanguage } from '../LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();

  const faqData = [
    {
      question: {
        fr: "Combien coûte un nouveau site web ?",
        en: "How much does a new website cost?",
        ar: "كم تكلفة موقع ويب جديد؟"
      },
      answer: {
        fr: "Les projets commencent à 4 500 DH pour un site vitrine de 3 pages. Un site de 5 pages commence à 6 500 DH. Un e-commerce commence à 15 000 DH, et les systèmes ou applications métier sur mesure commencent à 25 000 DH (périmètre défini après audit de 15 min).",
        en: "Projects start at 4,500 DH (~€450) for a 3-page showcase site. A 5-page site starts at 6,500 DH (~€650). E-commerce starts at 15,000 DH (~€1,500), and custom business systems start at 25,000 DH (~€2,500) scoped after a 15-min audit.",
        ar: "تبدأ المشاريع من 4500 درهم لموقع تعريفي من 3 صفحات. موقع مكون من 5 صفحات يبدأ من 6500 درهم. المتاجر الإلكترونية تبدأ من 15000 درهم، وأنظمة الأعمال المخصصة تبدأ من 25000 درهم تحدد بدقة بعد تدقيق 15 دقيقة."
      }
    },
    {
      question: {
        fr: "Quelles sont mes options de paiement & conditions ?",
        en: "What are my payment options & terms?",
        ar: "ما هي خيارات وشروط الدفع المتاحة؟"
      },
      answer: {
        fr: (
          <div className="space-y-4">
            <p>Trois modes d'engagement transparents selon vos besoins :</p>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">1. L'Essentiel (Paiement unique) :</p>
              <p>4 500 DH (3 pages) ou 6 500 DH (5 pages). Acompte de 50% au lancement, 50% à la livraison finale après 2 rounds de révisions. Propriété totale du code cédée.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">2. Le Premium — Site géré (WaaS) :</p>
              <p>3 500 DH de mise en place + 890 DH / mois (abonnement de 12 mois). Hébergement cloud, sauvegardes quotidiennes, 2h/mois de mises à jour de contenu et support WhatsApp sous 24h ouvrées.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">3. Sur Mesure (E-Commerce & Systèmes Métier) :</p>
              <p>Dès 15 000 DH pour un e-commerce complet, dès 25 000 DH pour des systèmes et applications métier sur mesure (périmètre défini après audit de 15 min). Règlement par jalons validés.</p>
            </div>
          </div>
        ),
        en: (
          <div className="space-y-4">
            <p>Three transparent working modes based on your needs:</p>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">1. The Essential (One-Time Project):</p>
              <p>4,500 DH (3 pages) or 6,500 DH (5 pages). 50% deposit at kickoff, 50% balance on final delivery after 2 revision rounds. 100% code ownership handed over.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">2. The Premium — Managed Site (WaaS):</p>
              <p>3,500 DH setup + 890 DH/month (12-month commitment). Includes high-speed hosting, daily backups, 2h/month updates, and WhatsApp support under 24h.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">3. Custom Build (E-Commerce & Business Systems):</p>
              <p>From 15,000 DH for luxury e-commerce, from 25,000 DH for bespoke business systems/apps (scope defined after 15-min audit). Structured milestone-based delivery.</p>
            </div>
          </div>
        ),
        ar: (
          <div className="space-y-4">
            <p>ثلاث باقات واضحة تلائم تطلعاتك:</p>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">1. الأساسي (دفع لمرة واحدة):</p>
              <p>4500 درهم (3 صفحات) أو 6500 درهم (5 صفحات). 50% عند البدء و 50% عند التسليم النهائي بعد جولتين من المراجعة مع تسليم الكود كاملاً.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">2. الاحترافي — الموقع المدار (WaaS):</p>
              <p>3500 درهم إعداد أولي + 890 درهم شهرياً (اشتراك لمدة 12 شهراً). يشمل الاستضافة السحابية والنسخ الاحتياطي وساعتين تحديثات شهرياً ودعم واتساب سريع.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-400 mb-1">3. بناء مخصص (متاجر وأنظمة أعمال):</p>
              <p>ابتداءً من 15000 درهم للمتاجر الإلكترونية، ومن 25000 درهم لأنظمة وتطبيقات الأعمال المخصصة (النطاق يحدد بدقة بعد تدقيق 15 دقيقة)، بدفعات مقسمة حسب مراحل الإنجاز المعتمدة.</p>
            </div>
          </div>
        )
      }
    },
    {
      question: {
        fr: "Dois-je savoir coder pour mettre à jour mon site ?",
        en: "Do I need to know how to code to update my website?",
        ar: "هل أحتاج إلى معرفة كيفية البرمجة لتحديث موقعي؟"
      },
      answer: {
        fr: "Pas du tout ! Avec le plan Done-For-You, nous gérons toutes les mises à jour. Avec la Propriété Totale, nous vous donnons un tableau de bord simple et convivial où vous pouvez changer des photos ou du texte aussi facilement qu'envoyer un e-mail.",
        en: "Not at all! With the Done-For-You plan, we handle all updates. With Total Ownership, we give you a simple, user-friendly dashboard where you can swap photos or text as easily as sending an email.",
        ar: "على الإطلاق! مع خطة Done-For-You، نتولى جميع التحديثات. مع الملكية الكاملة، نقدم لك لوحة تحكم بسيطة وسهلة الاستخدام حيث يمكنك تبديل الصور أو النصوص بسهولة مثل إرسال بريد إلكتروني."
      }
    },
    {
      question: {
        fr: "Combien de temps faut-il pour construire et lancer ?",
        en: "How long does it take to build and launch?",
        ar: "كم من الوقت يستغرق البناء والإطلاق؟"
      },
      answer: {
        fr: "Généralement de 1 à 3 semaines+. Le délai exact dépend de la complexité du projet et de la rapidité avec laquelle vous pouvez fournir vos éléments de marque (logos, photos...).",
        en: "Typically 1 to 3 weeks+. The exact timeline depends on the project's complexity and how quickly you can provide your branding assets (logos, photos....).",
        ar: "عادة من أسبوع إلى 3 أسابيع+. يعتمد الجدول الزمني الدقيق على تعقيد المشروع ومدى سرعة تقديم أصول علامتك التجارية (الشعارات، الصور...)."
      }
    },
    {
      question: {
        fr: "Et si je n'ai pas de photos ou de textes ?",
        en: "What if I don't have photos or text?",
        ar: "ماذا لو لم يكن لدي صور أو نصوص؟"
      },
      answer: {
        fr: "Aucun problème ! Si vous avez besoin d'aide pour rédiger des textes professionnels ou trouver des images de haute qualité, nous pouvons facilement ajouter la rédaction et la recherche visuelle à votre projet.",
        en: "No problem! If you need help writing professional text or finding high-quality images, we can easily add copywriting and visual sourcing to your project.",
        ar: "لا مشكلة! إذا كنت بحاجة إلى مساعدة في كتابة نصوص احترافية أو العثور على صور عالية الجودة، فيمكننا بسهولة إضافة كتابة المحتوى والمصادر المرئية إلى مشروعك."
      }
    },
    {
      question: {
        fr: "L'hébergement et les noms de domaine sont-ils inclus ?",
        en: "Are hosting and domain names included?",
        ar: "هل الاستضافة وأسماء النطاقات مشمولة؟"
      },
      answer: {
        fr: "C'est vous qui décidez. Si vous avez déjà un domaine, nous pouvons le lier gratuitement. Sinon, nous nous occupons de toute la partie technique, y compris la sécurisation de votre domaine personnalisé et la mise en place d'un hébergement rapide et sécurisé.",
        en: "It's up to you, if you already have a domain we can link it for free. If not, then we handle all the technical heavy lifting, including securing your custom domain and setting up fast, secure hosting.",
        ar: "الأمر متروك لك، إذا كان لديك نطاق بالفعل فيمكننا ربطه مجانًا. إذا لم يكن الأمر كذلك، فنحن نتولى جميع الأعباء التقنية، بما في ذلك تأمين نطاقك المخصص وإعداد استضافة سريعة وآمنة."
      }
    }
  ];

  const title = {
    fr: "Questions Fréquentes",
    en: "Frequently Asked Questions",
    ar: "الأسئلة المتداولة"
  };

  return (
    <div id="faq" className="w-full max-w-3xl mx-auto mt-24 relative z-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-white">
          {title[language as keyof typeof title]}
        </h2>
        
        <Accordion className="w-full space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/[0.02] border border-white/5 rounded-2xl px-6 hover:bg-white/[0.04] transition-colors">
              <AccordionTrigger className="text-base md:text-lg">
                {item.question[language as keyof typeof item.question]}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer[language as keyof typeof item.answer]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default FAQ;
