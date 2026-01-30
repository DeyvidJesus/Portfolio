import { useEffect, useState } from 'react';
import { ResponsiveMenu } from './ResponsiveMenu';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../hooks/useLanguage';

const NAV_ITEMS = {
  en: [
    { label: 'Home', href: '#inicio' },
    { label: 'Summary', href: '#resumo' },
    { label: 'Experience', href: '#experiencias' },
    { label: 'Projects', href: '#projetos' },
    { label: 'Skills', href: '#habilidades' },
    { label: 'Contact', href: '#contato' }
  ],
  pt: [
    { label: 'Início', href: '#inicio' },
    { label: 'Resumo', href: '#resumo' },
    { label: 'Experiências', href: '#experiencias' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contato', href: '#contato' }
  ]
};

export function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const { language } = useLanguage();
  const navItems = NAV_ITEMS[language];

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
          ? 'border-b border-slate-200/60 bg-white/85 shadow-[0_18px_40px_-24px_rgba(31,157,109,0.35)] backdrop-blur-xl dark:border-white/5 dark:bg-charcoal/90'
          : 'bg-transparent'
      }`}
    >
      {hasShadow && (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-light-layer opacity-90 dark:hidden" />
          <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-gradient-to-b from-charcoal/80 to-night dark:block" />
        </>
      )}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="rounded-full bg-gradient-to-r from-aurora/20 via-sunrise/25 to-skyglass/30 px-3 py-1 text-sm font-medium text-aurora dark:text-neon">
            Fullstack
          </span>
          <span className="font-serif text-xl bg-gradient-to-r from-slate-900 via-aurora to-coral bg-clip-text text-transparent dark:bg-none dark:text-white">
            Deyvid Gondim
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate/90">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="link text-slate-700 transition-colors hover:text-aurora dark:text-slate/90 dark:hover:text-neon"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="https://github.com/DeyvidJesus"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-aurora hover:text-aurora hover:shadow-aurora dark:border-white/10 dark:bg-white/5 dark:text-slate dark:hover:border-neon/70 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deyvid-gondim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-aurora via-emerald-500 to-sunrise px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_-22px_rgba(31,157,109,0.65)] transition hover:brightness-110 dark:bg-aurora dark:text-charcoal dark:shadow-glow dark:hover:bg-neon"
          >
            LinkedIn
          </a>
        </div>

        <ResponsiveMenu items={navItems} />
      </div>
    </header>
  );
}
