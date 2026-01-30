import { useLanguage } from '../hooks/useLanguage';

const LANGUAGE_LABELS = {
  en: { label: 'EN', next: 'PT', aria: 'Switch language to Portuguese' },
  pt: { label: 'PT', next: 'EN', aria: 'Mudar idioma para inglês' }
};

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const labels = LANGUAGE_LABELS[language];

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 transition hover:border-aurora hover:text-aurora dark:border-white/10 dark:bg-white/5 dark:text-slate/80 dark:hover:border-neon/60 dark:hover:text-neon"
      aria-label={labels.aria}
      title={labels.aria}
    >
      {labels.next}
    </button>
  );
}
