"use client";

import { useSearchParams } from "next/navigation";
import LaptopFilters from "./LaptopFilters";

export default function FilterBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  const isLaptopSearch =
    search.includes("laptop") || search.includes("bilgisayar");

  return (
    <div className=" my-20 ml-10">{isLaptopSearch && <LaptopFilters />}</div>
  );
}
