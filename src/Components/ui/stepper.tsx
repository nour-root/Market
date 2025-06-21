import { cn } from "@/lib/utils";

type StepperProps = {
  steps: string[];
  currentStep: number; // start from 0
  onStepClick?: (index: number) => void;
};

export function Stepper({ currentStep, steps, onStepClick }: StepperProps) {
  return (
    <div className="flex items-center justify-center w-full">
      {steps.map((label, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        return (
          <div key={label} className="flex items-center">
            {/* circule */}
            <button
              onClick={() => onStepClick?.(index)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all cursor-pointer",
                isActive
                  ? "bg-primary text-white"
                  : isCompleted
                  ? "text-white bg-primary"
                  : "bg-primary/10 hover:bg-primary/20 text-primary"
              )}
            >
              {index + 1}. {label}
            </button>
            {/* line between the steps */}
            {index !== steps.length - 1 && (
              <div
                className={cn(
                  "w-8 h-1 transition-all",
                  index < currentStep ? "bg-primary" : "bg-rose-100"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
