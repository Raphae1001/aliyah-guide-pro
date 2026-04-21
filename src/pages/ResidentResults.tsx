import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Chip from "@/components/Chip";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, FileText, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = ["Toutes", "Aides sociales", "Logement", "Emploi", "Famille", "Santé"];

const mockBenefits = [
  {
    title: "Allocation de subsistance (Havtahat Hakhnasa)",
    category: "Aides sociales",
    amount: "2 800 NIS / mois",
    priority: "Élevée",
    eligibility: "Revenu inférieur au seuil légal, résident depuis 2+ ans",
    documents: ["Teudat Zehut", "Fiches de salaire (3 derniers mois)", "Attestation de résidence"],
    action: "Déposer une demande auprès du Bituah Leumi",
    note: "Le traitement prend en moyenne 4 à 6 semaines.",
  },
  {
    title: "Aide au loyer (Siyua Skhirut)",
    category: "Logement",
    amount: "1 100 NIS / mois",
    priority: "Élevée",
    eligibility: "Locataire, revenus modestes, famille avec enfants",
    documents: ["Contrat de bail", "Justificatif de revenus", "Teudat Oleh"],
    action: "Faire une demande au Misrad HaShikun",
    note: "Renouvellement annuel requis.",
  },
  {
    title: "Allocation enfants (Kitzba Yeladim)",
    category: "Famille",
    amount: "500 NIS / mois",
    priority: "Standard",
    eligibility: "Parent d'enfants de moins de 18 ans résidant en Israël",
    documents: ["Teudat Zehut", "Actes de naissance"],
    action: "Automatique via Bituah Leumi après enregistrement",
  },
  {
    title: "Assurance maladie complémentaire",
    category: "Santé",
    amount: "Couverture étendue",
    priority: "Standard",
    eligibility: "Tout résident inscrit à une Kupat Holim",
    documents: ["Carte de membre Kupat Holim"],
    action: "Vérifier et souscrire auprès de votre Kupat Holim",
  },
  {
    title: "Programme de réinsertion professionnelle",
    category: "Emploi",
    amount: "Formation gratuite",
    priority: "Moyenne",
    eligibility: "Demandeur d'emploi inscrit au Sherut HaTaasuka",
    documents: ["Attestation Sherut HaTaasuka", "CV"],
    action: "Contacter votre conseiller emploi au Sherut HaTaasuka",
  },
];

const ResidentResults = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const { t } = useLanguage();

  const filtered = activeCategory === "Toutes"
    ? mockBenefits
    : mockBenefits.filter((b) => b.category === activeCategory);

  const toggleCard = (i: number) => {
    const next = new Set(expandedCards);
    next.has(i) ? next.delete(i) : next.add(i);
    setExpandedCards(next);
  };

  return (
    <AppLayout>
      <div className="section-container py-10 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("results.resident.title")}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("results.resident.subtitle")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in">
          {[
            { label: "Droits identifiés", value: "5" },
            { label: "Montant estimé", value: "~4 400 NIS/mois" },
            { label: "Priorité élevée", value: "2" },
            { label: "Documents requis", value: "8" },
          ].map((s) => (
            <div key={s.label} className="stat-card text-center">
              <p className="text-2xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`chip rounded-lg px-4 py-2 text-sm cursor-pointer transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Benefit Cards */}
        <div className="space-y-4 animate-fade-in">
          {filtered.map((benefit, i) => (
            <div key={i} className="premium-card overflow-hidden">
              <button
                onClick={() => toggleCard(i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Chip variant={benefit.priority === "Élevée" ? "warning" : "muted"}>{benefit.priority}</Chip>
                    <Chip variant="accent">{benefit.category}</Chip>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{benefit.title}</h3>
                  <p className="text-primary font-semibold text-sm mt-1">{benefit.amount}</p>
                </div>
                {expandedCards.has(i) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                )}
              </button>
              {expandedCards.has(i) && (
                <div className="px-6 pb-6 border-t border-border/60 pt-4 space-y-4 animate-fade-in">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Conditions d'éligibilité</h4>
                    <p className="text-sm text-muted-foreground">{benefit.eligibility}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Documents requis</h4>
                    <div className="flex flex-wrap gap-2">
                      {benefit.documents.map((doc) => (
                        <span key={doc} className="inline-flex items-center gap-1 chip-primary text-xs">
                          <FileText className="w-3 h-3" /> {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Action à entreprendre</h4>
                    <p className="text-sm text-muted-foreground">{benefit.action}</p>
                  </div>
                  {benefit.note && (
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">💡 {benefit.note}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button variant="default" size="lg">
            <Download className="w-4 h-4" /> {t("results.download.report")}
          </Button>
          <Link to="/dossiers">
            <Button variant="outline" size="lg">
              {t("results.save")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default ResidentResults;
