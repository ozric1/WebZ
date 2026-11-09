import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ExternalLink, 
  Quote, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  MessageCircle,
  ShoppingBag,
  RefreshCw,
  Layers,
  Database
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const CaseStudyAndTestimonial: React.FC = () => {
  const { language } = useLanguage();

  const isFr = language === 'fr';
  const isAr = language === 'ar';

  const whatsappAuditLink = `https://wa.me/212634175357?text=${encodeURIComponent(
    isFr
      ? "Bonjour Nezar, j'ai vu vos études de cas (Natura Jungle & Madibee). Je souhaite bénéficier de l'audit gratuit de 15 min pour mon business."
      : isAr
      ? "مرحباً نزار، اطلعت على دراسات الحالة لمشاريعكم. أود الاستفادة من التدقيق المجاني (15 دقيقة) لمشروعي."
      : "Hi Nezar, I saw your case studies (Natura Jungle & Madibee). I'd like the free 15-minute audit for my business."
  )}`;

  return (
    <section id="casestudy" className="py-20 md:py-28 relative z-10 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
              {isFr ? 'Études de Cas & Preuves Réelles' : isAr ? 'دراسات حالة وأدلة واقعية' : 'Case Studies & Real Evidence'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white"
          >
            {isFr ? (
              <>Ce que nous construisons <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">sur le terrain.</span></>
            ) : isAr ? (
              <>ما نبنيه فعلياً <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">على أرض الواقع.</span></>
            ) : (
              <>What we engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">in production.</span></>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            {isFr
              ? "Des résultats vérifiables, des systèmes qui tiennent, et le back-office qui les rend utilisables au quotidien."
              : isAr
              ? "نتائج حقيقية مثبتة، أنظمة تصمد أمام الاستخدام، ولوحات تحكم تجعل الإدارة اليومية فائقة السهولة."
              : "Verifiable results, dependable systems, and the back-office that keeps daily operations seamless."}
          </motion.p>
        </div>

        {/* =========================================================================
            CASE STUDY 1: NATURA JUNGLE
        ========================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#080d16] border border-white/10 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {isFr ? 'En Production' : isAr ? 'في الإنتاج' : 'In Production'}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  Benslimane, Maroc
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                {isFr
                  ? "Une vitrine immersive, et une réservation directe qui tourne depuis 6 mois."
                  : isAr
                  ? "واجهة غامرة ونظام حجز مباشر يعمل بكفاءة تامة منذ 6 أشهر."
                  : "An immersive showcase and direct booking active for 6 months."}
              </h3>

              <div className="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
                <p>
                  <strong className="text-white">{isFr ? "Le défi." : isAr ? "التحدي." : "The challenge."}</strong>{" "}
                  {isFr
                    ? "Un domaine de 12 hectares — bungalows, restaurant panoramique, club équestre, parc animalier — dépendait des plateformes de réservation. 20 à 25% de commission sur chaque nuit."
                    : isAr
                    ? "يمتد منتجع Natura Jungle على 12 هكتاراً (أكواخ فاخرة، مطعم بانورامي، نادٍ للفروسية وحديقة حيوانات). كان المنتجع يدفع عمولات تتراوح بين 20 إلى 25% لمنصات الحجز الوسيطة."
                    : "A 12-hectare estate (bungalows, scenic restaurant, equestrian club, wildlife park) depended on booking platforms, losing 20-25% commission on each stay."}
                </p>

                <p>
                  <strong className="text-white">{isFr ? "La solution." : isAr ? "الحل." : "The solution."}</strong>{" "}
                  {isFr
                    ? "Une vitrine immersive, et un parcours de réservation directe qui ouvre WhatsApp avec un message pré-rempli. Le propriétaire ne voulait pas d'un énième moteur de réservation : il voulait que ses clients réservent là où son équipe travaille déjà."
                    : isAr
                    ? "واجهة غامرة ومسار حجز مباشر يفتح واتساب برسالة مؤهلة مسبقاً. لم يرغب المالك في نظام معقد، بل في توجيه الحجوزات إلى القناة التي يستخدمها فريقه يومياً."
                    : "An immersive showcase and direct booking flow opening WhatsApp with pre-filled details. The owner wanted guests to book where his staff already works daily."}
                </p>

                {/* In Progress Box */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 leading-relaxed">
                  <span className="text-emerald-400 font-semibold block mb-1">
                    {isFr ? "En cours : Système de commande restaurant" : isAr ? "قيد التطوير : نظام طلبات المطعم" : "In Progress: Restaurant Ordering System"}
                  </span>
                  {isFr
                    ? "Phase de conception. Contrainte identifiée : le domaine est en zone rurale, la 4G est faible. L'architecture devra fonctionner hors ligne avant d'être déployée."
                    : isAr
                    ? "مرحلة التصميم جارية. ونظراً لأن المنتجع يقع في منطقة ريفية بشبكة 4G متفاوتة، يجري تطوير بنية تعمل على الشبكة المحلية ودون اتصال قبل النشر."
                    : "Design phase. Key constraint: rural cellular 4G fluctuates across the estate. The architecture is engineered to run offline before full deployment."}
                </div>
              </div>

              {/* Action Button & Testimonial quote */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://naturajungle.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
                >
                  <span>{isFr ? 'Voir naturajungle.ma' : isAr ? 'زيارة naturajungle.ma' : 'Visit naturajungle.ma'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <blockquote className="border-l-2 border-emerald-500/50 pl-4 py-1 text-sm text-zinc-300 italic">
                {isFr
                  ? "« Il a construit exactement ce qu'on utilisait déjà. »"
                  : isAr
                  ? "« لقد بنى لنا بالضبط ما كنا نستخدمه بالفعل في عملنا اليومي. »"
                  : "“He built exactly what we were already using.”"}{" "}
                <span className="not-italic text-xs text-zinc-500 block mt-1">
                  — {isFr ? "Direction, Natura Jungle (Benslimane)" : isAr ? "الإدارة، Natura Jungle (بنسليمان)" : "Management, Natura Jungle (Benslimane)"}
                </span>
              </blockquote>
            </div>

            {/* Right Results Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1 font-mono tracking-tight text-emerald-400">
                    6 Mois
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "Réservation directe en production continue" : isAr ? "حجز مباشر في الإنتاج المستمر" : "Direct booking live in production"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-teal-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1 font-mono tracking-tight text-teal-300">
                    0%
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "De commission vers les plateformes" : isAr ? "عمولة للمنصات الوسيطة" : "Commission to third-party OTAs"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">
                    {isFr ? "Aucune formation nécessaire" : isAr ? "لا حاجة لأي تدريب" : "Zero Training Needed"}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "L'équipe utilise l'outil qu'elle connaît déjà au quotidien (WhatsApp)." : isAr ? "الفريق يستخدم التطبيق الذي يعرفه يومياً." : "The team works in the app they already master daily."}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>


        {/* =========================================================================
            CASE STUDY 2: MADIBEE (NOUVELLE SECTION)
        ========================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#090d16] border border-purple-500/20 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {isFr ? 'En cours de lancement' : isAr ? 'قيد الإطلاق' : 'Pre-Launch'}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {isFr ? 'Parfums & Soins botaniques, Maroc' : isAr ? 'عطور وعناية نباتية، المغرب' : 'Fragrance & Botanicals, Morocco'}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                {isFr
                  ? "Un e-commerce, et le back-office qui le rend utilisable."
                  : isAr
                  ? "متجر إلكتروني متكامل، ولوحة تحكم تجعله قابلاً للإدارة الحقيقية."
                  : "An e-commerce flagship, and the back-office that makes it scalable."}
              </h3>

              <div className="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
                <p>
                  <strong className="text-white">{isFr ? "Le défi." : isAr ? "التحدي." : "The challenge."}</strong>{" "}
                  {isFr
                    ? "Une nouvelle marque de parfums et de soins qui vendait uniquement en messages privés sur Instagram. Chaque commande demandait huit allers-retours, et le stock était suivi à la main."
                    : isAr
                    ? "علامة تجارية صاعدة للعطور ومستحضرات العناية كانت تبيع حصرياً عبر رسائل إنستغرام الخاصة. كانت كل طلبية تتطلب عدة رسائل متكررة، مع تتبع يدوي للمخزون معرض للأخطاء."
                    : "A prestige fragrance and skincare brand selling solely through Instagram DMs. Every order required multiple back-and-forth messages, with inventory tracked manually."}
                </p>

                <p>
                  <strong className="text-white">{isFr ? "La solution." : isAr ? "الحل." : "The solution."}</strong>{" "}
                  {isFr
                    ? "Une boutique complète — catalogue, fiches produits, panier, comptes clients, recherche, bilingue FR/EN — et un back-office protégé par authentification."
                    : isAr
                    ? "متجر إلكتروني شامل — كتالوج منتجات، سلة مشتريات، حسابات عملاء، محرك بحث، ثنائي اللغة FR/EN — ولوحة تحكم محمية بنظام تسجيل دخول آمن."
                    : "A complete storefront — catalog, product sheets, cart, customer accounts, instant search, bilingual FR/EN — plus an authenticated management back-office."}
                </p>

                {/* Back-office details list */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-zinc-300">
                  <div className="text-purple-300 font-bold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-purple-400" />
                    <span>{isFr ? "Le back-office livré :" : isAr ? "لوحة التحكم المسلمة :" : "The Delivered Back-Office:"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{isFr ? "Ajout, modification et suppression de produits et de catégories" : "Add, edit, and delete products & categories"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{isFr ? "Suivi du stock, avec incrémentation et décrémentation automatiques" : "Inventory tracking with automatic increment & decrement"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>
                      <strong className="text-white">
                        {isFr ? "Le stock se met à jour à la commande et se réincrémente à l'annulation" : "Stock updates upon ordering and automatically restores upon cancellation"}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{isFr ? "Vue en temps réel sur les paniers et les commandes" : "Real-time visibility on live carts & incoming orders"}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">{isFr ? "Pourquoi ça compte :" : "Why it matters:"}</strong>{" "}
                  {isFr
                    ? "La plupart des boutiques livrées s'arrêtent à la vitrine : le client gère ensuite son stock sur Excel et se retrouve en survente au premier pic. Ici, le stock suit les commandes tout seul — pas de survente, pas de double saisie."
                    : "Most web agencies stop at the storefront: the client manages stock on Excel and oversells at the first traffic spike. Here, inventory syncs automatically: zero overselling, zero double entry."}
                </p>
              </div>

              {/* Action Button & Stack */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://madibee.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-400 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
                >
                  <span>{isFr ? 'Voir la boutique' : isAr ? 'زيارة المتجر' : 'View Storefront'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-xs text-zinc-400">
                  <strong className="text-zinc-200">Stack :</strong> React · Firebase · Authentification · Temps réel
                </span>
              </div>
            </div>

            {/* Right Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {isFr ? "Zéro survente garantie" : "Zero Overselling Guarantee"}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isFr
                    ? "Incrémentation et décrémentation synchronisées en temps réel entre le panier client et le stock disponible."
                    : "Real-time automated sync between active checkouts and warehouse quantities."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {isFr ? "Bilingue FR/EN & Multi-devises" : "Bilingual FR/EN & Multi-Currency"}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isFr
                    ? "Parcours d'achat haut de gamme prêt pour le marché marocain et l'export international."
                    : "Prestige customer journey engineered for Morocco and international luxury clientele."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-xs text-purple-200">
                <strong className="text-white block mb-1">{isFr ? "Statut du projet :" : "Project status:"}</strong>
                {isFr
                  ? "Développement terminé. Lancement en attente de la livraison finale des produits."
                  : "Development complete. Launch pending final product delivery."}
              </div>
            </div>

          </div>
        </motion.div>

        {/* Cold Outreach Bridge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-emerald-900/20 via-zinc-900/40 to-teal-950/20 border border-emerald-500/20 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white mb-1">
              {isFr
                ? "Vous avez un projet similaire ?"
                : isAr
                ? "هل تدير مشروعاً وتواجه تحديات مشابهة؟"
                : "Have a similar project in mind?"}
            </h4>
            <p className="text-xs md:text-sm text-zinc-400">
              {isFr
                ? "Je regarde votre fonctionnement et je vous dis franchement ce qui est faisable. Sans engagement."
                : isAr
                ? "أحلل نموذج عملك الحالي وأوضح لك أفضل السبل دون أي التزام."
                : "I review your operation and give you honest, actionable advice. Zero commitment."}
            </p>
          </div>

          <a
            href={whatsappAuditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center gap-2 group"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>{isFr ? 'Audit gratuit — 15 min' : isAr ? 'تدقيق مجاني — 15 دقيقة' : 'Free 15-Min Audit'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudyAndTestimonial;
