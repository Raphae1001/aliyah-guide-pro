import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => (
  <div className="w-full">
    <div className="flex items-center justify-between mb-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-1 last:flex-initial">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                i < currentStep
                  ? "bg-success text-success-foreground"
                  : i === currentStep
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
            <span
              className={cn(
                "text-xs mt-2 text-center hidden sm:block max-w-[100px]",
                i <= currentStep ? "text-foreground font-medium" : "text-muted-foreground"
              )}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 h-0.5 mx-3 rounded-full transition-all",
                i < currentStep ? "bg-success" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Stepper;
