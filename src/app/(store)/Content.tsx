"use client";

import Card from "@/components/Card";
import { normalize } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useBasket } from "@/context/BasketContext";

const data = [
  { id: 1, name: "Portakal Vazo", price: 500, src: "/assets/dekoratif.jpg" },
  { id: 2, name: "ordakal Vazo", price: 300, src: "/assets/dekoratif.jpg" },
];

export default function Content() {
  const { basket } = useBasket();

  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const query = normalize(searchValue);

  const filteredData = query
    ? data.filter((item) => normalize(item.name).includes(query))
    : data;

  return <Card data={filteredData} />;
}
