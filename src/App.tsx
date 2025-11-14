import { Header } from './components/Header';
import { Main } from './components/Main';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import BackToTopButton from './components/BackToTopBtn';

function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <Header />
      <main className="relative overflow-hidden">
        <Main />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/5 bg-charcoal/70 py-8 text-center text-sm text-slate/80">
        <p>
          Construído por <strong className="text-neon">Deyvid Gondim</strong> · Desenvolvedor Fullstack · {new Date().getFullYear()}
        </p>
      </footer>
      <BackToTopButton />
    </div>
  );
}

export default App;
