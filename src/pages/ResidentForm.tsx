import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Stepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = ["Profil personnel", "Travail & logement", "Situations spéciales", "Récapitulatif"];

const ResidentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else navigate("/resident/resultats");
  };
  const prev = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  return (
    <AppLayout>
      <div className="section-container py-10 md:py-16 max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        <div className="premium-card p-8 md:p-10 animate-fade-in">
          {currentStep === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Profil personnel</h2>
              <p className="text-muted-foreground text-sm mb-8">Parlez-nous de vous pour personnaliser votre analyse.</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Âge</label>
                  <input type="number" placeholder="ex: 35" className="premium-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Genre</label>
                  <div className="flex gap-3">
                    {["Homme", "Femme", "Autre"].map((g) => (
                      <button key={g} className="chip-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer rounded-lg">{g}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Situation familiale</label>
                  <select className="premium-input">
                    <option>Célibataire</option>
                    <option>Marié(e)</option>
                    <option>Divorcé(e)</option>
                    <option>Veuf/Veuve</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre d'enfants</label>
                  <input type="number" placeholder="0" className="premium-input" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Travail & logement</h2>
              <p className="text-muted-foreground text-sm mb-8">Votre situation professionnelle et résidentielle.</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Statut professionnel</label>
                  <select className="premium-input">
                    <option>Salarié</option>
                    <option>Indépendant</option>
                    <option>Sans emploi</option>
                    <option>Étudiant</option>
                    <option>Retraité</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Revenu mensuel approximatif (NIS)</label>
                  <input type="number" placeholder="ex: 12000" className="premium-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type de logement</label>
                  <select className="premium-input">
                    <option>Locataire</option>
                    <option>Propriétaire</option>
                    <option>Hébergé</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Situations spéciales</h2>
              <p className="text-muted-foreground text-sm mb-8">Indiquez si des situations particulières s'appliquent à vous.</p>
              <div className="space-y-4">
                {[
                  "Nouvel immigrant (moins de 10 ans)",
                  "Situation de handicap",
                  "Famille monoparentale",
                  "Ancien combattant / service militaire",
                  "Victime de violences",
                  "Personne âgée (65+)",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Récapitulatif</h2>
              <p className="text-muted-foreground text-sm mb-8">Vérifiez vos informations avant de lancer l'analyse.</p>
              <div className="space-y-4">
                {[
                  { label: "Âge", value: "35 ans" },
                  { label: "Situation familiale", value: "Marié(e)" },
                  { label: "Enfants", value: "2" },
                  { label: "Statut professionnel", value: "Salarié" },
                  { label: "Revenu mensuel", value: "12 000 NIS" },
                  { label: "Logement", value: "Locataire" },
                  { label: "Situations spéciales", value: "Nouvel immigrant" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-border/60 last:border-0">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-10 pt-6 border-t border-border/60">
            <Button variant="ghost" onClick={prev} disabled={currentStep === 0}>
              <ArrowLeft className="w-4 h-4" /> Précédent
            </Button>
            <Button variant="default" onClick={next}>
              {currentStep === steps.length - 1 ? "Lancer l'analyse" : "Suivant"} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ResidentForm;
