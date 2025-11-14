import { useEffect, useState } from 'react';
import { ResponsiveMenu } from './ResponsiveMenu';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Resumo', href: '#resumo' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' }
];

export function Header() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        hasShadow 
          ? 'bg-slate-50/90 dark:bg-charcoal/90 backdrop-blur-lg shadow-glow border-b border-slate-200 dark:border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="rounded-full bg-aurora/15 px-3 py-1 text-sm font-medium text-aurora dark:text-neon">Fullstack</span>
          <span className="font-serif text-xl">Deyvid Gondim</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate/90">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} className="link text-slate-700 dark:text-slate/90 hover:text-slate-900 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/DeyvidJesus"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-slate px-4 py-2 text-sm font-medium hover:border-aurora dark:hover:border-neon/70 dark:hover:text-white hover:shadow-glow transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deyvid-gondim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-aurora dark:bg-aurora px-5 py-2 text-sm font-semibold text-white dark:text-charcoal transition hover:bg-aurora/90 dark:hover:bg-neon"
          >
            LinkedIn
          </a>
        </div>

        <ResponsiveMenu items={NAV_ITEMS} />
      </div>
    </header>
  );
}
