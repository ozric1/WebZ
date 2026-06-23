import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Rocket, 
  Box, 
  ArrowRight, 
  Mail, 
  MessageCircle,
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { GlobePulse } from './components/ui/cobe-globe-pulse';

import { LiquidMetalButton } from './components/ui/liquid-metal-button';
import { DottedSurface } from './components/ui/dotted-surface';
import { Banner } from './components/ui/banner';
import FAQ from './components/FAQ';
import BookingModal from './components/BookingModal';

// --- Assets Data ---
const serviceIcons = [
  <Palette className="w-6 h-6" />,
  <Code2 className="w-6 h-6" />,
  <Box className="w-6 h-6" />,
  <Rocket className="w-6 h-6" />
];

const projectAssets = [
  {
    id: 1,
    image: "/nightly.png",
    color: "from-purple-500 to-indigo-600",
    link: "https://nightllife.netlify.app/"
  },
  {
    id: 2,
    image: "/naatura.png",
    color: "from-yellow-600 to-amber-700",
    link: "https://naturajungle.ma/"
  },
  {
    id: 3,
    image: "/sportsfields.png",
    color: "from-orange-500 to-red-600",
    link: "https://soccer-eight-henna.vercel.app/fr"
  },
  {
    id: 4,
    image: "/zentiaa.png",
    color: "from-blue-500 to-cyan-600",
    link: "https://zentia.world/"
  },
  {
    id: 5,
    image: "/agefic.png",
    color: "from-slate-800 to-indigo-950",
    link: "https://agefic.vercel.app/"
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Globe className="w-7 h-7 text-emerald-400 stroke-[2.5]" />
              <div className="absolute inset-0 bg-emerald-400/20 blur-md rounded-full"></div>
            </div>
            web<span className="text-teal-400 transition-colors duration-300 group-hover:text-emerald-400">Z</span>
          </motion.a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <Globe className="w-4 h-4 text-zinc-400" />
              <button 
                onClick={() => setLanguage('fr')} 
                className={`text-xs font-medium transition-colors ${language === 'fr' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                FR
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`text-xs font-medium transition-colors ${language === 'en' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                EN
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => setLanguage('ar')} 
                className={`text-xs font-medium transition-colors ${language === 'ar' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                AR
              </button>
            </div>
            <a 
              href="#contact" 
              className="hidden sm:block px-6 py-2.5 bg-[#15803d] text-white text-sm font-bold rounded-full hover:bg-[#15803d]/90 transition-all duration-300 shadow-[0_0_20px_rgba(21,128,61,0.3)] hover:shadow-[0_0_25px_rgba(21,128,61,0.5)] border border-[#15803d]/50"
            >
              {t.nav.letsTalk}
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col">
          <div className="flex flex-col gap-6 text-2xl font-display font-medium mb-12">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.pricing}</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.faq}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
          
          <div className="flex flex-col gap-6 mt-auto mb-12">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-3 w-max">
              <Globe className="w-5 h-5 text-zinc-400" />
              <button 
                onClick={() => { setLanguage('fr'); setMobileMenuOpen(false); }} 
                className={`text-sm font-medium transition-colors ${language === 'fr' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                FR
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }} 
                className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                EN
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => { setLanguage('ar'); setMobileMenuOpen(false); }} 
                className={`text-sm font-medium transition-colors ${language === 'ar' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                AR
              </button>
            </div>
            
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 bg-[#15803d] text-white text-center font-bold rounded-full hover:bg-[#15803d]/90 transition-all duration-300 shadow-[0_0_25px_rgba(21,128,61,0.4)] border border-[#15803d]/50"
            >
              {t.nav.letsTalk}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const { t, dir } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Globe Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 md:opacity-50 pointer-events-auto mt-20">
        <div className="w-full max-w-[600px] md:max-w-[800px]">
          <GlobePulse />
        </div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm mb-8 pointer-events-auto shadow-[0_0_15px_rgba(20,184,166,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-xs font-bold text-teal-100 uppercase tracking-widest">
            Made in Morocco
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
        >
          {t.hero.title1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto mb-16"
        >
          <a 
            href="#work" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
          >
            {t.hero.viewWork}
            <ArrowRight className={`w-4 h-4 transition-transform ${dir === 'rtl' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            {t.hero.whatIDo}
          </a>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto overflow-hidden pointer-events-auto"
        >
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-40 hover:opacity-100 transition-opacity duration-500">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js', 'Node.js', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="text-sm font-medium tracking-widest uppercase text-zinc-500 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0f18] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#15803d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#15803d]/10 flex items-center justify-center text-[#15803d] shadow-[0_0_15px_rgba(21,128,61,0.2)]">
                  {index === 0 && <Rocket className="w-6 h-6" />}
                  {index === 1 && <Globe className="w-6 h-6" />}
                  {index === 2 && <Code2 className="w-6 h-6" />}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#0a0f18] border border-white/10 hover:border-teal-500/30 transition-colors group shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:text-teal-400 transition-all duration-300">
                {serviceIcons[index]}
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-[15px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Badge } from './components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { ExpandableGallery } from './components/ui/expandable-gallery';

const Work = () => {
  const { t, language } = useLanguage();

  const projects = t.work.projects.map((p, i) => ({
    ...p,
    image: projectAssets[i].image,
    link: projectAssets[i].link
  }));

  const exploreMoreText = language === 'fr' ? 'Explorer plus de projets' : language === 'ar' ? 'استكشف المزيد من المشاريع' : 'Explore more projects';
  const goBackText = language === 'fr' ? 'Retour' : language === 'ar' ? 'العودة' : 'Go back';

  return (
    <section id="work" className="py-20 md:py-24 relative z-10 bg-transparent">
      <ExpandableGallery 
        projects={projects}
        title={t.work.title}
        description={t.work.description}
        exploreMoreText={exploreMoreText}
        goBackText={goBackText}
      />
    </section>
  );
};

import { Check } from 'lucide-react';

const Pricing = () => {
  const { t, language } = useLanguage();

  const getWhatsAppLink = (planName: string, lang: string) => {
    const phone = '212634175357';
    let message = '';
    if (lang === 'fr') message = `Bonjour! Je suis intéressé(e) par le plan: ${planName}.`;
    else if (lang === 'ar') message = `مرحباً! أنا مهتم بخطة: ${planName}.`;
    else message = `Hello! I am interested in the ${planName} plan.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-32 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
            {t.pricing.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.pricing.tiers.map((tier: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[2rem] p-8 flex flex-col relative ${
                tier.popular 
                  ? 'bg-[#0a0f18] border-2 border-[#15803d] md:-mt-8 md:mb-8 scale-100 md:scale-105 z-10 shadow-[0_0_40px_rgba(21,128,61,0.15)]' 
                  : 'bg-black/40 border border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#15803d] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                  Recommandé
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-zinc-400 text-sm h-10">{tier.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-[1.3rem] font-bold text-white">{tier.price}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${tier.popular ? 'text-[#15803d]' : 'text-zinc-500'}`} />
                    <span className="text-zinc-300 text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppLink(tier.name, language)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-300 ${
                  tier.popular
                    ? 'bg-[#15803d] text-white hover:bg-[#15803d]/90 shadow-[0_0_20px_rgba(21,128,61,0.3)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tier.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t, dir } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-24 relative z-10 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[3rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-16 relative z-10">
            {t.contact.title1} <br className="hidden md:block" />
            <span className="text-zinc-500">{t.contact.title2}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16 relative z-10 w-full">
            {t.contact.steps?.map((step: any, index: number) => (
              <div key={index} className="bg-black/40 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-blue-500 font-mono text-sm mb-3">0{index + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-zinc-300 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto relative z-10">
            {t.contact.description}
          </p>
          
          <div className="relative z-10 mt-4">
            <LiquidMetalButton 
              label={t.contact.startProject} 
              onClick={() => setIsBookingOpen(true)}
              width={320}
            />
          </div>

          <FAQ />
        </motion.div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-white/10 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {t.footer.rights}
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { dir, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#05070A] text-white selection:bg-teal-500/30 relative overflow-hidden" dir={dir}>
      <DottedSurface className="opacity-40" />
      
      {/* Global Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full opacity-30 blur-[140px]"
          style={{ background: 'radial-gradient(circle at center, var(--color-accent), transparent 60%)' }}
        />
        <div 
          className="absolute top-1/3 -left-[10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle at center, #1A5F7A, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-15 blur-[150px]"
          style={{ background: 'radial-gradient(circle at center, #15803d, transparent 70%)' }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
