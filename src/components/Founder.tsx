import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Github, 
  FileCheck, 
  Clock, 
  Code2, 
  Award,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Founder: React.FC = () => {
  const { language } = useLanguage();

  const isFr = language === 'fr';
  const isAr = language === 'ar';

  return (
    <section id="founder" className="py-20 md:py-28 relative z-10 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">
              {isFr ? 'Identité & Transparence' : isAr ? 'الهوية والشفافية الكاملة' : 'Founder & Credibility'}
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
              <>L'Humain derrière <span className="text-teal-400">webZ</span></>
            ) : isAr ? (
              <>الشخص الذي يقف وراء <span className="text-teal-400">webZ</span></>
            ) : (
              <>The Mind Behind <span className="text-teal-400">webZ</span></>
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
              ? "Un interlocuteur unique, senior et dédié. De la stratégie initiale au code déployé."
              : isAr
              ? "مهندس ومصمم مخصص لمشروعك مباشرة، من الفكرة إلى البرمجة والإطلاق النهائي."
              : "A dedicated senior engineer and designer. Direct communication, zero middlemen."}
          </motion.p>
        </div>

        {/* Founder Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#090e17] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Founder Photo & Status */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-[2.2rem] overflow-hidden border-2 border-white/20 bg-zinc-900 shadow-2xl">
                  <img
                    src="/nezar.jpg"
                    alt="Nezar Abdeljalil - Fondateur webZ"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Availability Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-3 flex items-center justify-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      {isFr ? 'Disponible pour nouveaux projets' : isAr ? 'متاح لمشاريع جديدة' : 'Available for new projects'}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">Nezar Abdeljalil</h3>
              <p className="text-teal-400 font-semibold text-sm mb-3">
                {isFr ? 'Fondateur & Creative Technologist' : isAr ? 'مؤسس وخبير تقني إبداعي' : 'Founder & Creative Technologist'}
              </p>
              
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6 bg-white/5 py-1.5 px-4 rounded-full border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isFr ? 'Basé à Mohammedia · Intervention à Casablanca et à distance' : isAr ? 'مستقر في المحمدية · تدخل في الدار البيضاء وعن بُعد' : 'Based in Mohammedia · Serving Casablanca & Remote Worldwide'}</span>
              </div>

              {/* Direct Channels */}
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/212634175357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="mailto:abdelnezar7@gmail.com"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nezar-abdeljalil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ozric1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Bio & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-zinc-300 text-base md:text-lg leading-relaxed">
                <p>
                  {isFr ? (
                    "« Je ne crois pas aux agences anonymes où votre projet est délégué à un sous-traitant inconnu. Chez webZ, vous échangez directement avec moi, du premier atelier stratégique jusqu'au déploiement du code en production. »"
                  ) : isAr ? (
                    "« لا أؤمن بالوكالات المجهولة التي تفوض مشروعك لمتدربين أو أطراف مجهولة. في webZ، تتواصل معي مباشرة من مرحلة التخطيط الاستراتيجي وحتى إطلاق الكود في بيئة الإنتاج. »"
                  ) : (
                    "“I don’t believe in bloated anonymous agencies where your vision gets passed down to junior contractors. At webZ, you partner directly with me—from high-level strategy to shipping clean production code.”"
                  )}
                </p>

                <p className="text-zinc-400 text-sm md:text-base">
                  {isFr ? (
                    "Mon engagement est clair : concevoir des vitrines et applications web ultra-rapides, visuellement mémorables, et taillées pour générer des résultats économiques concrets pour votre entreprise. Et je livre le back-office avec le site. Vous repartez avec un système que votre équipe peut utiliser le lendemain, pas avec une vitrine que personne ne peut mettre à jour."
                  ) : isAr ? (
                    "التزامي واضح: بناء مواقع وتطبيقات ويب فائقة السرعة ومميزة بصرياً، ومصممة خصيصاً لتحقيق عوائد وأرباح ملموسة لنشاطك التجاري. وأسلم لوحة التحكم الإدارية كاملة مع الموقع، لتبدأ فريقك العمل عليها من الغد دون عوائق."
                  ) : (
                    "My mission is simple: engineer blazingly fast, visually arresting digital systems built to generate measurable revenue. And I deliver the back-office along with the site: you walk away with a system your team can actually run the very next day, not a showcase no one can update."
                  )}
                </p>
              </div>

              {/* 3 Pillars of Trust */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5 hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {isFr ? 'Statut Légal & Facturation Professionnelle' : isAr ? 'الوضع القانوني والفوترة المعتمدة' : 'Official Legal Status & Invoicing'}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {isFr ? (
                        "Prestataire digital immatriculé au Maroc (Statut Auto-Entrepreneur). Basé à Mohammedia · Intervention à Casablanca et à distance. Facturation professionnelle avec ICE disponible sur simple demande."
                      ) : isAr ? (
                        "مقدم خدمات رقمية معتمد في المغرب (صفة المقاول الذاتي). مستقر في المحمدية · تدخل في الدار البيضاء وعن بُعد. فوترة احترافية تتضمن رقم التعريف الموحد (ICE)."
                      ) : (
                        "Registered digital service provider in Morocco. Based in Mohammedia · Serving Casablanca and remote worldwide. Professional invoices with ICE provided on demand."
                      )}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5 hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {isFr ? 'Garantie Zéro Risque & Propriété 100%' : isAr ? 'ضمان الأمان والملكية الكاملة 100%' : 'Zero-Risk Guarantee & Full Ownership'}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {isFr ? (
                        "Acompte de 50% au démarrage, solde à la livraison après validation de vos 2 rounds de révisions. Le code source et le design vous appartiennent à 100% de façon définitive."
                      ) : isAr ? (
                        "دفعة أولى 50% عند البدء، والمتبقي عند التسليم بعد جولتين من التعديلات. الكود المصدري والتصميم ملكك بالكامل بنسبة 100% فور السداد النهائي."
                      ) : (
                        "50% deposit, balance on final sign-off following 2 revision rounds. You hold 100% permanent ownership of the source code and design upon completion."
                      )}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5 hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {isFr ? 'Réactivité & Accompagnement Direct' : isAr ? 'استجابة سريعة ودعم مباشر' : 'Fast Direct Response'}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {isFr ? (
                        "Réponse garantie sous 2h ouvrées sur WhatsApp ou par email. Un point d'étape régulier avec lien de prévisualisation privé à chaque étape."
                      ) : isAr ? (
                        "رد مضمون في أقل من ساعتين خلال أوقات العمل عبر واتساب أو البريد. روابط معاينة خاصة ومتابعة دقيقة لكل مرحلة."
                      ) : (
                        "Guaranteed response within 2 business hours on WhatsApp or email. Regular progress updates with staging previews at every milestone."
                      )}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Founder;
