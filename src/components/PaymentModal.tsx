"use client";

import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { BasketItem } from "@/context/BasketContext";
import type { PersonFormData } from "./PersonForm";
import type { AddressFormData } from "./AdressForm";

type Props = {
  open: boolean;
  person: PersonFormData;
  address: AddressFormData;
  basket: BasketItem[];
  onClose: () => void;
  onPaymentComplete: () => void;
};

export default function PaymentModal({
  open,
  person,
  address,
  basket,
  onClose,
  onPaymentComplete,
}: Props) {
  const [paymentUrl, setPaymentUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setPaymentUrl("");
      setError("");
      return;
    }

    const initializePayment = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/iyzico/initialize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            person,
            address,
            basket: basket.map(({ id, quantity }) => ({ id, quantity })),
          }),
        });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Ödeme ekranı başlatılamadı.");
        }

        setPaymentUrl(`${result.paymentPageUrl}&iframe=true`);
      } catch (paymentError) {
        setError(
          paymentError instanceof Error
            ? paymentError.message
            : "Ödeme ekranı başlatılamadı.",
        );
      } finally {
        setLoading(false);
      }
    };

    initializePayment();
  }, [open, person, address, basket]);

  useEffect(() => {
    if (!open) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (event.data?.type === "iyzico-payment-result") {
        if (event.data.success) {
          onPaymentComplete();
        } else {
          setError(event.data.message || "Ödeme tamamlanamadı.");
        }
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("message", handleMessage);
    document.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose, onPaymentComplete]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-title"
    >
      <div className="flex h-[85vh] w-full max-w-2xl flex-col rounded-xl bg-white p-5 shadow-2xl">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h2 id="payment-title" className="text-xl font-semibold">
              iyzico Güvenli Ödeme
            </h2>
            <p className="text-sm text-gray-500">Sandbox/test işlemi</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Ödeme penceresini kapat"
            className="rounded p-1 hover:bg-gray-100"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {loading && (
          <div className="flex flex-1 items-center justify-center text-gray-500">
            iyzico ödeme ekranı hazırlanıyor...
          </div>
        )}

        {error && (
          <div className="my-auto rounded-lg bg-red-50 p-4 text-center text-red-700">
            {error}
          </div>
        )}

        {paymentUrl && !error && (
          <iframe
            title="iyzico ödeme formu"
            src={paymentUrl}
            className="min-h-0 flex-1 rounded border"
            allow="payment"
          />
        )}
      </div>
    </div>
  );
}
