import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  label?: string;
  className?: string;
  variant?: "default" | "success" | "warning";
}

const ProgressBar = ({ value, label, className, variant = "default" }: ProgressBarProps) => (
  <div className={cn("w-full", className)}>
    {label && (
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-semibold text-muted-foreground">{Math.round(value)}%</span>
      </div>
    )}
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500",
          variant === "success" ? "bg-success" : variant === "warning" ? "bg-warning" : "bg-primary"
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
