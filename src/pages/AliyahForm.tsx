import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import Stepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AliyahForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const steps = [t("aform.step1"), t("aform.step2"), t("aform.step3"), t("aform.step4")];

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else navigate("/aliyah/resultats");
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
              <h2 className="text-2xl font-bold text-foreground mb-2">{t("aform.step1")}</h2>
              <p className="text-muted-foreground text-sm mb-8">{t("aform.step1.subtitle")}</p>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("form.age")}</label>
                    <input type="number" placeholder="32" className="premium-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("aform.country")}</label>
                    <select className="premium-input">
                      <option>France</option>
                      <option>Belgique</option>
                      <option>Canada</option>
                      <option>Suisse</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("aform.year")}</label>
                  <select className="premium-input">
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>Non déterminé</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("aform.hebrew")}</label>
                  <div className="flex flex-wrap gap-2">
                    {["Aucun", "Débutant", "Intermédiaire", "Avancé", "Courant"].map((l) => (
                      <button key={l} className="chip-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer rounded-lg text-sm">{l}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.familyStatus")}</label>
                  <select className="premium-input">
                    <option>Célibataire</option>
                    <option>Marié(e)</option>
                    <option>En couple</option>
                    <option>Divorcé(e)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.children")}</label>
                  <input type="number" placeholder="0" className="premium-input" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{t("aform.step2")}</h2>
              <p className="text-muted-foreground text-sm mb-8">{t("aform.step2.subtitle")}</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("aform.profession")}</label>
                  <input type="text" placeholder="Ingénieur" className="premium-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("aform.sector")}</label>
                  <select className="premium-input">
                    <option>Tech / IT</option>
                    <option>Santé</option>
                    <option>Éducation</option>
                    <option>Finance</option>
                    <option>Commerce</option>
                    <option>Artisanat</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("aform.city")}</label>
                  <select className="premium-input">
                    <option>Tel Aviv</option>
                    <option>Jérusalem</option>
                    <option>Haïfa</option>
                    <option>Netanya</option>
                    <option>Ashdod</option>
                    <option>Beer Sheva</option>
                    <option>Non déterminé</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{t("aform.step3")}</h2>
              <p className="text-muted-foreground text-sm mb-8">{t("aform.step3.subtitle")}</p>
              <div className="space-y-6">
                {[
                  "Biens immobiliers à l'étranger",
                  "Comptes bancaires à l'étranger",
                  "Retraite / pension à l'étranger",
                  "Revenus locatifs à l'étranger",
                  "Passeport américain (US person)",
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
              <h2 className="text-2xl font-bold text-foreground mb-2">{t("form.summary")}</h2>
              <p className="text-muted-foreground text-sm mb-8">{t("aform.summary.subtitle")}</p>
              <div className="space-y-4">
                {[
                  { label: "Âge", value: "32 ans" },
                  { label: "Pays d'origine", value: "France" },
                  { label: "Aliyah prévue", value: "2026" },
                  { label: "Hébreu", value: "Débutant" },
                  { label: "Situation familiale", value: "Marié(e), 1 enfant" },
                  { label: "Profession", value: "Ingénieur logiciel — Tech / IT" },
                  { label: "Ville cible", value: "Tel Aviv" },
                  { label: "Patrimoine", value: "Bien immobilier, Retraite" },
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
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> {t("form.previous")}
            </Button>
            <Button variant="default" onClick={next}>
              {currentStep === steps.length - 1 ? t("form.submit.aliyah") : t("form.next")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AliyahForm;
