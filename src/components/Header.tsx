import { useEffect, useState } from 'react';
import { ResponsiveMenu } from './ResponsiveMenu';

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
        hasShadow ? 'bg-charcoal/90 backdrop-blur-lg shadow-glow border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <span className="rounded-full bg-aurora/15 px-3 py-1 text-sm font-medium text-neon">Fullstack</span>
          <span className="font-serif text-xl">Deyvid Gondim</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate/80">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} className="link text-slate/80 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/DeyvidJesus"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate hover:border-neon/70 hover:text-white hover:shadow-glow transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deyvid-g/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-aurora px-5 py-2 text-sm font-semibold text-charcoal transition hover:bg-neon"
          >
            LinkedIn
          </a>
        </div>

        <ResponsiveMenu items={NAV_ITEMS} />
      </div>
    </header>
  );
}
