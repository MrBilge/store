import Content from "./Content";
import { products } from "@/data/products";
import { normalize, searchFilteredData } from "@/lib/utils";

export type SearchParams = {
  brand?: string;
  gpu?: string;
  cpu?: string;
  size?: string;
  color?: string;
  category?: string;
  subCategory?: string;
  package?: string;
  weight?: string;
  rating?: string;
  price?: string;
  search?: string;
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const searchValue = searchParams?.search || "";
  const query = normalize(searchValue);

  return <Content data={searchFilteredData(products, searchParams, query)} />;
}
