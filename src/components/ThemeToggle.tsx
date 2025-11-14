import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-white/10 bg-white/5 text-slate hover:border-gray-300 hover:shadow-glow transition"
      aria-label="Alternar tema"
      title={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
    >
      {theme === 'dark' ? (
        <FiSun className='w-9 h-9 p-1'/>
      ) : (
        <FiMoon className='w-9 h-9 p-1'/>
      )}
    </button>
  );
}
