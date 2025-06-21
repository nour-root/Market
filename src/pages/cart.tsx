import { useState } from "react";
import StepperProgress from "@/Components/stepperProgress";
import CartPage from "@/Components/cartPage";
import Checkout from "@/Components/checkout";
import Payment from "@/Components/payment";
export default function Cart() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps: string[] = ["Cart", "Details", "Payment"];
  const disPlayStep = (step: number) => {
    switch (step) {
      case 0:
        return <CartPage onStepClick={setCurrentStep} />;
      case 1:
        return <Checkout onStepClick={setCurrentStep} />;
      case 2:
        return <Payment />;
      default:
    }
  };
  return (
    <div className="py-5 px-4 h-auto max-lg:relative max-lg:z-10 bg-backGround text-[#2B3445]">
      <StepperProgress
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => {
          setCurrentStep(index);
        }}
      />
      {disPlayStep(currentStep)}
    </div>
  );
}
