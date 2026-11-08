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
  UtensilsCrossed,
  Smartphone
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const CaseStudyAndTestimonial: React.FC = () => {
  const { language } = useLanguage();

  const isFr = language === 'fr';
  const isAr = language === 'ar';

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
              {isFr ? 'Preuve par les Résultats' : isAr ? 'أدلة ونتائج ملموسة' : 'Proven Business Impact'}
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
              ? "De la vitrine éco-luxe à l'application locale de commande en cuisine reliant serveurs et chefs."
              : isAr
              ? "من الواجهة الرقمية الفاخرة إلى تطبيق الطلبات المحلي الذي يربط النوادل بالمطبخ في الوقت الفعلي."
              : "From an immersive luxury storefront to a real-time local ordering system connecting staff to kitchen."}
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
                  {isFr ? 'Hospitalité & Tech de Restauration' : isAr ? 'ضيافة وتكنولوجيا مطاعم' : 'Hospitality & Restaurant Tech'}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  Marrakech / Bouskoura • Maroc
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                {isFr
                  ? "Réservation directe de bungalows sans commissions et commande ultra-rapide aux tables."
                  : isAr
                  ? "حجز مباشر للأكواخ بدون عمولات ونظام طلبات فائق السرعة للطاولات."
                  : "Direct bungalow bookings with zero OTA fees and lightning-fast table ordering."}
              </h3>

              <div className="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
                <p>
                  {isFr ? (
                    <>
                      <strong className="text-white">Le Défi :</strong> Natura Jungle dispose d'un vaste domaine (bungalows de luxe, restaurant panoramique, club équestre). Le resort perdait de lourdes marges en commissions auprès des plateformes de réservation hôtelières tierces, tandis que la prise de commande manuelle au restaurant entraînait de l'attente pour les clients dispersés aux tables et transats.
                    </>
                  ) : isAr ? (
                    <>
                      <strong className="text-white">التحدي :</strong> يمتد منتجع Natura Jungle على مساحة شاسعة تضم أكواخاً فندقية ومطعماً ونادياً للفروسية. كان المنتجع يدفع عمولات باهظة لمنصات الحجز الخارجية، بينما تسببت المسافات الكبيرة في تأخر خدمة الطلبات للضيوف.
                    </>
                  ) : (
                    <>
                      <strong className="text-white">The Challenge:</strong> Natura Jungle features luxury bungalows, fine dining, and equestrian facilities. The resort was losing substantial revenue to third-party OTA commissions, while distant table seating slowed manual restaurant service.
                    </>
                  )}
                </p>

                <p>
                  {isFr ? (
                    <>
                      <strong className="text-white">La Solution Globale webZ :</strong>
                      <br />
                      1. <strong>Système de réservation de bungalows intégré directement sur le site :</strong> un parcours fluide et intuitif qui permet aux clients de réserver leurs séjours en direct en quelques clics, garantissant <strong>zéro commission perdue</strong> au profit d'intermédiaires.
                      <br />
                      2. <strong>Application locale de commande en cuisine :</strong> les serveurs transmettent instantanément les commandes depuis leur smartphone vers les écrans du bar et de la cuisine, réduisant drastiquement les allers-retours et les temps d'attente.
                    </>
                  ) : isAr ? (
                    <>
                      <strong className="text-white">الحل المتكامل من webZ :</strong>
                      <br />
                      1. <strong>نظام حجز أكواخ متكامل ومباشر على الموقع:</strong> تجربة حجز سهلة وسلسة تتيح للضيوف حجز إقاماتهم مباشرة، مما وفر عمولات منصات الحجز الخارجية بالكامل.
                      <br />
                      2. <strong>تطبيق طلبات محلي فائق السرعة:</strong> يرسل النوادل الطلبات فوراً من الهاتف إلى شاشة المطبخ والبار، مما قضى على التأخير والجهد الضائع.
                    </>
                  ) : (
                    <>
                      <strong className="text-white">The webZ Integrated Solution:</strong>
                      <br />
                      1. <strong>Integrated direct bungalow booking system:</strong> an intuitive, effortless flow allowing guests to book directly on-site, ensuring <strong>zero commission fees</strong> lost to third-party travel platforms.
                      <br />
                      2. <strong>Real-time kitchen ordering web application:</strong> staff instantly transmit table orders from smartphones to kitchen displays, eliminating back-and-forth walks and lag.
                    </>
                  )}
                </p>
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

            {/* Right: Quantified Results Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-emerald-400">
                    -60%
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "Temps d'attente sur les commandes restaurant" : isAr ? "انخفاض وقت انتظار الطلبات" : "Order-to-kitchen latency"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-teal-300">
                    +45%
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "Réservations directes via l'interface web" : isAr ? "زيادة الحجوزات المباشرة" : "Direct web bookings without commissions"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-white">
                    0.8s
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "Vitesse de chargement mobile sur 4G" : isAr ? "سرعة التحميل على الهاتف" : "Fast load time on mobile networks"}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight text-white">
                    10 Jours
                  </div>
                  <div className="text-xs text-zinc-400 font-medium leading-snug">
                    {isFr ? "Du premier brief au déploiement opérationnel" : isAr ? "من الفكرة إلى النشر الفعلي" : "From scoping to live deployment"}
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
          className="rounded-[2rem] bg-gradient-to-r from-emerald-950/30 via-zinc-900/60 to-black/80 border border-emerald-500/20 p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          <Quote className="w-16 h-16 text-emerald-400/10 absolute -top-2 -left-2 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-1 text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400" />
                ))}
                <span className="text-xs text-zinc-400 font-semibold ml-2">5.0 • Avis Vérifié</span>
              </div>

              <blockquote className="text-lg md:text-xl text-zinc-100 font-medium italic leading-relaxed">
                {isFr ? (
                  "« webZ a complètement transformé l'expérience et l'activité de Natura Jungle. Le système de réservation directe des bungalows intégré à notre vitrine immersive permet à nos clients de réserver leurs séjours en quelques clics, nous évitant les lourdes commissions des plateformes tierces. De plus, l'application locale de commande en cuisine développée pour nos serveurs a fluidifié tout notre service restaurant. Un travail d'ingénierie et de design remarquable. »"
                ) : isAr ? (
                  "« أحدثت webZ تحولاً حقيقياً في نشاط وتجربة ضيوف Natura Jungle. نظام الحجز المباشر للأكواخ المدمج في موقعنا الغامر مكن ضيوفنا من حجز إقاماتهم بسهولة تامة ووفر علينا عمولات المنصات الوسيطة. كما أن تطبيق الطلبات المحلي الذي طوروه لنادلينا جعل الخدمة في المطبخ والمطعم تعمل بسلاسة فائقة. عمل هندسي وتصميمي يستحق كل التقدير. »"
                ) : (
                  "“webZ completely transformed Natura Jungle's operations and revenue. The direct bungalow booking engine built into our immersive storefront allows guests to book stays effortlessly, saving us thousands in third-party OTA commissions. Furthermore, the local kitchen-ordering app built for our waitstaff made restaurant service seamless. Truly outstanding engineering and design execution.”"
                )}
              </blockquote>

              <div className="pt-2">
                <div className="text-base font-bold text-white">
                  {isFr ? "Propriétaire & Direction Générale" : isAr ? "الإدارة العامة والمالك" : "Owner & Executive Management"}
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
                {isFr ? 'Maroc (Bouskoura)' : 'Morocco'}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudyAndTestimonial;
