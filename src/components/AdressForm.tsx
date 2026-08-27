"use client";

import { FormEvent, useState } from "react";

type Props = {
  onBack: () => void;
  onSubmit: (data: AddressFormData) => void;
};

export type AddressFormData = {
  addressTitle: string;
  city: string;
  district: string;
  postalCode: string;
  address: string;
};

export default function AddressForm({ onBack, onSubmit }: Props) {
  const [addressTitle, setAddressTitle] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");

  const isFormValid =
    addressTitle.trim().length > 0 &&
    city.trim().length > 0 &&
    district.trim().length > 0 &&
    /^\d{5}$/.test(postalCode) &&
    address.trim().length >= 10;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      onSubmit({ addressTitle, city, district, postalCode, address });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 w-full">
      <h2 className="text-lg font-semibold">Adres Bilgileri</h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Adres Başlığı (Ev, İş vb.)"
          value={addressTitle}
          onChange={(event) => setAddressTitle(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Şehir"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="text"
          placeholder="İlçe"
          value={district}
          onChange={(event) => setDistrict(event.target.value)}
          required
          className="w-1/2 border p-2 rounded"
        />

        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="Posta Kodu"
          value={postalCode}
          onChange={(event) =>
            setPostalCode(event.target.value.replace(/\D/g, ""))
          }
          required
          className="w-1/2 border p-2 rounded"
        />

        <textarea
          placeholder="Açık Adres"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
          rows={4}
          className="w-1/2 border p-2 rounded resize-none"
        />
      </div>

      <div className="flex gap-3 mt-10">
        <button type="button" onClick={onBack} className="border px-4 py-2 rounded">
          Geri
        </button>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`text-white px-4 py-2 rounded transition-colors ${
            isFormValid
              ? "bg-green-600 hover:bg-green-500 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Siparişi Tamamla
        </button>
      </div>
    </form>
  );
}
