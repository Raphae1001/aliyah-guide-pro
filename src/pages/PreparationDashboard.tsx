import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import ProgressBar from "@/components/ProgressBar";
import Chip from "@/components/Chip";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, AlertTriangle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Task {
  id: string;
  title: string;
  description: string;
  phase: "before" | "after";
  status: "done" | "in-progress" | "todo" | "urgent";
  aiGenerated?: boolean;
}

const mockTasks: Task[] = [
  { id: "1", title: "Ouvrir un dossier Aliyah auprès de l'Agence Juive", description: "Contactez l'Agence Juive pour ouvrir votre dossier officiel d'Aliyah.", phase: "before", status: "done" },
  { id: "2", title: "Réunir les documents d'état civil", description: "Actes de naissance, mariage, livret de famille — apostillés.", phase: "before", status: "done" },
  { id: "3", title: "Rendez-vous consulaire", description: "Prenez rendez-vous au consulat pour l'entretien Aliyah.", phase: "before", status: "in-progress" },
  { id: "4", title: "Ouvrir un compte bancaire en Israël", description: "Ouvrez un compte à distance ou lors d'un voyage préparatoire.", phase: "before", status: "urgent" },
  { id: "5", title: "Trouver un logement temporaire", description: "Centre d'absorption ou location courte durée pour les premiers mois.", phase: "before", status: "todo" },
  { id: "6", title: "Organiser le déménagement", description: "Comparez les offres de déménagement international et préparez vos cartons.", phase: "before", status: "todo" },
  { id: "7", title: "Préparer la clôture fiscale en France", description: "Consultez un fiscaliste pour anticiper les obligations fiscales.", phase: "before", status: "todo", aiGenerated: true },
  { id: "8", title: "S'inscrire au Bituah Leumi", description: "Inscription obligatoire dès l'arrivée pour accéder aux prestations sociales.", phase: "after", status: "todo" },
  { id: "9", title: "Choisir une Kupat Holim", description: "Comparez les 4 caisses d'assurance maladie et inscrivez-vous.", phase: "after", status: "todo" },
  { id: "10", title: "S'inscrire à l'Oulpan", description: "5 mois de cours d'hébreu intensifs gratuits.", phase: "after", status: "todo" },
  { id: "11", title: "Ouvrir un dossier Sal Klita", description: "Déposez votre demande de panier d'absorption auprès du Misrad HaKlita.", phase: "after", status: "todo", aiGenerated: true },
  { id: "12", title: "Demander l'aide au loyer Olim", description: "Déposez votre demande auprès du Misrad HaShikun.", phase: "after", status: "todo", aiGenerated: true },
];

const PreparationDashboard = () => {
  const [activePhase, setActivePhase] = useState<"before" | "after">("before");
  const { t } = useLanguage();

  const beforeTasks = mockTasks.filter((t) => t.phase === "before");
  const afterTasks = mockTasks.filter((t) => t.phase === "after");
  const activeTasks = activePhase === "before" ? beforeTasks : afterTasks;

  const doneBefore = beforeTasks.filter((t) => t.status === "done").length;
  const doneAfter = afterTasks.filter((t) => t.status === "done").length;
  const totalDone = doneBefore + doneAfter;
  const totalTasks = mockTasks.length;
  const globalProgress = Math.round((totalDone / totalTasks) * 100);

  const urgentTasks = activeTasks.filter((t) => t.status === "urgent");
  const inProgressTasks = activeTasks.filter((t) => t.status === "in-progress");
  const todoTasks = activeTasks.filter((t) => t.status === "todo");
  const doneTasks = activeTasks.filter((t) => t.status === "done");

  const statusIcon = (status: Task["status"]) => {
    switch (status) {
      case "done": return <CheckCircle2 className="w-5 h-5 text-success" />;
      case "in-progress": return <Clock className="w-5 h-5 text-primary" />;
      case "urgent": return <AlertTriangle className="w-5 h-5 text-warning" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <div className={cn(
      "premium-card p-5 flex items-start gap-4",
      task.status === "urgent" && "border-warning/30 bg-warning-light/30"
    )}>
      <div className="mt-0.5">{statusIcon(task.status)}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h4 className="font-medium text-foreground text-sm">{task.title}</h4>
          {task.aiGenerated && (
            <span className="inline-flex items-center gap-1 text-xs text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" /> IA
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{task.description}</p>
      </div>
      {task.status === "todo" && (
        <Button variant="outline" size="sm" className="flex-shrink-0">{t("prep.start")}</Button>
      )}
      {task.status === "in-progress" && (
        <Button variant="default" size="sm" className="flex-shrink-0">{t("prep.continue")}</Button>
      )}
      {task.status === "urgent" && (
        <Button variant="default" size="sm" className="flex-shrink-0 bg-warning hover:bg-warning/90 text-warning-foreground">{t("prep.urgent.btn")}</Button>
      )}
    </div>
  );

  return (
    <AppLayout>
      <div className="section-container py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("prep.title")}</h1>
            <p className="text-muted-foreground text-lg">{t("prep.subtitle")}</p>
          </div>

          {/* Global progress */}
          <div className="premium-card p-6 mb-8 animate-fade-in">
            <ProgressBar value={globalProgress} label={t("prep.global")} variant="success" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-foreground">{doneBefore}/{beforeTasks.length}</p>
                <p className="text-xs text-muted-foreground">{t("prep.before")}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-foreground">{doneAfter}/{afterTasks.length}</p>
                <p className="text-xs text-muted-foreground">{t("prep.after")}</p>
              </div>
            </div>
          </div>

          {/* Phase toggle */}
          <div className="flex gap-2 mb-8">
            {(["before", "after"] as const).map((phase) => (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                  activePhase === phase
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {phase === "before" ? t("prep.before") : t("prep.after")}
              </button>
            ))}
          </div>

          {/* Task sections */}
          <div className="space-y-8 animate-fade-in">
            {urgentTasks.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <h3 className="font-semibold text-foreground">{t("prep.urgent")}</h3>
                  <Chip variant="warning">{urgentTasks.length}</Chip>
                </div>
                <div className="space-y-3">
                  {urgentTasks.map((t) => <TaskCard key={t.id} task={t} />)}
                </div>
              </div>
            )}

            {inProgressTasks.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{t("prep.inprogress")}</h3>
                  <Chip variant="primary">{inProgressTasks.length}</Chip>
                </div>
                <div className="space-y-3">
                  {inProgressTasks.map((t) => <TaskCard key={t.id} task={t} />)}
                </div>
              </div>
            )}

            {todoTasks.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Circle className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-foreground">{t("prep.todo")}</h3>
                  <Chip variant="muted">{todoTasks.length}</Chip>
                </div>
                <div className="space-y-3">
                  {todoTasks.map((t) => <TaskCard key={t.id} task={t} />)}
                </div>
              </div>
            )}

            {doneTasks.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <h3 className="font-semibold text-foreground">{t("prep.done")}</h3>
                  <Chip variant="success">{doneTasks.length}</Chip>
                </div>
                <div className="space-y-3">
                  {doneTasks.map((t) => <TaskCard key={t.id} task={t} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PreparationDashboard;
