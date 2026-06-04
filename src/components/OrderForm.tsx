"use client";
import { useState } from "react";
import OrderStepper from "./OrderStepper";
import PersonForm from "./PersonForm";
import AddressForm from "./AdressForm";
export default function OrderForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-[1000px]  p-6 space-y-6 bg-white rounded-lg ">
      <OrderStepper currentStep={currentStep} />

      {currentStep === 1 && <PersonForm onNext={() => setCurrentStep(2)} />}

      {currentStep === 2 && (
        <AddressForm
          onBack={() => setCurrentStep(1)}
          onSubmit={() => alert("Sipariş tamamlandı")}
        />
      )}
    </div>
  );

  return;
}
