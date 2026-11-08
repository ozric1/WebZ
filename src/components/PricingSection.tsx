import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Zap, 
  Clock, 
  RefreshCw, 
  CheckCircle2,
  MessageCircle,
  FileText
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface PricingSectionProps {
  onBookCall: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookCall }) => {
  const { language } = useLanguage();
  const [currency, setCurrency] = useState<'MAD' | 'EUR' | 'USD'>('MAD');

  const isFr = language === 'fr';
  const isAr = language === 'ar';

  const getWhatsAppPlanLink = (planName: string) => {
    const text = isFr 
      ? `Bonjour Nezar ! Je souhaite échanger au sujet de l'offre : ${planName}. Mon projet : `
      : isAr 
      ? `مرحباً نزار! أود الاستفسار حول باقة: ${planName}. مشروعي: `
      : `Hi Nezar! I'd like to discuss the ${planName} package for my project: `;
    return `https://wa.me/212634175357?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-32 relative z-10 bg-transparent scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-4"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
              {isFr ? 'Investissement Transparent' : isAr ? 'استثمار واضح وشفاف' : 'Transparent Pricing'}
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
              <>Trois Modes d'Accompagnement, <span className="text-emerald-400">Zéro Surprise</span></>
            ) : isAr ? (
              <>ثلاث طرق للتعاون، <span className="text-emerald-400">بشفافية تامة</span></>
            ) : (
              <>Three Working Modes, <span className="text-emerald-400">Zero Ambiguity</span></>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto"
          >
            {isFr
              ? "Le choix ne porte pas sur un nombre de lignes de code, mais sur le niveau d'autonomie et de gestion que vous souhaitez."
              : isAr
              ? "الخيار لا يعتمد فقط على عدد الصفحات، بل على مستوى الدعم والإدارة الذي يناسب نشاطك."
              : "Choose the mode that matches your involvement: full autonomy, hands-off care, or bespoke scale."}
          </motion.p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold">
            <button
              onClick={() => setCurrency('MAD')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                currency === 'MAD' ? 'bg-emerald-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              MAD (DH)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                currency === 'EUR' ? 'bg-emerald-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EUR (€)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                currency === 'USD' ? 'bg-emerald-500 text-black shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-16">
          
          {/* Card 1: L'Essentiel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.2rem] p-8 flex flex-col justify-between bg-[#080d16] border border-white/10 hover:border-white/20 transition-all shadow-xl"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10 mb-4">
                {isFr ? 'Paiement Unique' : isAr ? 'دفع لمرة واحدة' : 'One-Time Project'}
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {isFr ? "L'Essentiel" : isAr ? 'الأساسي (Starter & Business)' : 'The Essential'}
              </h3>
              
              <p className="text-zinc-400 text-xs italic mb-6">
                {isFr
                  ? "« Je veux un site rapide et moderne, et je gère la suite en autonomie. »"
                  : isAr
                  ? "« أريد موقعاً ممتازاً وأدير المحتوى بنفسي لاحقاً. »"
                  : "“I want a clean, fast website. I’ll handle things afterwards.”"}
              </p>

              {/* Price block */}
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-zinc-400 mb-1">
                  {isFr ? 'Starter (3 pages)' : 'Starter (3 pages)'}
                </div>
                <div className="text-2xl font-black text-white font-mono">
                  {currency === 'MAD' ? '4 500 MAD' : currency === 'EUR' ? '450 €' : '$500'}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {isFr ? 'Délai : 7 à 10 jours' : 'Timeline: 7–10 days'}
                </div>

                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="text-xs text-zinc-400 mb-1">
                    {isFr ? 'Business (5 pages)' : 'Business (5 pages)'}
                  </div>
                  <div className="text-xl font-bold text-emerald-400 font-mono">
                    {currency === 'MAD' ? '6 500 MAD' : currency === 'EUR' ? '650 €' : '$700'}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {isFr ? 'Délai : 10 à 14 jours • +30j support' : 'Timeline: 10–14 days • 30-day support'}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  isFr ? "Design sur mesure 100% responsive (mobile & desktop)" : "100% custom responsive layout",
                  isFr ? "Optimisation SEO technique & vitesse < 1.2s" : "Technical SEO & blazingly fast load speeds",
                  isFr ? "Formulaire de contact + bouton d'appel WhatsApp" : "Contact forms + direct WhatsApp callout",
                  isFr ? "2 rounds de révisions complètes inclus" : "2 comprehensive revision rounds included",
                  isFr ? "Propriété intégrale du code et du design à la livraison" : "100% code & design ownership handed over"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={getWhatsAppPlanLink("L'Essentiel")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl text-center font-bold text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center justify-center gap-2 group"
            >
              <span>{isFr ? "Choisir L'Essentiel" : isAr ? 'اختيار باقة الأساسي' : 'Select Essential'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card 2: Le Premium (WaaS) - RECOMMENDED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2.2rem] p-8 flex flex-col justify-between bg-[#0b1320] border-2 border-emerald-500 md:-mt-4 md:mb-4 relative shadow-[0_0_50px_rgba(16,185,129,0.15)] z-10"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-extrabold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
              {isFr ? 'Recommandé • Sérénité Totale' : isAr ? 'الأكثر طلباً • راحة بال تامة' : 'Recommended • Hands-Off'}
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4 mt-2">
                {isFr ? 'Site Géré (WaaS)' : isAr ? 'موقع مدار بالكامل' : 'Managed Site Care'}
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {isFr ? "Le Premium — Site Géré" : isAr ? 'الاحترافي — الموقع المدار' : 'The Premium — Managed Care'}
              </h3>
              
              <p className="text-emerald-300/80 text-xs italic mb-6">
                {isFr
                  ? "« Je veux un site d'exception et je ne veux rien gérer techniquement. »"
                  : isAr
                  ? "« أريد موقعاً استثنائياً دون أي انشغال بالصيانة أو التحديثات. »"
                  : "“I want a top-tier site and zero technical headaches.”"}
              </p>

              {/* Price block */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-white font-mono">
                    {currency === 'MAD' ? '690 MAD' : currency === 'EUR' ? '69 €' : '$79'}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">/ mois</span>
                </div>
                <div className="text-xs text-emerald-300 font-semibold">
                  {currency === 'MAD' ? '+ 3 500 MAD mise en place initiale' : currency === 'EUR' ? '+ 350 € setup' : '+ $390 setup'}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  {isFr ? 'Abonnement mensuel de 12 mois' : isAr ? 'اشتراك شهري لمدة 12 شهراً' : '12-month monthly subscription'}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  isFr ? "Conception du site complet sur mesure incluse" : "Full custom website build included",
                  isFr ? "Hébergement ultra-rapide, CDN mondial & certificat SSL" : "High-performance cloud hosting & SSL",
                  isFr ? "Sauvegardes automatiques & veille de sécurité continue" : "Automated daily backups & security audits",
                  isFr ? "2h/mois de mises à jour de contenu ou visuels dédiées" : "2 hours/month of dedicated content/visual updates",
                  isFr ? "Support WhatsApp garanti sous 24h ouvrées" : "Guaranteed WhatsApp support within 24h",
                  isFr ? "Rapport mensuel de trafic & performances Google" : "Monthly traffic & performance report"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={getWhatsAppPlanLink("Le Premium (WaaS)")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl text-center font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>{isFr ? 'Choisir la Formule Gérée' : isAr ? 'اختيار باقة الموقع المدار' : 'Choose Managed Plan'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card 3: Sur Mesure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[2.2rem] p-8 flex flex-col justify-between bg-[#080d16] border border-white/10 hover:border-white/20 transition-all shadow-xl"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10 mb-4">
                {isFr ? 'Plateformes & Apps' : isAr ? 'تطبيقات ومتاجر متقدمة' : 'Custom Scale'}
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {isFr ? 'Sur Mesure' : isAr ? 'حلول مخصصة متقدمة' : 'Custom Build'}
              </h3>
              
              <p className="text-zinc-400 text-xs italic mb-6">
                {isFr
                  ? "« J'ai besoin d'un e-commerce, de réservations en ligne, d'un portail ou d'une app. »"
                  : isAr
                  ? "« أحتاج إلى متجر إلكتروني، نظام حجز متطور أو تطبيق ويب مخصص. »"
                  : "“I need e-commerce, custom booking, multilingual scale or an app.”"}
              </p>

              {/* Price block */}
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-zinc-400 mb-1">
                  {isFr ? 'Boutique E-Commerce' : 'E-Commerce Store'}
                </div>
                <div className="text-xl font-bold text-white font-mono">
                  {isFr ? 'À partir de ' : 'From '}
                  {currency === 'MAD' ? '12 000 MAD' : currency === 'EUR' ? '1 200 €' : '$1,300'}
                </div>

                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="text-xs text-zinc-400 mb-1">
                    {isFr ? 'Plateforme SaaS & App métier' : 'SaaS & Custom Apps'}
                  </div>
                  <div className="text-xl font-bold text-teal-400 font-mono">
                    {isFr ? 'À partir de ' : 'From '}
                    {currency === 'MAD' ? '15 000 MAD' : currency === 'EUR' ? '1 500 €' : '$1,600'}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {isFr ? 'Découpage par jalons validés' : 'Milestone-based delivery'}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  isFr ? "Architecture React / Next.js & bases de données cloud" : "Next.js & scalable cloud architecture",
                  isFr ? "Passerelle de paiement sécurisée (CMI, Stripe, PayPal)" : "Payment gateways (Stripe, CMI, PayPal)",
                  isFr ? "Systèmes de réservation, catalogues ou espaces membres" : "Booking engines, catalogs & member portals",
                  isFr ? "Support multilingue complet (FR, EN, AR) avec RTL" : "Full multilingual & RTL support (FR/EN/AR)",
                  isFr ? "Accompagnement stratégique & formation vidéo" : "Strategic advisory & custom handover training"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={onBookCall}
              className="w-full py-3.5 rounded-xl text-center font-bold text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{isFr ? 'Demander une Étude & Devis' : isAr ? 'طلب دراسة وعرض سعر' : 'Request Scoping Call'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>

        {/* Clear Terms & Guarantees Bar (The Trust Layer) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 md:p-8 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>{isFr ? 'Conditions Contractuelles & Sérénité Client' : 'Contract Terms & Guarantee'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-zinc-400">
            <div>
              <div className="font-bold text-white mb-1">{isFr ? 'Acompte de 50%' : '50% Deposit'}</div>
              <p>{isFr ? '50% au lancement des travaux, solde de 50% uniquement à la livraison finale après vos retours.' : '50% at project kickoff, 50% remaining balance upon final approval.'}</p>
            </div>
            <div>
              <div className="font-bold text-white mb-1">{isFr ? '2 Tours de Révisions' : '2 Revision Rounds'}</div>
              <p>{isFr ? 'Chaque maquette et fonctionnalité est ajustée selon vos remarques pour un résultat parfait.' : 'Every layout and flow is iterated with you until completely approved.'}</p>
            </div>
            <div>
              <div className="font-bold text-white mb-1">{isFr ? 'Propriété 100% Cédée' : '100% Ownership'}</div>
              <p>{isFr ? 'Le code source, les maquettes et le nom de domaine sont votre pleine et entière propriété.' : 'The source code, assets, and design belong entirely to you forever.'}</p>
            </div>
            <div>
              <div className="font-bold text-white mb-1">{isFr ? 'Périmètre Précis' : 'Clear Scope'}</div>
              <p>{isFr ? 'Aucun coût caché. Les abonnements tiers (hébergement payant spécifique, API payantes) restent à votre nom.' : 'No hidden fees. Third-party API licenses remain transparently in your name.'}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
