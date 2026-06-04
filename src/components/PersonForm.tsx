type Props = {
  onNext: () => void;
};

export default function PersonForm({ onNext }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Kişi Bilgileri</h2>

      <div className="flex flex-col  space-y-2">
        <input
          type="text"
          placeholder="Ad Soyad"
          className="w-max border p-2 rounded"
        />

        <input
          type="email"
          placeholder="E-posta"
          className="w-max border p-2 rounded"
        />
      </div>

      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-5"
      >
        İleri
      </button>
    </div>
  );
}
