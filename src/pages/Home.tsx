import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Database, 
  ShieldCheck, 
  Cpu,
  Target,
  Lightbulb,
  Sparkles,
  Zap,
  Building2,
  RefreshCw,
  Layers,
  Link as LinkIcon,
  Users,
  Globe,
  X,
  ChevronRight
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { translations } from "../translations";
import { useLanguage } from "../context/LanguageContext";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.showExperience) return;
    setIsExperienceVisible(true);
    const scrollTimer = setTimeout(() => {
      document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    window.history.replaceState({}, document.title);
    return () => clearTimeout(scrollTimer);
  }, [location.state]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (selectedService === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedService]);

  return (
    <Layout setIsExperienceVisible={setIsExperienceVisible}>
      <SEO
        lang={lang}
        title={t.seo.homeTitle}
        description={t.seo.homeDescription}
        path="/"
      />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column: Scrollable Content */}
        <div className="w-full lg:w-1/2">
          {/* 1. Hero & Value Proposition */}
          <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-transparent">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl relative"
            >
              {/* Background gradient orb for hero */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-green/20 blur-[100px] rounded-full -z-10"></div>

              <span className="inline-block py-1.5 px-4 rounded-full glass-card text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-10 border-brand-green/20">
                {t.hero.badge}
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text mb-12 leading-[1.1] tracking-tight">
                <span className="block mb-2">Procesos claros.</span>
                <span className="block mb-2 text-brand-green text-glow">Tecnología útil.</span>
                <span className="block">Resultados reales.</span>
              </h1>

              {/* Chat Bubble Style Value Prop */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4 items-start mb-12"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  RG
                </div>
                <div className="relative glass-card p-6 md:p-8 rounded-[2rem] rounded-tl-none border-brand-green/20">
                  <p className="text-base md:text-lg text-brand-text font-medium leading-relaxed">
                    {t.value.text}
                  </p>
                </div>
              </motion.div>

              <div>
                <a
                  href="https://wa.me/5491159155766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-green text-white px-10 py-5 rounded-full font-bold hover:bg-brand-accent transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] group text-base md:text-lg"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

          </section>

          {/* 2. Sobre Mí (Brief) */}
          <section id="sobre-mi" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 relative">
            <div className="absolute right-0 top-1/2 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="max-w-xl">
              <span className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-4 block">{t.nav.about}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-brand-text leading-tight">{t.about.title}</h2>
              <div className="space-y-8 text-lg md:text-xl text-brand-muted leading-relaxed">
                <p className="text-brand-text font-medium">{t.about.brief}</p>
                
                <div className="pt-8 flex flex-wrap gap-8 items-center">
                  <Link 
                    to="/sobre-mi"
                    className="inline-flex items-center gap-2 text-brand-text font-bold hover:text-brand-accent transition-all group border-b-2 border-brand-green/30 pb-1"
                  >
                    <span>{t.about.readMore}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button 
                    onClick={() => setIsExperienceVisible(!isExperienceVisible)}
                    className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all group"
                  >
                    <span>{isExperienceVisible ? t.about.experienceToggleClose : t.about.experienceToggle}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isExperienceVisible ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section (Conditional) */}
          <AnimatePresence>
            {isExperienceVisible && (
              <motion.div
                id="experiencia"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden bg-brand-bg/50 border-t border-white/5 backdrop-blur-sm"
              >
                <div className="py-24 px-6 md:px-12 lg:px-20">
                  <div className="max-w-xl">
                    <div className="mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
                      <p className="text-brand-muted">{t.experience.subtitle}</p>
                    </div>

                    <div className="space-y-10">
                      {t.experience.cases.map((item, index) => (
                        <button
                          key={index}
                          className="group cursor-pointer glass-card p-6 rounded-3xl w-full text-left"
                          onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                          aria-expanded={expandedExperience === index}
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <span className="text-brand-accent font-bold text-sm pt-1 w-10 shrink-0">{item.year}</span>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold group-hover:text-brand-accent transition-colors">{item.title}</h3>
                              <p className="text-brand-muted font-medium">{item.company}</p>
                            </div>
                            <div className={`w-10 h-10 rounded-full bg-white/5 border border-brand-text/10 flex items-center justify-center transition-all duration-300 shrink-0 ${expandedExperience === index ? 'rotate-180 bg-brand-green border-brand-green text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : ''}`}>
                              <ChevronRight className="w-5 h-5" />
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {expandedExperience === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 pb-2 space-y-4 border-t border-brand-text/10 mt-4">
                                  <p className="text-brand-muted leading-relaxed">{item.description}</p>
                                  <div className="bg-brand-success-bg/50 p-4 rounded-xl border border-brand-green/20">
                                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">{t.experience.resultLabel}</span>
                                    <p className="text-brand-text font-medium">{item.result}</p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 4. Servicios */}
          <section id="servicios" className="py-24 px-6 md:px-12 lg:px-20 relative">
            <div className="max-w-xl">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
                <p className="text-brand-muted">{t.services.subtitle}</p>
              </div>
              
              <div className="space-y-8">
                {t.services.items.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedService(idx)}
                    className="glass-card p-8 rounded-3xl group cursor-pointer hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden w-full text-left"
                  >
                    {/* Hover Glow Effect inside card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/5 to-brand-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-14 h-14 rounded-2xl bg-brand-green/10 border border-brand-green/20 text-brand-accent flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                      {[<Settings key="0" className="w-7 h-7" />, <Target key="1" className="w-7 h-7" />, <ShieldCheck key="2" className="w-7 h-7" />][idx]}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors relative z-10">{service.title}</h3>
                    <p className="text-brand-muted mb-8 leading-relaxed relative z-10">
                      {service.summary}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-brand-green font-bold group-hover:gap-3 transition-all relative z-10"
                    >
                      {t.services.viewMore}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Diferencial */}
          <section className="py-24 px-6 md:px-12 lg:px-20 bg-transparent relative border-t border-white/5">
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-green/10 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>
            <div className="max-w-xl">
              <div className="w-14 h-14 rounded-2xl glass-card border-brand-accent/20 text-brand-accent flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                <Sparkles className="w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.differential.title}</h2>
              <p className="text-xl text-brand-text mb-8 font-medium">
                {t.differential.p1}
              </p>
              <p className="text-brand-muted mb-10 leading-relaxed">
                {t.differential.p2}
              </p>
              <ul className="space-y-4 mb-12">
                {t.differential.items.map((diff, i) => (
                  <li key={i} className="flex gap-3 items-center font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                    {diff}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-brand-text/10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4">
                  {t.differential.availability.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t.differential.availability.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full glass-card text-sm font-bold text-brand-text/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. Filosofía de Trabajo */}
          <section className="py-24 px-6 md:px-12 lg:px-20 relative glass-card !rounded-none border-x-0 border-brand-green/20 overflow-hidden">
            <div className="absolute inset-0 bg-brand-deep/30 -z-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"></div>
            
            <div className="max-w-xl relative z-10">
              <div className="w-14 h-14 rounded-2xl glass-card border-brand-accent/30 flex items-center justify-center mb-8 bg-brand-green/10">
                <Lightbulb className="w-7 h-7 text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.philosophy.title}</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed font-medium italic">
                "{t.philosophy.quote}"
              </p>
              <p className="text-lg text-white/70 mb-10">
                {t.philosophy.p1}
              </p>
              <div className="mt-2">
                {t.philosophy.keyPrinciples.map((principle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                    className="group flex items-center gap-4 py-4 border-b border-white/5 last:border-0"
                  >
                    <span className="text-xs font-mono text-brand-green/50 w-5 shrink-0 select-none">
                      0{i + 1}
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.12, ease: "easeOut" }}
                      className="w-6 h-px bg-brand-green/40 origin-left shrink-0 group-hover:bg-brand-green group-hover:w-8 transition-all duration-300"
                    />
                    <span className="text-white/75 text-base font-medium group-hover:text-white transition-colors duration-300">
                      {principle}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. CTA Final */}
          <section className="py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-xl glass-card border-brand-green/30 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.1)]">
              {/* Animated Glow in background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(16,185,129,0.1),transparent)] animate-[spin_10s_linear_infinite] -z-10"></div>
              <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-3xl -z-10"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  <span className="text-brand-text">{t.cta.title}</span> <span className="text-brand-accent text-glow">{t.cta.titleHighlight}</span>
                </h2>
                <p className="text-brand-muted text-lg mb-10">
                  {t.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/5491159155766" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green text-white px-10 py-5 rounded-full font-bold hover:bg-brand-accent transition-all duration-300 text-center shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 text-base"
                  >
                    {t.cta.whatsapp}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gutierrezrocioa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-muted px-6 py-4 rounded-full font-medium hover:text-brand-text transition-colors text-center flex items-center justify-center text-sm border border-white/10 hover:border-white/20"
                  >
                    {t.cta.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Static Photo (Desktop Only) */}
        <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-[112px] lg:h-[calc(100vh-112px)] overflow-hidden ml-4 mb-4 mt-24">
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-green/20 blur-[120px] rounded-full -z-10"></div>
            
            <motion.img 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="/fotos/office_photo.png"
              alt="Rocío Gutiérrez — Consultora IT, Procesos y LegalOps"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-90"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Soft Edge Blending Overlays */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Mobile Photo (Shown between Hero and About) */}
        <div className="lg:hidden w-full aspect-[3/4] bg-transparent relative overflow-hidden my-8 px-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/20 blur-[80px] rounded-full -z-10"></div>
            <img
              src="/fotos/20230427_132626.jpg"
              alt="Rocío Gutiérrez — Consultora IT, Procesos y LegalOps"
              className="h-full w-full object-contain grayscale opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Soft Edge Blending Overlays for Mobile */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-bg via-brand-bg/30 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — fixed centered */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.span
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-muted"
            >
              {t.hero.scroll}
            </motion.span>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border border-brand-text/20 flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-brand-green shadow-[0_0_6px_rgba(16,185,129,0.8)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass-card bg-brand-bg/90 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-brand-text/10"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card border border-brand-text/10 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                  <div className="w-16 h-16 rounded-2xl glass-card border-brand-green/30 bg-brand-green/10 text-brand-accent flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    {[<Settings key="0" className="w-8 h-8" />, <Target key="1" className="w-8 h-8" />, <ShieldCheck key="2" className="w-8 h-8" />][selectedService]}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-brand-text">
                    {t.services.items[selectedService].detail.title}
                  </h2>
                  
                  {t.services.items[selectedService].detail.impact && (
                    <p className="text-xl font-bold text-brand-accent mb-8 leading-relaxed">
                      {t.services.items[selectedService].detail.impact}
                    </p>
                  )}

                  <div className="prose prose-lg text-brand-muted mb-12">
                    {t.services.items[selectedService].detail.description.split('\n\n').map((p, i) => (
                      <p key={i} className="mb-4">{p}</p>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-6">{t.services.modal.includes}</h3>
                      <ul className="space-y-4">
                        {t.services.items[selectedService].detail.includes.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start text-white/90 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-6">{t.services.modal.expectedResult}</h3>
                      <ul className="space-y-4">
                        {t.services.items[selectedService].detail.expectedResult.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start text-white/90 font-medium">
                            <div className="w-5 h-5 rounded-full bg-brand-success-bg flex items-center justify-center shrink-0 mt-0.5 border border-brand-green/20">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {t.services.items[selectedService].detail.differential && (
                    <div className="p-8 rounded-3xl glass-card border border-brand-green/20 mb-12 bg-brand-green/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">{t.services.modal.differential}</h3>
                      <p className="text-lg font-medium text-white/90 italic">
                        "{t.services.items[selectedService].detail.differential}"
                      </p>
                    </div>
                  )}

                  {t.services.items[selectedService].detail.note && (
                    <p className="text-sm text-brand-muted mb-12 glass-card bg-black/20 p-4 rounded-xl border border-white/5">
                      {t.services.items[selectedService].detail.note}
                    </p>
                  )}

                  <div className="pt-8 border-t border-white/10">
                    <a 
                      href="https://wa.me/5491159155766"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-accent transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] w-full md:w-auto text-center"
                    >
                      {t.services.items[selectedService].detail.cta}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
