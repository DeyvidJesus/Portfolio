import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';

type ResponsiveMenuProps = {
  items: Array<{ label: string; href: string }>;
};

export function ResponsiveMenu({ items }: ResponsiveMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const toggleBodyOverflow = () => {
      document.body.style.overflow = isOpened ? 'hidden' : '';
    };

    toggleBodyOverflow();
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);

  const closeMenu = () => setIsOpened(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpened(prev => !prev)}
        className="relative z-50 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-neon/60 hover:text-neon"
        aria-label="Abrir menu de navegação"
      >
        {isOpened ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {isOpened && (
        <nav className="fixed inset-0 z-40 flex flex-col bg-charcoal/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              onClick={closeMenu}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-neon/60 hover:text-neon"
              aria-label="Fechar menu de navegação"
            >
              <FiX size={20} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-8 text-lg font-medium text-slate">
            {items.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="link text-2xl text-slate hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-6 pb-12 text-slate">
            <a
              href="https://github.com/DeyvidJesus"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-neon/60 hover:text-neon"
            >
              <FiGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/deyvid-g/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-aurora px-4 py-2 font-semibold text-charcoal transition hover:bg-neon"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
