import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem('mcc-language');
    if (stored) return JSON.parse(stored) as Language;
  } catch { /* ignore */ }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try { window.localStorage.setItem('mcc-language', JSON.stringify(lang)); } catch { /* ignore */ }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
