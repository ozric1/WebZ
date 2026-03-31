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
        fr: "Les projets commencent à 3 000 DH pour un site vitrine de 5 pages sur mesure en français. Quant à un site multilingue ou à des fonctionnalités spécifiques, les prix dépasseront généralement cette fourchette, se situant entre 5 000 et 15 000 DH +",
        en: "Projects start at 3,000 DH for a custom 5-page showcase site in French. For multilingual sites or specific features, prices will generally exceed this range, typically between 5,000 and 15,000 DH +",
        ar: "تبدأ المشاريع من 3000 درهم لموقع عرض مخصص مكون من 5 صفحات باللغة الفرنسية. بالنسبة للمواقع متعددة اللغات أو الميزات المحددة، ستتجاوز الأسعار عمومًا هذا النطاق، وتتراوح عادةً بين 5000 و 15000 درهم +",
      }
    },
    {
      question: {
        fr: "Quelles sont mes options de paiement ?",
        en: "What are my payment options?",
        ar: "ما هي خيارات الدفع المتاحة لي؟"
      },
      answer: {
        fr: (
          <div className="space-y-4">
            <p>Nous proposons deux voies simples :</p>
            <div>
              <p className="font-semibold text-white mb-1">Done-For-You (Abonnement) :</p>
              <p>Frais d'installation réduits + tarif mensuel fixe. Nous gérons l'hébergement, les domaines et toutes les futures mises à jour.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Propriété Totale (Paiement Unique) :</p>
              <p>50 % d'acompte, 50 % au lancement. Vous possédez entièrement le site et bénéficiez d'un tableau de bord personnalisé pour effectuer vos propres mises à jour.</p>
            </div>
          </div>
        ),
        en: (
          <div className="space-y-4">
            <p>We offer two simple paths:</p>
            <div>
              <p className="font-semibold text-white mb-1">Done-For-You (Subscription):</p>
              <p>Low setup fee + flat monthly rate. We handle hosting, domains, and all future updates.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Total Ownership (One-Time):</p>
              <p>50% upfront, 50% at launch. You own the site entirely and get a custom dashboard to make your own updates.</p>
            </div>
          </div>
        ),
        ar: (
          <div className="space-y-4">
            <p>نقدم مسارين بسيطين:</p>
            <div>
              <p className="font-semibold text-white mb-1">Done-For-You (اشتراك):</p>
              <p>رسوم إعداد منخفضة + سعر شهري ثابت. نتولى الاستضافة والنطاقات وجميع التحديثات المستقبلية.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">ملكية كاملة (مرة واحدة):</p>
              <p>50% مقدمًا، 50% عند الإطلاق. تمتلك الموقع بالكامل وتحصل على لوحة تحكم مخصصة لإجراء تحديثاتك الخاصة.</p>
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
    <div className="w-full max-w-3xl mx-auto mt-24 relative z-10">
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
