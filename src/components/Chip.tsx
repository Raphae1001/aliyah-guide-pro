import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "accent" | "muted";
  className?: string;
}

const variantClasses = {
  primary: "bg-secondary text-secondary-foreground",
  success: "bg-success-light text-success",
  warning: "bg-warning-light text-warning",
  accent: "bg-accent text-accent-foreground",
  muted: "bg-muted text-muted-foreground",
};

const Chip = ({ children, variant = "primary", className }: ChipProps) => (
  <span className={cn("chip", variantClasses[variant], className)}>
    {children}
  </span>
);

export default Chip;
