import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe, LinkedinIcon, Mail, MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../translations';

const TECH_STACK = [
  '✦ Procesos · Ejecución · Tecnología · IA',
  'Procesos & Data → BPMN · BI · SQL · Ejecución → Agile · Scrum · Kanban · OKR · Tecnología → Jira · Notion · HubSpot · Workspace · IA → N8N · Langchain · AI Studio · Low Code'
];

interface LayoutProps {
  children: ReactNode;
  setIsExperienceVisible?: (visible: boolean) => void;
}

export default function Layout({ children, setIsExperienceVisible }: LayoutProps) {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang];
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExperienceClick = () => {
    setIsMenuOpen(false);
    if (isHome && setIsExperienceVisible) {
      setIsExperienceVisible(true);
      setTimeout(() => {
        document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate('/', { state: { showExperience: true } });
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-brand-text text-xl tracking-tighter flex items-center" onClick={closeMenu}>
            <span className="font-medium text-brand-text">Rocio</span>
            <span className="font-bold text-brand-accent">Gutierrez</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to={isHome ? "#sobre-mi" : "/#sobre-mi"} 
              className="text-sm font-medium text-brand-muted hover:text-brand-green transition-colors"
              onClick={() => {
                if (isHome) document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.nav.about}
            </Link>
            <Link 
              to={isHome ? "#servicios" : "/#servicios"} 
              className="text-sm font-medium text-brand-muted hover:text-brand-green transition-colors"
              onClick={() => {
                if (isHome) document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.nav.services}
            </Link>
            <button 
              onClick={handleExperienceClick}
              className="text-sm font-medium text-brand-muted hover:text-brand-green transition-colors"
            >
              {t.nav.experience}
            </button>
            
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center text-brand-muted hover:text-brand-green transition-colors w-9 h-9 rounded-lg border border-brand-green/20"
              title="Cambiar tema"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-deep transition-colors px-3 py-1.5 rounded-lg border border-brand-green/20"
            >
              <Globe className="w-4 h-4" />
              {lang === "es" ? "EN" : "ES"}
            </button>

            <a 
              href="https://wa.me/5491159155766" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-deep transition-all shadow-sm"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-text p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden glass-card !rounded-none border-t border-brand-text/5 py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <Link 
              to={isHome ? "#sobre-mi" : "/#sobre-mi"} 
              className="text-lg font-medium text-brand-text"
              onClick={() => {
                closeMenu();
                if (isHome) setTimeout(() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
            >
              {t.nav.about}
            </Link>
            <Link 
              to={isHome ? "#servicios" : "/#servicios"} 
              className="text-lg font-medium text-brand-text"
              onClick={() => {
                closeMenu();
                if (isHome) setTimeout(() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
            >
              {t.nav.services}
            </Link>
            <button 
              onClick={handleExperienceClick}
              className="text-lg font-medium text-brand-text text-left"
            >
              {t.nav.experience}
            </button>
            <div className="flex items-center justify-between pt-4 border-t border-brand-text/5 gap-4">
              <button 
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="flex items-center gap-2 text-sm font-semibold text-brand-muted"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
              <button 
                onClick={() => {
                  setLang(lang === "es" ? "en" : "es");
                  closeMenu();
                }}
                className="flex items-center gap-2 text-sm font-semibold text-brand-green"
              >
                <Globe className="w-4 h-4" />
                {lang === "es" ? "EN" : "ES"}
              </button>
            </div>
            <a 
              href="https://wa.me/5491159155766" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-6 py-4 rounded-full text-center font-bold shadow-lg shadow-brand-green/20"
              onClick={closeMenu}
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </nav>

      {/* Tech Stack Sub-header */}
      <div className="sticky top-20 z-40 bg-brand-green/80 backdrop-blur-md text-white/90 py-2.5 border-b border-brand-text/10 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-scroll">
          {/* First set of items */}
          <div className="flex items-center gap-12 px-6">
            {TECH_STACK.map((tech, i) => (
              <span key={`tech-1-${i}`} className="text-xs font-bold uppercase tracking-widest whitespace-nowrap flex items-center gap-4">
                {tech}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40" />
              </span>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 px-6">
            {TECH_STACK.map((tech, i) => (
              <span key={`tech-2-${i}`} className="text-xs font-bold uppercase tracking-widest whitespace-nowrap flex items-center gap-4">
                {tech}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-text/5 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-brand-text text-lg tracking-tighter mb-2 flex items-center">
                <span className="font-medium">Rocio</span>
                <span className="font-bold ml-1 text-brand-accent">Gutierrez</span>
              </div>
              <p className="text-brand-muted text-sm">{t.footer.rights}</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/gutierrezrocioa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-text/5 border border-brand-text/10 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="mailto:perfilai.consultoria@gmail.com" className="w-10 h-10 rounded-full bg-brand-text/5 border border-brand-text/10 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5491159155766" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-text/5 border border-brand-text/10 flex items-center justify-center text-brand-muted hover:bg-brand-green hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
