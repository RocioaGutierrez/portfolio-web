import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, LinkedinIcon, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "../translations";
import { useLanguage } from "../context/LanguageContext";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutDetail() {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEO
        lang={lang}
        title={t.seo.aboutTitle}
        description={t.seo.aboutDescription}
        path="/sobre-mi"
      />
      <section className="py-24 bg-transparent min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-green transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">{t.about.backLink}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-12 leading-tight">
              {t.about.title}
            </h1>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="md:col-span-2 space-y-8 text-lg text-brand-muted leading-relaxed">
                <p className="text-xl text-brand-text font-medium">
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
                <p>
                  {t.about.p3}
                </p>
                <div className="p-8 rounded-3xl bg-brand-success-bg border border-brand-green/10">
                  <p className="text-2xl font-medium text-brand-text italic leading-relaxed">
                    "{t.about.p4}"
                  </p>
                </div>
                <div className="pt-4 flex">
                  <Link 
                    to="/" 
                    state={{ showExperience: true }}
                    className="group flex items-center justify-center gap-2 bg-brand-green/10 text-brand-green border border-brand-green/20 px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg shadow-brand-green/5"
                  >
                    {lang === 'es' ? 'Ver mi experiencia profesional' : 'View my professional experience'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative overflow-hidden group">
                  <img
                    src="/fotos/20230427_132626.jpg"
                    alt="Rocío Gutiérrez — Consultora IT, Procesos y LegalOps"
                    loading="lazy"
                    className="w-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-bg to-transparent pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none"></div>
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green">{t.about.connect}</h3>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/gutierrezrocioa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:perfilai.consultoria@gmail.com" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://wa.me/5491159155766" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
