import { Stepper } from "./ui/stepper";

export default function StepperProgress({
  currentStep,
  onStepClick,
  steps,
}: {
  currentStep: number;
  onStepClick: (index: number) => void;
  steps: string[];
}) {
  return (
    <div className="w-full py-8 max-lg:hidden">
      <div className="flex items-center justify-center gap-12">
        <Stepper
          currentStep={currentStep}
          onStepClick={onStepClick}
          steps={steps}
        />
      </div>
    </div>
  );
}
