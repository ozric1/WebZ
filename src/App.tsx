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
  ExternalLink, 
  Globe, 
  Menu, 
  X, 
  Check,
  ShieldCheck,
  Calendar as CalendarIcon,
  Phone
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { GlobePulse } from './components/ui/cobe-globe-pulse';
import { Analytics } from '@vercel/analytics/react';

import { DottedSurface } from './components/ui/dotted-surface';
import FAQ from './components/FAQ';
import BookingModal from './components/BookingModal';
import LegalModal from './components/LegalModal';
import { ExpandableGallery } from './components/ui/expandable-gallery';
import CaseStudyAndTestimonial from './components/CaseStudyAndTestimonial';
import PricingSection from './components/PricingSection';
import Founder from './components/Founder';

// --- Assets Data ---
const serviceIcons = [
  <Palette className="w-6 h-6" />,
  <Code2 className="w-6 h-6" />,
  <Box className="w-6 h-6" />,
  <Rocket className="w-6 h-6" />
];

// Curated Project Assets: Top 4 are Live, followed by UI/3D prototypes
const projectAssets = [
  {
    id: 1,
    image: "/naatura.webp",
    color: "from-yellow-600 to-amber-700",
    link: "https://naturajungle.ma/"
  },
  {
    id: 2,
    image: "/zentiaa.webp",
    color: "from-blue-500 to-cyan-600",
    link: "https://zentia.world/"
  },
  {
    id: 3,
    image: "/agefic.webp",
    color: "from-slate-800 to-indigo-950",
    link: "https://agefic.vercel.app/"
  },
  {
    id: 4,
    image: "/madibee.webp",
    color: "from-[#eeff96] to-[#233102]",
    link: "https://madibee.netlify.app/"
  },
  {
    id: 5,
    image: "/sportsfields.webp",
    color: "from-orange-500 to-red-600",
    link: "https://soccer-eight-henna.vercel.app/fr"
  },
  {
    id: 6,
    image: "/nightly.webp",
    color: "from-purple-500 to-indigo-600",
    link: "https://nightllife.netlify.app/"
  },
  {
    id: 7,
    image: "/hilton.webp",
    color: "from-amber-600 to-zinc-900",
    link: "https://hilton-vip-rentals.vercel.app/"
  }
];

