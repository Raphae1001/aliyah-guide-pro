import AppLayout from "@/components/AppLayout";
import ProgressBar from "@/components/ProgressBar";
import Chip from "@/components/Chip";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/UIStates";
import { FolderOpen, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const mockDossiers = [
  {
    id: "1",
    title: "Analyse droits résident — Mars 2026",
    type: "Résident",
    date: "15 mars 2026",
    progress: 100,
    tags: ["Aides sociales", "Logement", "Famille"],
  },
  {
    id: "2",
    title: "Guide Aliyah personnalisé — Février 2026",
    type: "Aliyah",
    date: "22 février 2026",
    progress: 65,
    tags: ["Fiscalité", "Emploi", "Sal Klita"],
  },
  {
    id: "3",
    title: "Préparation Aliyah 2027",
    type: "Aliyah",
    date: "10 janvier 2026",
    progress: 30,
    tags: ["Logement", "Déménagement"],
  },
];

const DossiersPage = () => {
  const hasDossiers = mockDossiers.length > 0;
  const { t } = useLanguage();

  return (
    <AppLayout>
      <div className="section-container py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("dossiers.title")}</h1>
            <p className="text-muted-foreground text-lg">{t("dossiers.subtitle")}</p>
          </div>

          {hasDossiers ? (
            <div className="space-y-4 animate-fade-in">
              {mockDossiers.map((dossier) => (
                <div key={dossier.id} className="premium-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Chip variant={dossier.type === "Aliyah" ? "accent" : "primary"}>{dossier.type}</Chip>
                        <span className="text-xs text-muted-foreground">{dossier.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-3">{dossier.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {dossier.tags.map((tag) => (
                          <span key={tag} className="chip-primary text-xs">{tag}</span>
                        ))}
                      </div>
                      <ProgressBar
                        value={dossier.progress}
                        variant={dossier.progress === 100 ? "success" : "default"}
                      />
                    </div>
                    <div className="flex sm:flex-col gap-2 flex-shrink-0">
                      <Link to={dossier.type === "Aliyah" ? "/aliyah/resultats" : "/resident/resultats"}>
                        <Button variant="default" size="sm" className="w-full">
                          {t("dossiers.resume")} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title={t("dossiers.empty.title")}
              description={t("dossiers.empty.desc")}
              icon={<FolderOpen className="w-12 h-12" />}
            />
          )}

          {hasDossiers && (
            <div className="mt-10 text-center">
              <Link to="/commencer">
                <Button variant="outline" size="lg">
                  {t("dossiers.new")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default DossiersPage;
