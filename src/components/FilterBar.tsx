"use client";

import { useSearchParams } from "next/navigation";
import LaptopFilters from "./LaptopFilters";

export default function FilterBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase() || "";

  const isLaptopSearch =
    search.includes("laptop") || search.includes("bilgisayar");

  return (
    <div className="no-scrollbar rounded-lg flex flex-colh-full my-20 ml-30 overflow-y-auto">
      {isLaptopSearch && <LaptopFilters />}
    </div>
  );
}