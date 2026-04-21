import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Chip from "@/components/Chip";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = [
  {
    title: "Fiscalité",
    icon: "💰",
    items: [
      { title: "Exonération d'impôts sur les revenus étrangers", desc: "Pendant 10 ans après l'Aliyah, vos revenus générés hors d'Israël (loyers, dividendes, pensions) sont exonérés d'impôts israéliens.", priority: "Élevée" },
      { title: "Réduction d'impôts sur le revenu israélien", desc: "Les Olim Hadashim bénéficient de crédits d'impôt (Nekoudot Zikui) supplémentaires pendant 3,5 ans.", priority: "Standard" },
      { title: "Convention fiscale France-Israël", desc: "Vérifiez les implications de la convention de non-double imposition pour votre situation patrimoniale.", priority: "Élevée" },
    ],
  },
  {
    title: "Aides Aliyah",
    icon: "🎯",
    items: [
      { title: "Sal Klita (Panier d'absorption)", desc: "Aide financière versée en plusieurs étapes sur les 6 premiers mois. Montant variable selon la situation familiale (env. 20 000 à 35 000 NIS total).", priority: "Élevée" },
      { title: "Cours d'hébreu (Oulpan)", desc: "5 mois de cours d'hébreu intensifs gratuits dans un Oulpan certifié.", priority: "Standard" },
      { title: "Aide au logement temporaire", desc: "Possibilité d'accéder à un centre d'absorption ou à une aide temporaire au logement pendant les premiers mois.", priority: "Standard" },
    ],
  },
  {
    title: "Logement",
    icon: "🏠",
    items: [
      { title: "Aide au loyer Olim", desc: "Aide au loyer spécifique pour les nouveaux immigrants, cumulable sous conditions avec d'autres aides.", priority: "Élevée" },
      { title: "Prêt hypothécaire Mashkanta Olim", desc: "Conditions préférentielles sur les prêts immobiliers pour les Olim dans les premières années.", priority: "Standard" },
    ],
  },
  {
    title: "Emploi",
    icon: "💼",
    items: [
      { title: "Reconnaissance des diplômes", desc: "Certaines professions nécessitent une procédure de reconnaissance. Anticipez les démarches pour votre secteur (Tech / IT).", priority: "Standard" },
      { title: "Programmes d'insertion professionnelle", desc: "Accès à des programmes dédiés aux Olim pour faciliter l'entrée sur le marché du travail israélien.", priority: "Standard" },
    ],
  },
  {
    title: "Plan d'action",
    icon: "📋",
    items: [
      { title: "6 mois avant : démarches consulaires", desc: "Ouvrir un dossier Aliyah auprès de l'Agence Juive, réunir les documents requis, prendre rendez-vous au consulat.", priority: "Élevée" },
      { title: "3 mois avant : logement et finances", desc: "Rechercher un logement temporaire, ouvrir un compte bancaire en Israël, anticiper les transferts de fonds.", priority: "Élevée" },
      { title: "1 mois avant : logistique", desc: "Organiser le déménagement, souscrire une assurance santé temporaire, préparer les premiers jours.", priority: "Standard" },
      { title: "Arrivée : premiers pas", desc: "Obtenir la Teudat Oleh, s'inscrire au Bituah Leumi, choisir une Kupat Holim, s'inscrire à l'Oulpan.", priority: "Élevée" },
    ],
  },
  {
    title: "Pièges à éviter",
    icon: "⚠️",
    items: [
      { title: "Ne pas déclarer ses comptes étrangers", desc: "Même si les revenus sont exonérés, la non-déclaration des comptes peut entraîner des pénalités.", priority: "Élevée" },
      { title: "Négliger la couverture santé transitoire", desc: "La Kupat Holim ne prend effet qu'après l'inscription. Prévoyez une couverture pour la période intermédiaire.", priority: "Standard" },
    ],
  },
];

const AliyahResults = () => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));
  const { t } = useLanguage();

  const toggleSection = (i: number) => {
    const next = new Set(expandedSections);
    next.has(i) ? next.delete(i) : next.add(i);
    setExpandedSections(next);
  };

  return (
    <AppLayout>
      <div className="section-container py-10 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("results.aliyah.title")}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("results.aliyah.subtitle")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in">
          {[
            { label: "Droits identifiés", value: "14" },
            { label: "Sal Klita estimé", value: "~28 000 NIS" },
            { label: "Étapes clés", value: "12" },
            { label: "Alertes", value: "3" },
          ].map((s) => (
            <div key={s.label} className="stat-card text-center">
              <p className="text-2xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Alert banner */}
        <div className="bg-warning-light border border-warning/20 rounded-xl p-4 flex items-start gap-3 mb-10 animate-fade-in">
          <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Points d'attention importants</p>
            <p className="text-sm text-muted-foreground">3 éléments nécessitent une attention particulière dans votre dossier. Consultez les sections Fiscalité et Pièges à éviter.</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4 animate-fade-in">
          {sections.map((section, si) => (
            <div key={si} className="premium-card overflow-hidden">
              <button
                onClick={() => toggleSection(si)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.items.length} élément{section.items.length > 1 ? "s" : ""}</p>
                  </div>
                </div>
                {expandedSections.has(si) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {expandedSections.has(si) && (
                <div className="px-6 pb-6 space-y-3 animate-fade-in">
                  {section.items.map((item, ii) => (
                    <div key={ii} className="bg-muted/30 rounded-lg p-4 border border-border/40">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                        <Chip variant={item.priority === "Élevée" ? "warning" : "muted"} className="flex-shrink-0">{item.priority}</Chip>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button variant="default" size="lg">
            <Download className="w-4 h-4" /> {t("results.download.guide")}
          </Button>
          <Link to="/preparation">
            <Button variant="outline" size="lg">
              {t("results.preparation")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </Link>
          <Link to="/dossiers">
            <Button variant="ghost" size="lg">
              {t("results.save")}
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default AliyahResults;
