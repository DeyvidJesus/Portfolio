import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../hooks/useLanguage';

type ResponsiveMenuProps = {
  items: Array<{ label: string; href: string }>;
};

export function ResponsiveMenu({ items }: ResponsiveMenuProps) {
  const [isOpened, setIsOpened] = useState(false);
  const { language } = useLanguage();
  const menuLabel = language === 'en' ? 'Menu' : 'Menu';
  const openLabel = language === 'en' ? 'Open navigation menu' : 'Abrir menu de navegação';

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
        className="relative z-50 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-2 text-slate-900 dark:text-white transition hover:border-aurora dark:hover:border-neon/60 hover:text-aurora dark:hover:text-neon"
        aria-label={openLabel}
      >
        {isOpened ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {isOpened && (
        <nav className="fixed inset-0 z-40 flex flex-col bg-white dark:bg-charcoal/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">{menuLabel}</span>
            <div className="flex items-center gap-3 mr-14">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-8 text-lg font-medium text-slate-700 dark:text-slate">
            {items.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="link text-2xl text-slate-700 dark:text-slate hover:text-slate-900 dark:hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-6 pb-12 text-slate-700 dark:text-slate">
            <a
              href="https://github.com/DeyvidJesus"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 px-4 py-2 transition hover:border-aurora dark:hover:border-neon/60 hover:text-aurora dark:hover:text-neon"
            >
              <FiGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/deyvid-gondim/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-aurora px-4 py-2 font-semibold text-white dark:text-charcoal transition hover:bg-aurora/90 dark:hover:bg-neon"
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
