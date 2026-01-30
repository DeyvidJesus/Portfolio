import { Header } from './components/Header';
import { Main } from './components/Main';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import BackToTopButton from './components/BackToTopBtn';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './hooks/useLanguage';

function AppContent() {
  const { language } = useLanguage();
  const footerCopy =
    language === 'en'
      ? 'Built by '
      : 'Construído por ';
  const footerRole =
    language === 'en'
      ? 'Software Engineer · Full Stack Developer (Backend-focused)'
      : 'Engenheiro de Software · Desenvolvedor Full Stack (Foco em Backend)';

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-night text-slate-900 dark:text-white transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-light-hero opacity-90 blur-[1px] dark:hidden" />
        <div className="absolute inset-x-0 top-0 hidden h-[520px] bg-gradient-to-b from-charcoal/40 via-night/80 to-night dark:block" />
        <div className="absolute -left-36 top-60 hidden h-96 w-96 rounded-full bg-aurora/20 blur-3xl dark:block" />
        <div className="absolute right-[-10%] top-24 hidden h-80 w-80 rounded-full bg-neon/30 blur-3xl dark:block" />
        <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,231,243,0.6)_0%,_transparent_65%)] blur-3xl dark:hidden" />
        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(224,242,255,0.65)_0%,_transparent_65%)] blur-3xl dark:hidden" />
      </div>

      <Header />
      <main className="relative overflow-hidden">
        <Main />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-slate-200/60 bg-gradient-to-r via-skyglass/70 to-white/90 py-8 text-center text-sm text-slate-600 backdrop-blur-md dark:border-white/5 dark:bg-charcoal/70 dark:text-slate/80">
        <p>
          {footerCopy}
          <strong className="bg-gradient-to-r from-aurora via-emerald-500 to-sunrise bg-clip-text text-transparent dark:text-neon">Deyvid Gondim</strong>
          {' · '}
          {footerRole}
          {' · '}
          {new Date().getFullYear()}
        </p>
      </footer>
      <BackToTopButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
