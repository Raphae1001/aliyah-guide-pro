import AppLayout from "@/components/AppLayout";
import { Link } from "react-router-dom";
import { BookOpen, Compass, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ModeSelection = () => {
  const { t } = useLanguage();
  return (
    <AppLayout>
      <div className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("mode.title")}</h1>
          <p className="text-muted-foreground text-lg">{t("mode.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
          <Link
            to="/resident/formulaire"
            className="premium-card-elevated p-10 group cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-info-light flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">{t("landing.mode.resident.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("mode.resident.long")}
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
              {t("landing.mode.resident.cta")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </span>
          </Link>
          <Link
            to="/aliyah/formulaire"
            className="premium-card-elevated p-10 group cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">{t("landing.mode.aliyah.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("mode.aliyah.long")}
            </p>
            <span className="inline-flex items-center gap-2 text-accent-foreground font-semibold group-hover:gap-3 transition-all mt-auto">
              {t("landing.mode.aliyah.cta")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </span>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default ModeSelection;
