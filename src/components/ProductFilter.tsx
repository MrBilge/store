"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { FilterItem } from "@/data/urlFilterData";

type ProductFilterProps = {
  filters: FilterItem[];
};

export default function ProductFilter({ filters }: ProductFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const priceParam = searchParams.get("price") || "";
  const [initialMinPrice = "", initialMaxPrice = ""] = priceParam.split("-");
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  useEffect(() => {
    const [nextMinPrice = "", nextMaxPrice = ""] = priceParam.split("-");
    setMinPrice(nextMinPrice);
    setMaxPrice(nextMaxPrice);
  }, [priceParam]);

  const getArray = (key: string) => searchParams.get(key)?.split(",") || [];

  const updateParams = (key: string, values: string[]) => {
    const params = new URLSearchParams(window.location.search);

    if (values.length) {
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

  const handleRating = (key: string, rate: number) => {
    const params = new URLSearchParams(window.location.search);

    const selected = searchParams.get(key);

    if (selected === rate.toString()) {
      params.delete(key);
    } else {
      params.set(key, rate.toString());
    }

    router.replace(`?${params.toString()}`, { scroll: false });
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

  return (
    <div className="space-y-6">
      {filters.map((filter) => {
        // CHECKBOX
        if (filter.type === "checkbox") {
          const selected = getArray(filter.key);

          return (
            <div key={filter.key}>
              <h3 className="font-semibold">{filter.title}</h3>

              {filter.options.map((opt) => (
                <label key={opt.value} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt.value)}
                    onChange={() => toggle(filter.key, opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          );
        }

        // PRICE
        if (filter.type === "price") {
          return (
            <div key="price">
              <h3 className="font-semibold">Fiyat</h3>
              <div className="flex gap-2 mt-2">
                <input
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  onBlur={handlePrice}
                  className="border p-1 w-20"
                />
                <input
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  onBlur={handlePrice}
                  className="border p-1 w-20"
                />
                <button onClick={handlePrice}>
                  <SearchIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        }

        // RATING
        if (filter.type === "rating") {
          const selected = searchParams.get(filter.key) || "";

          return (
            <div key={filter.key}>
              <h3>{filter.title}</h3>

              {filter.options.map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleRating(filter.key, rate)}
                  className={selected === rate.toString() ? "font-bold" : ""}
                >
                  ⭐ {rate}+
                </button>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
