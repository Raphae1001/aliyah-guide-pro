import { Loader2 } from "lucide-react";

const LoadingState = ({ message = "Chargement en cours..." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
    <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
    <p className="text-muted-foreground text-sm">{message}</p>
  </div>
);

const EmptyState = ({
  title = "Aucun élément",
  description = "Il n'y a rien à afficher pour le moment.",
  icon,
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}) => (
  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
    {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
    <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm text-center max-w-md">{description}</p>
  </div>
);

const ErrorState = ({
  title = "Une erreur est survenue",
  description = "Veuillez réessayer ultérieurement.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) => (
  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
      <span className="text-destructive text-xl">!</span>
    </div>
    <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm text-center max-w-md mb-4">{description}</p>
    {onRetry && (
      <button onClick={onRetry} className="text-primary text-sm font-medium hover:underline">
        Réessayer
      </button>
    )}
  </div>
);

const SuccessState = ({
  title = "Opération réussie",
  description = "Tout s'est bien passé.",
}: {
  title?: string;
  description?: string;
}) => (
  <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
    <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center mb-4">
      <span className="text-success text-xl">✓</span>
    </div>
    <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm text-center max-w-md">{description}</p>
  </div>
);

export { LoadingState, EmptyState, ErrorState, SuccessState };
