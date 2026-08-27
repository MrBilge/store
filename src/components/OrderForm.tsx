"use client";
import { useState } from "react";
import OrderStepper from "./OrderStepper";
import PersonForm from "./PersonForm";
import AddressForm from "./AdressForm";
import PaymentModal from "./PaymentModal";
import type { PersonFormData } from "./PersonForm";
import type { AddressFormData } from "./AdressForm";
import { useBasket } from "@/context/BasketContext";
export default function OrderForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [person, setPerson] = useState<PersonFormData | null>(null);
  const [address, setAddress] = useState<AddressFormData | null>(null);
  const { basket } = useBasket();

  return (
    <div className="w-[1000px]  p-6 space-y-6 bg-white rounded-lg ">
      <OrderStepper currentStep={currentStep} />

      {currentStep === 1 && (
        <PersonForm
          onNext={(personData) => {
            setPerson(personData);
            setCurrentStep(2);
          }}
        />
      )}

      {currentStep === 2 && (
        <AddressForm
          onBack={() => setCurrentStep(1)}
          onSubmit={(addressData) => {
            setAddress(addressData);
            setPaymentModalOpen(true);
          }}
        />
      )}

      {person && address && (
        <PaymentModal
          open={paymentModalOpen}
          person={person}
          address={address}
          basket={basket}
          onClose={() => setPaymentModalOpen(false)}
          onPaymentComplete={() => {
            setPaymentModalOpen(false);
            alert("Sandbox ödemesi başarıyla tamamlandı");
          }}
        />
      )}
    </div>
  );
}
