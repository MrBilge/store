"use client";

import Card from "@/components/Card";
import { normalize } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

export default function Content() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const query = normalize(searchValue);

  const filteredData = query
    ? products.filter((item) => normalize(item.name).includes(query))
    : products;

  return <Card data={filteredData} />;
}
