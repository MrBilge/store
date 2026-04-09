"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";

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

  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  useEffect(() => {
    setMinPrice(priceRange[0]);
    setMaxPrice(priceRange[1]);
  }, [searchParams]);

  // 🔥 PARAM GÜNCELLEME (STABLE)
  const updateParams = (key: string, values: string[]) => {
    const params = new URLSearchParams(window.location.search);

    if (values.length > 0) {
      params.set(key, values.join(","));
    } else {
      params.delete(key);
    }

    params.delete("page");

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const toggle = (key: string, value: string) => {
    const current = getArray(key);

    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    updateParams(key, updated);
  };

  const handlePrice = () => {
    const params = new URLSearchParams(window.location.search);

    if (minPrice && maxPrice) {
      params.set("price", `${minPrice}-${maxPrice}`);
    } else {
      params.delete("price");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleRating = (rate: number) => {
    const params = new URLSearchParams(window.location.search);

    if (selectedRating === rate.toString()) {
      params.delete("rating");
    } else {
      params.set("rating", rate.toString());
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      {/* MARKA */}
      <div>
        <h3 className="font-semibold">Marka</h3>
        {brands.map((brand) => (
          <label key={brand} className="flex gap-2 cursor-pointer">
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
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={handlePrice}
            className="border p-1 w-20 bg-white rounded-lg"
          />

          <input
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={handlePrice}
            className="border p-1 w-20 bg-white rounded-lg"
          />

          <button
            onClick={handlePrice}
            className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
          >
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* GPU */}
      <div>
        <h3 className="font-semibold">Ekran Kartı</h3>
        {gpus.map((gpu) => (
          <label key={gpu} className="flex gap-2 cursor-pointer">
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
          <label key={cpu} className="flex gap-2 cursor-pointer">
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
            className={`block text-left cursor-pointer ${
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