// --- Navbar Component ---
interface NavbarProps {
  onBookCall: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookCall }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();

  const isFr = language === 'fr';
  const isAr = language === 'ar';

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
          scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
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
          
          <div className="hidden lg:flex gap-7 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#casestudy" className="hover:text-white transition-colors">
              {isFr ? 'Étude de Cas' : isAr ? 'دراسة حالة' : 'Case Study'}
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a>
            <a href="#founder" className="hover:text-white transition-colors">
              {isFr ? 'Fondateur' : isAr ? 'المؤسس' : 'Founder'}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <Globe className="w-4 h-4 text-zinc-400" />
              <button 
                onClick={() => setLanguage('fr')} 
                className={`text-xs font-medium transition-colors ${language === 'fr' ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                FR
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`text-xs font-medium transition-colors ${language === 'en' ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                EN
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => setLanguage('ar')} 
                className={`text-xs font-medium transition-colors ${language === 'ar' ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                AR
              </button>
            </div>

            <button 
              onClick={onBookCall}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-emerald-500/50 cursor-pointer active:scale-95"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{t.nav.letsTalk}</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden pt-24 px-6 flex flex-col">
          <div className="flex flex-col gap-5 text-xl font-display font-medium mb-12">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#casestudy" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
              {isFr ? 'Étude de Cas (Natura Jungle)' : 'Case Study'}
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.pricing}</a>
            <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
              {isFr ? 'Fondateur (Nezar)' : 'Founder'}
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.faq}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
          
          <div className="flex flex-col gap-5 mt-auto mb-10">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-3 w-max">
              <Globe className="w-5 h-5 text-zinc-400" />
              <button 
                onClick={() => { setLanguage('fr'); setMobileMenuOpen(false); }} 
                className={`text-sm font-medium transition-colors ${language === 'fr' ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                FR
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }} 
                className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                EN
              </button>
              <span className="text-zinc-700">|</span>
              <button 
                onClick={() => { setLanguage('ar'); setMobileMenuOpen(false); }} 
                className={`text-sm font-medium transition-colors ${language === 'ar' ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                AR
              </button>
            </div>
            
            <button 
              onClick={() => { setMobileMenuOpen(false); onBookCall(); }}
              className="px-6 py-4 bg-emerald-600 text-white text-center font-bold rounded-full hover:bg-emerald-500 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-500/50 cursor-pointer"
            >
              {t.nav.letsTalk}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Hero Component ---
interface HeroProps {
  onBookCall: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const { t, language, dir } = useLanguage();

  const isFr = language === 'fr';
  const isAr = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm mb-6 pointer-events-auto shadow-[0_0_15px_rgba(20,184,166,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-xs font-bold text-teal-100 uppercase tracking-widest">
            {isFr ? 'Nezar Abdeljalil • Casablanca & International' : isAr ? 'نزار عبد الجليل • المغرب ودولياً' : 'Nezar Abdeljalil • Casablanca & International'}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
        >
          {t.hero.title1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
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

        {/* Dual Primary Call-to-Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto mb-16"
        >
          <button 
            onClick={onBookCall}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] active:scale-95 cursor-pointer group"
          >
            <CalendarIcon className="w-4 h-4 text-black" />
            <span>{isFr ? 'Réserver un Appel' : isAr ? 'احجز استشارة مجانية' : 'Book a Discovery Call'}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${dir === 'rtl' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
          </button>
          
          <a 
            href="#work" 
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2"
          >
            {t.hero.viewWork}
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
            {['React 19', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-24 relative z-10 bg-transparent scroll-mt-24">
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
              className="bg-[#0a0f18] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center shadow-lg relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
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

// --- Services Component ---
const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-24 relative z-10 bg-transparent scroll-mt-24">
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
              className="p-8 rounded-3xl bg-[#0a0f18] border border-white/10 hover:border-emerald-500/30 transition-colors group shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300">
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

// --- Work Component ---
const Work = () => {
  const { t, language } = useLanguage();

  const projects = t.work.projects.map((p: any, i: number) => ({
    ...p,
    image: projectAssets[i]?.image || '',
    link: projectAssets[i]?.link || '',
    color: projectAssets[i]?.color || ''
  }));

  const exploreMoreText = language === 'fr' ? 'Explorer plus de projets' : language === 'ar' ? 'استكشف المزيد من المشاريع' : 'Explore more projects';
  const goBackText = language === 'fr' ? 'Retour' : language === 'ar' ? 'العودة' : 'Go back';

  return (
    <section id="work" className="py-20 md:py-24 relative z-10 bg-transparent scroll-mt-24">
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

// --- Contact Component ---
interface ContactProps {
  onBookCall: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBookCall }) => {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const isAr = language === 'ar';

  return (
    <section id="contact" className="py-20 md:py-24 relative z-10 bg-transparent scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 rounded-[3rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-14 relative z-10">
            {t.contact.title1} <br className="hidden md:block" />
            <span className="text-zinc-500">{t.contact.title2}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-14 relative z-10 w-full">
            {t.contact.steps?.map((step: any, index: number) => (
              <div key={index} className="bg-black/40 p-7 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                <div className="text-emerald-400 font-mono text-xs font-bold mb-2">0{index + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-zinc-300 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto relative z-10">
            {t.contact.description}
          </p>
          
          {/* Working Next Steps: Dual Option */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all cursor-pointer active:scale-95"
            >
              <CalendarIcon className="w-4 h-4 text-black" />
              <span>{isFr ? 'Réserver une Consultation Gratuite' : isAr ? 'احجز استشارة مجانية' : 'Book a Free Consultation'}</span>
            </button>

            <a
              href="https://wa.me/212634175357"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          <FAQ />
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer Component ---
interface FooterProps {
  onOpenLegal: (tab: 'mentions' | 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <footer className="py-12 border-t border-white/10 bg-[#05070a] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-zinc-400 text-sm font-semibold">
            © {new Date().getFullYear()} webZ • Nezar Abdeljalil
          </div>
          <div className="text-zinc-500 text-xs">
            {isFr 
              ? 'Prestataire digital (Auto-Entrepreneur) • Casablanca, Maroc • Facturation avec ICE'
              : 'Registered Digital Service Provider • Casablanca, Morocco'}
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 font-medium">
          <button 
            onClick={() => onOpenLegal('mentions')}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {isFr ? 'Mentions Légales' : 'Legal Notice'}
          </button>
          <span>•</span>
          <button 
            onClick={() => onOpenLegal('terms')}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {isFr ? 'Conditions de Prestation (CGV)' : 'Terms of Service'}
          </button>
          <span>•</span>
          <button 
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {isFr ? 'Confidentialité' : 'Privacy Policy'}
          </button>
        </div>

        {/* Social / Contact Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/212634175357" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a 
            href="mailto:abdelnezar7@gmail.com" 
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nezar-abdeljalil/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/ozric1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Root ---
export default function App() {
  const { dir } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'mentions' | 'terms' | 'privacy'>('mentions');
  
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

      <Navbar onBookCall={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBookCall={() => setIsBookingOpen(true)} />
        <About />
        <Services />
        <Work />
        <CaseStudyAndTestimonial />
        <PricingSection onBookCall={() => setIsBookingOpen(true)} />
        <Founder />
        <Contact onBookCall={() => setIsBookingOpen(true)} />
      </main>

      <Footer 
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setIsLegalOpen(true);
        }} 
      />

      {/* Conversion Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <LegalModal 
        isOpen={isLegalOpen} 
        onClose={() => setIsLegalOpen(false)} 
        initialTab={legalTab} 
      />

      <Analytics />
    </div>
  );
}
