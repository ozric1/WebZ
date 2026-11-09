import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ExternalLink, 
  Quote, 
  Star,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const CaseStudyAndTestimonial: React.FC = () => {
  const { language } = useLanguage();

  const isFr = language === 'fr';
  const isAr = language === 'ar';

  const whatsappAuditLink = `https://wa.me/212634175357?text=${encodeURIComponent(
    isFr
      ? "Bonjour Nezar, j'ai vu l'étude de cas Natura Jungle. Je souhaite bénéficier de l'audit gratuit de 15 min pour mon établissement."
      : isAr
      ? "مرحباً نزار، اطلعت على دراسة حالة Natura Jungle. أود الحصول على التدقيق المجاني (15 دقيقة) لمشروعي."
      : "Hi Nezar, I saw the Natura Jungle case study. I'd like the free 15-minute audit for my business."
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
              {isFr ? 'Preuve par la Réalité Terrain' : isAr ? 'أدلة ونتائج من الواقع' : 'Proven Real-World Impact'}
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
              <>Étude de Cas : <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Natura Jungle</span></>
            ) : isAr ? (
              <>دراسة حالة : <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Natura Jungle</span></>
            ) : (
              <>Case Study: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Natura Jungle</span></>
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
              ? "Une vitrine immersive, et une réservation directe par WhatsApp qui tourne sans accroc depuis 6 mois."
              : isAr
              ? "واجهة غامرة ونظام حجز مباشر عبر واتساب يعمل بكفاءة تامة وتواصل مستمر منذ 6 أشهر."
              : "An immersive storefront and zero-commission direct WhatsApp bookings active for 6 months."}
          </motion.p>
        </div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#080d16] border border-white/10 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Project Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {isFr ? 'Éco-Resort & Hôtellerie' : isAr ? 'ضيافة ومنتجعات بيئية' : 'Eco-Resort & Hospitality'}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  Benslimane, Maroc
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                {isFr
                  ? "Réservation directe sans commission, construite autour des habitudes réelles de l'équipe."
                  : isAr
                  ? "حجز مباشر بدون عمولات وساطة، مبني وفق عادات العمل الفعلية للفريق."
                  : "Zero-commission direct bookings, built directly around the team's real workflow."}
              </h3>

              <div className="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
                <p>
                  {isFr ? (
                    <>
                      <strong className="text-white">Le Défi :</strong> Un domaine d'exception de 12 hectares (bungalows de charme, restaurant panoramique, club équestre, parc animalier). Le resort dépendait des plateformes de réservation hôtelières tierces, avec 20% à 25% de commissions prélevées sur chaque séjour.
                    </>
                  ) : isAr ? (
                    <>
                      <strong className="text-white">التحدي :</strong> يمتد منتجع Natura Jungle على 12 هكتاراً (أكواخ فاخرة، مطعم بانورامي، نادٍ للفروسية وحديقة حيوانات). كان المنتجع يدفع عمولات باهظة تصل إلى 25% لمنصات الحجز الوسيطة.
                    </>
                  ) : (
                    <>
                      <strong className="text-white">The Challenge:</strong> A 12-hectare estate (luxury bungalows, scenic dining, equestrian club, wildlife park). The resort paid 20% to 25% in heavy commissions to third-party travel booking platforms on every reservation.
                    </>
                  )}
                </p>

                <p>
                  {isFr ? (
                    <>
                      <strong className="text-white">La Solution webZ :</strong> Une vitrine immersive valorisant le cadre naturel, reliée à un parcours de réservation directe qui ouvre WhatsApp avec un message pré-rempli et qualifié. Le propriétaire ne voulait pas d'un énième moteur de réservation complexe : il voulait que ses clients réservent là où son équipe traite déjà les demandes au quotidien.
                    </>
                  ) : isAr ? (
                    <>
                      <strong className="text-white">حل webZ :</strong> واجهة تفاعلية غامرة تبرز جمال الطبيعة، مرتبطة بمسار حجز مباشر يفتح تطبيق واتساب برسالة مؤهلة مسبقاً. لم يرغب المالك في نظام معقد، بل في توجيه الحجوزات إلى القناة التي يستخدمها فريقه يومياً.
                    </>
                  ) : (
                    <>
                      <strong className="text-white">The webZ Solution:</strong> An immersive visual showcase connected to a frictionless direct booking path that launches WhatsApp with pre-filled details. The owner didn't need another rigid booking engine: he wanted guests to book where his staff was already operating daily.
                    </>
                  )}
                </p>

                {/* Transparency Note on In-Progress Restaurant Ordering System */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 leading-relaxed">
                  <span className="text-emerald-400 font-semibold block mb-1">
                    {isFr ? "Phase R&D en cours : Système de commande restaurant" : isAr ? "قيد التطوير : نظام طلبات المطعم" : "In Progress: Local Restaurant Ordering System"}
                  </span>
                  {isFr
                    ? "Phase de conception active. Contrainte identifiée sur le terrain : le resort étant en zone rurale, la couverture 4G peut être fluctuante. L'architecture est donc développée pour fonctionner en réseau local et hors-ligne avant son déploiement complet."
                    : isAr
                    ? "مرحلة التصميم جارية. ونظراً لأن المنتجع يقع في منطقة ريفية بشبكة 4G متفاوتة، يجري تطوير بنية تعمل على الشبكة المحلية دون انقطاع قبل التشغيل النهائي."
                    : "Currently in design phase. Key constraint: rural cellular 4G fluctuates across the estate. The architecture is engineered to run seamlessly over local network and offline before rollout."}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://naturajungle.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10 group"
                >
                  {isFr ? 'Visiter naturajungle.ma' : isAr ? 'زيارة الموقع الحي' : 'Visit naturajungle.ma'}
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-xs text-zinc-500">
                  {isFr ? 'Production en ligne active' : 'Live Client Production'}
                </span>
              </div>
            </div>

            {/* Right: Quantified Results Grid (Honest & High-Impact) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-emerald-400">
                    6 Mois
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "En production continue et réservations actives" : isAr ? "في الإنتاج الحي المستمر واستقبال الحجوزات" : "Continuous live production & bookings"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-teal-300">
                    0%
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "De commission versée aux plateformes tierces" : isAr ? "عمولة مدفوعة لمنصات الحجز الوسيطة" : "Commission paid to third-party OTAs"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-white">
                    1 Clic
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "Réservation directe WhatsApp qualifiée" : isAr ? "حجز مباشر وسريع عبر واتساب" : "Instant pre-filled WhatsApp booking"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-white">
                    0 Jours
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "De formation : l'équipe utilise son outil quotidien" : isAr ? "وقت تدريب : الفريق يستخدم أداته اليومية" : "Training required : uses existing habits"}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Client Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[2rem] bg-gradient-to-r from-emerald-950/30 via-zinc-900/60 to-black/80 border border-emerald-500/20 p-8 md:p-12 relative overflow-hidden shadow-2xl mb-12"
        >
          <Quote className="w-16 h-16 text-emerald-400/10 absolute -top-2 -left-2 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {isFr ? 'Partenariat Actif • En production depuis 6 mois' : isAr ? 'شراكة نشطة • في الإنتاج منذ 6 أشهر' : 'Active Partnership • 6 Months in Production'}
                </span>
              </div>

              <blockquote className="text-lg md:text-xl text-zinc-100 font-medium italic leading-relaxed">
                {isFr ? (
                  "« webZ a construit exactement ce qu'on utilisait déjà. La réservation directe sur WhatsApp tourne tous les jours sans aucune commission versée aux plateformes, et nos clients adorent la vitrine immersive. Un travail d'ingénierie et de design remarquable. »"
                ) : isAr ? (
                  "« قامت webZ ببناء ما نستخدمه بالفعل في عملنا اليومي. الحجز المباشر عبر واتساب يعمل يومياً دون أي عمولات للمنصات الوسيطة، مع واجهة استثنائية تجذب الزوار. عمل هندسي وتصميمي يستحق كل التقدير. »"
                ) : (
                  "“webZ built exactly what our team was already used to. Direct WhatsApp reservations run daily with zero commissions paid to booking platforms, and guests love the immersive showcase. Truly outstanding engineering and design execution.”"
                )}
              </blockquote>

              <div className="pt-2">
                <div className="text-base font-bold text-white">
                  {isFr ? "Direction" : isAr ? "الإدارة" : "Management"}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  Natura Jungle Eco-Resort & Club Équestre
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end gap-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                {isFr ? 'Client Partenaire' : isAr ? 'عميل شريك' : 'Partner Client'}
              </span>
              <span className="text-xs text-zinc-400">
                {isFr ? 'Benslimane, Maroc' : isAr ? 'بنسليمان، المغرب' : 'Benslimane, Morocco'}
              </span>
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
                ? "Vous avez un établissement ou un business avec des défis similaires ?"
                : isAr
                ? "هل تدير منشأة أو مشروعاً يواجه تحديات مماثلة في الحجز والمبيعات؟"
                : "Facing similar booking or operational challenges in your business?"}
            </h4>
            <p className="text-xs md:text-sm text-zinc-400">
              {isFr
                ? "Je regarde votre fonctionnement et je vous montre où vous perdez du temps ou des commissions. Sans engagement."
                : isAr
                ? "أحلل نموذج عملك الحالي وأوضح لك مواضع هدر الوقت أو العمولات، دون أي التزام."
                : "I will review your operation and identify where you lose time or margin. Zero commitment."}
            </p>
          </div>

          <a
            href={whatsappAuditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center gap-2 group"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>{isFr ? 'Demander un Audit Gratuit (15 min)' : isAr ? 'طلب تدقيق مجاني (15 دقيقة)' : 'Request Free 15-Min Audit'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudyAndTestimonial;
