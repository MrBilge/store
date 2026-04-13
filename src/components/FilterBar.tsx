"use client";

import { useSearchParams } from "next/navigation";
import LaptopFilters from "./LaptopFilters";
import ShoeFilters from "./ShoeFilters";

export default function FilterBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  const isLaptopSearch =
    search.includes("laptop") || search.includes("bilgisayar");
  const isShoeSearch =
    search.includes("ayakkabi") || search.includes("ayakkabı");

  return (
    <div className=" my-20 ml-10">
      {isLaptopSearch ? (
        <LaptopFilters />
      ) : isShoeSearch ? (
        <ShoeFilters />
      ) : null}
    </div>
  );
}
