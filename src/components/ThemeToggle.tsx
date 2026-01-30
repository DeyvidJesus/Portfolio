import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';
  const label =
    language === 'en'
      ? `Switch to ${isDark ? 'light' : 'dark'} mode`
      : `Alternar para tema ${isDark ? 'claro' : 'escuro'}`;

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-white/10 bg-white/5 text-slate hover:border-gray-300 hover:shadow-glow transition"
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? (
        <FiSun className='w-9 h-9 p-1'/>
      ) : (
        <FiMoon className='w-9 h-9 p-1'/>
      )}
    </button>
  );
}
