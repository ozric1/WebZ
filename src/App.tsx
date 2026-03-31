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
import { CursorDrivenParticleTypography } from './components/ui/cursor-driven-particles-typography';
import { LiquidMetalButton } from './components/ui/liquid-metal-button';
import { DottedSurface } from './components/ui/dotted-surface';
import { Banner } from './components/ui/banner';
import BookingModal from './components/BookingModal';
import FAQ from './components/FAQ';

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
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "from-orange-500 to-red-600",
    link: "https://soccer-eight-henna.vercel.app/fr"
  },
  {
    id: 4,
    image: "/zen.png",
    color: "from-blue-500 to-cyan-600",
    link: "https://zentia.world/"
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
        style={{ top: 'var(--fd-banner-height, 0px)' }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-display font-bold tracking-tighter flex items-center gap-1 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            web<span className="text-blue-500 transition-colors duration-300 group-hover:text-purple-500">Z</span>
          </motion.a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
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
              href="mailto:abdelnezar7@gmail.com" 
              className="hidden sm:block px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors"
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
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">{t.nav.work}</a>
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
              href="mailto:abdelnezar7@gmail.com" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 bg-white text-black text-center font-medium rounded-full hover:bg-zinc-200 transition-colors"
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">{t.hero.available}</span>
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

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                {serviceIcons[index]}
              </div>
              <div className="h-12 mb-3">
                <CursorDrivenParticleTypography
                  text={service.title}
                  fontSize={24}
                  particleDensity={3}
                  dispersionStrength={10}
                  color="#ffffff"
                  className="w-full h-full"
                />
              </div>
              <p className="text-zinc-400 leading-relaxed">
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
    <section id="work" className="py-32 relative z-10 bg-transparent">
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

const Contact = () => {
  const { t, dir } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-32 relative z-10 bg-transparent">
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 relative overflow-hidden" dir={dir}>
      <Banner id="construction-banner" variant="rainbow">
        {t.banner.construction}
      </Banner>
      <DottedSurface className="opacity-40" />
      
      {/* Global Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-full h-full rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle at center, var(--color-accent), transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(circle at center, #8b5cf6, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle at center, #ec4899, transparent 70%)' }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
