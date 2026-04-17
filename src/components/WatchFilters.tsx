"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";

const brands = ["apple", "samsung", "xiaomi", "huawei"];
const colors = ["black", "silver", "gold"];
const ratings = [4, 3, 2];

export default function WatchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getArray = (key: string) => searchParams.get(key)?.split(",") || [];

  const selectedBrands = getArray("brand");
  const selectedColors = getArray("color");
  const selectedRating = searchParams.get("rating") || "";

  const priceRange = searchParams.get("price")?.split("-") || ["", ""];

  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  useEffect(() => {
    setMinPrice(priceRange[0]);
    setMaxPrice(priceRange[1]);
  }, [searchParams]);

  const updateParams = (key: string, values: string[]) => {
    const params = new URLSearchParams(window.location.search);

    values.length ? params.set(key, values.join(",")) : params.delete(key);

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

    selectedRating === rate.toString()
      ? params.delete("rating")
      : params.set("rating", rate.toString());

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold">Marka</h3>
        {brands.map((brand) => (
          <label key={brand} className="flex gap-2">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggle("brand", brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold">Renk</h3>
        {colors.map((color) => (
          <label key={color} className="flex gap-2">
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => toggle("color", color)}
            />
            {color}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold">Fiyat</h3>
        <div className="flex gap-2 mt-2">
          <input
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={handlePrice}
            className="border p-1 w-20 rounded-lg"
          />
          <input
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={handlePrice}
            className="border p-1 w-20 rounded-lg"
          />
          <button
            onClick={handlePrice}
            className="p-2 bg-orange-500 rounded-lg"
          >
            <SearchIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

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
