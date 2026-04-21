import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations, rtlLanguages } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "olim-rights-language";

const detectLanguage = (): Language => {
  if (typeof window === "undefined") return "fr";
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && ["fr", "en", "he"].includes(stored)) return stored;

  const browser = (navigator.language || "fr").toLowerCase();
  if (browser.startsWith("he") || browser.startsWith("iw")) return "he";
  if (browser.startsWith("en")) return "en";
  if (browser.startsWith("fr")) return "fr";
  return "fr";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  useEffect(() => {
    const isRTL = rtlLanguages.includes(language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const value = translations[language]?.[key];
    if (typeof value === "string") return value;
    const fallback = translations.fr[key];
    return typeof fallback === "string" ? fallback : key;
  };

  const isRTL = rtlLanguages.includes(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
