"use client";

import { useRouter, useSearchParams } from "next/navigation";

const brands = ["apple", "dell", "lenovo", "asus", "hp"];
const gpus = ["rtx3050", "rtx3060", "mx450"];
const cpus = ["i5", "i7", "ryzen5", "ryzen7"];
const ratings = [4, 3, 2];

export default function LaptopFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getArray = (key: string) => searchParams.get(key)?.split(",") || [];

  const selectedBrands = getArray("brand");
  const selectedGpu = getArray("gpu");
  const selectedCpu = getArray("cpu");
  const selectedRating = searchParams.get("rating") || "";

  const priceRange = searchParams.get("price")?.split("-") || ["", ""];

  // 🔥 ORTAK PARAM GÜNCELLEME
  const updateParams = (key: string, values: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (values.length > 0) {
      params.set(key, values.join(","));
    } else {
      params.delete(key);
    }

    params.delete("page");

    // ✅ BURASI KRİTİK
    router.replace(`?${params.toString()}`, { scroll: false });
    router.refresh();
  };

  const toggle = (key: string, value: string) => {
    const current = getArray(key);

    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    updateParams(key, updated);
  };

  const handlePrice = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (min && max) {
      params.set("price", `${min}-${max}`);
    } else {
      params.delete("price");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
    router.refresh();
  };

  const handleRating = (rate: number) => {
    const params = new URLSearchParams(searchParams.toString());

    // toggle gibi çalışsın istiyorsan:
    if (selectedRating === rate.toString()) {
      params.delete("rating");
    } else {
      params.set("rating", rate.toString());
    }

    router.replace(`?${params.toString()}`, { scroll: false });
    router.refresh();
  };

  return (
    <div className="space-y-6  ">
      {/* MARKA */}
      <div className="w-full">
        <h3 className="font-semibold">Marka</h3>
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex gap-2 text-slate-700 font-semibold cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggle("brand", brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* FİYAT */}
      <div>
        <h3 className="font-semibold">Fiyat</h3>
        <div className="flex gap-2 mt-2">
          <input
            placeholder="Min"
            defaultValue={priceRange[0]}
            onBlur={(e) => handlePrice(e.target.value, priceRange[1])}
            className="border p-1 w-20 bg-white rounded-lg placeholder:pl-2"
          />

          <input
            placeholder="Max"
            defaultValue={priceRange[1]}
            onBlur={(e) => handlePrice(priceRange[0], e.target.value)}
            className="border p-1 w-20 bg-white rounded-lg placeholder:pl-2"
          />
        </div>
      </div>

      {/* GPU */}
      <div>
        <h3 className="font-semibold">Ekran Kartı</h3>
        {gpus.map((gpu) => (
          <label
            key={gpu}
            className="flex gap-2 text-slate-700 font-semibold cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedGpu.includes(gpu)}
              onChange={() => toggle("gpu", gpu)}
            />
            {gpu}
          </label>
        ))}
      </div>

      {/* CPU */}
      <div>
        <h3 className="font-semibold">İşlemci</h3>
        {cpus.map((cpu) => (
          <label
            key={cpu}
            className="flex gap-2 text-slate-700 font-semibold cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCpu.includes(cpu)}
              onChange={() => toggle("cpu", cpu)}
            />
            {cpu}
          </label>
        ))}
      </div>

      {/* RATING */}
      <div>
        <h3 className="font-semibold">Değerlendirme</h3>
        {ratings.map((rate) => (
          <button
            key={rate}
            onClick={() => handleRating(rate)}
            className={`block text-left text-slate-700 cursor-pointer ${
              selectedRating === rate.toString() ? "font-bold" : ""
            }`}
          >
            ⭐ {rate} ve üzeri
          </button>
        ))}
      </div>
    </div>
  );
}
