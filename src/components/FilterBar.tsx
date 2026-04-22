"use client";

import { useSearchParams } from "next/navigation";

import ProductFilter from "./ProductFilter";
import {
  foodFilters,
  tvFilters,
  laptopFilters,
  shoeFilters,
  watchFilters,
} from "@/data/urlFilterData";

export default function FilterBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const filterMap = [
    {
      check: (s: string) => s.includes("laptop"),
      component: <ProductFilter filters={laptopFilters} />,
    },
    {
      check: (s: string) => s.includes("tv") || s.includes("televizyon"),
      component: <ProductFilter filters={tvFilters} />,
    },
    {
      check: (s: string) => s.includes("ayakkabi") || s.includes("ayakkabı"),
      component: <ProductFilter filters={shoeFilters} />,
    },
    {
      check: (s: string) => s.includes("saat"),
      component: <ProductFilter filters={watchFilters} />,
    },
    {
      check: (s: string) =>
        s.includes("gida") ||
        s.includes("gıda") ||
        s.includes("market") ||
        s.includes("yiyecek") ||
        s.includes("içecek") ||
        s.includes("icecek"),
      component: <ProductFilter filters={foodFilters} />,
    },
  ];

  const matched = filterMap.find((f) => f.check(search));

  return <div className="my-20 ml-10">{matched?.component || null}</div>;
}
