"use client";

import { FormEvent, useState } from "react";

type Props = {
  onNext: (data: PersonFormData) => void;
};

export type PersonFormData = {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  identityNumber: string;
};

export default function PersonForm({ onNext }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPhoneValid = /^\d{10,11}$/.test(phone.replace(/\D/g, ""));
  const isFormValid =
    fullName.trim().length > 0 &&
    isEmailValid &&
    isPhoneValid &&
    birthDate.length > 0 &&
    /^\d{11}$/.test(identityNumber);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      onNext({ fullName, email, phone, birthDate, identityNumber });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">Kişi Bilgileri</h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="tel"
          placeholder="Telefon (5XX XXX XX XX)"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="date"
          aria-label="Doğum tarihi"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="text"
          inputMode="numeric"
          maxLength={11}
          placeholder="T.C. Kimlik Numarası"
          value={identityNumber}
          onChange={(event) =>
            setIdentityNumber(event.target.value.replace(/\D/g, ""))
          }
          required
          className="w-1/2 border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`px-4 py-2 rounded mt-5 text-white transition-colors ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-500 cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        İleri
      </button>
    </form>
  );
}
