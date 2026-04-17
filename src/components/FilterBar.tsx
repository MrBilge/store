"use client";

import { useSearchParams } from "next/navigation";
import LaptopFilters from "./LaptopFilters";
import ShoeFilters from "./ShoeFilters";
import WatchFilters from "./WatchFilters";
import FoodFilters from "./FoodFilters";

export default function FilterBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  const isLaptopSearch =
    search.includes("laptop") || search.includes("bilgisayar");
  const isShoeSearch =
    search.includes("ayakkabi") || search.includes("ayakkabı");

  const isWatchSearch = search.includes("saat");

  const isFoodSearch =
    search.includes("gida") ||
    search.includes("gıda") ||
    search.includes("market") ||
    search.includes("yiyecek") ||
    search.includes("içecek") ||
    search.includes("icecek");

  return (
    <div className=" my-20 ml-10">
      {isLaptopSearch ? (
        <LaptopFilters />
      ) : isShoeSearch ? (
        <ShoeFilters />
      ) : isWatchSearch ? (
        <WatchFilters />
      ) : isFoodSearch ? (
        <FoodFilters />
      ) : null}
    </div>
  );
}
