import { Header } from './components/Header';
import { Main } from './components/Main';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import BackToTopButton from './components/BackToTopBtn';
import { ThemeProvider } from './contexts/ThemeContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-night text-slate-900 dark:text-white transition-colors duration-300">
      <Header />
      <main className="relative overflow-hidden">
        <Main />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-charcoal/70 py-8 text-center text-sm text-slate-600 dark:text-slate/80">
        <p>
          Construído por <strong className="text-slate-900 dark:text-neon">Deyvid Gondim</strong> · Desenvolvedor Fullstack · {new Date().getFullYear()}
        </p>
      </footer>
      <BackToTopButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
