import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages, Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "header" | "inline";
}

const LanguageSwitcher = ({ variant = "header" }: Props) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === language) ?? languages[0];

  const select = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          variant === "header"
            ? "text-muted-foreground hover:text-foreground hover:bg-muted"
            : "border border-border bg-card hover:bg-muted text-foreground"
        )}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{current.nativeLabel}</span>
        <span className="sm:hidden uppercase">{current.code}</span>
        <ChevronDown className={cn("w-3 h-3 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute end-0 mt-2 w-44 rounded-xl border border-border bg-card shadow-lg overflow-hidden z-50 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => select(lang.code)}
              className={cn(
                "w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm transition-colors text-start",
                language === lang.code
                  ? "bg-secondary text-secondary-foreground font-medium"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.nativeLabel}</span>
              </span>
              {language === lang.code && <Check className="w-4 h-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
