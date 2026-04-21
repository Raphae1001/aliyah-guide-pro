import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AppFooter = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border/60 bg-card mt-auto">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">O</span>
              </div>
              <span className="font-semibold text-foreground text-lg">Olim Rights</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t("footer.platform")}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/commencer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.start")}</Link>
              <Link to="/preparation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.preparation")}</Link>
              <Link to="/dossiers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.dossiers")}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t("footer.resources")}</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">{t("footer.help")}</span>
              <span className="text-sm text-muted-foreground">{t("footer.terms")}</span>
              <span className="text-sm text-muted-foreground">{t("footer.privacy")}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
