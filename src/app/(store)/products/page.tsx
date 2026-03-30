import Content from "./Content";
import { products } from "@/data/products";
import { normalize } from "@/lib/utils";

export default function Page({ searchParams }: any) {
  const searchValue = searchParams?.search || "";
  const query = normalize(searchValue);

  const filteredData = query
    ? products.filter((item) => normalize(item.name).includes(query))
    : products;

  return <Content data={filteredData} />;
}
