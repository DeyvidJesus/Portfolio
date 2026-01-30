import { createContext } from 'react';

export type Language = 'en' | 'pt';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
