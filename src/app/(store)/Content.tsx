"use client";
import Card from "@/components/Card";
import { useSearch } from "@/context/SearchContext";
import { normalize } from "@/lib/utils";
import { useBasket } from "@/context/BasketContext";

const data = [
  { id: 1, name: "Portakal Vazo", price: 500, src: "/assets/dekoratif.jpg" },
  { id: 2, name: "ordakal Vazo", price: 300, src: "/assets/dekoratif.jpg" },
  { id: 3, name: "Portakal Vazo", price: 400, src: "/assets/dekoratif.jpg" },
  { id: 4, name: "Portakal Vazo", price: 200, src: "/assets/dekoratif.jpg" },
  { id: 5, name: "Portakal Vazo", price: 500, src: "/assets/dekoratif.jpg" },
  { id: 6, name: "Portakal Vazo", price: 300, src: "/assets/dekoratif.jpg" },
  { id: 7, name: "Portakal Vazo", price: 400, src: "/assets/dekoratif.jpg" },
  { id: 8, name: "Portakal Vazo", price: 200, src: "/assets/dekoratif.jpg" },
];

export default function Content() {
  const { basket } = useBasket();

  const { searchValue } = useSearch();

  const query = normalize(searchValue);

  const filteredData = query
    ? data.filter((item) => normalize(item.name).includes(query))
    : data;

  return <Card data={filteredData} />;
}
