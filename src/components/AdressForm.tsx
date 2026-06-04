type Props = {
  onBack: () => void;
  onSubmit: () => void;
};

export default function AddressForm({ onBack, onSubmit }: Props) {
  return (
    <div className="space-y-2 w-full">
      <h2 className="text-lg font-semibold">Adres Bilgileri</h2>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Şehir"
          className="w-max border p-2 rounded "
        />

        <textarea placeholder="Adres" className="w-1/3 border p-2 rounded" />
      </div>

      <div className="flex gap-3 mt-10">
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Geri
        </button>

        <button
          onClick={onSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Siparişi Tamamla
        </button>
      </div>
    </div>
  );
}
