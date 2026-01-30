import React, { useEffect, useState } from 'react';
import { LanguageContext, type Language } from './languageContext';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const initialLanguage = savedLanguage ?? 'en';
    setLanguage(initialLanguage);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('language', language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'pt' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
