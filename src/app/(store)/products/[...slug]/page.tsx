import Content from "./Content";
import { products } from "@/data/products";
import { normalize } from "@/lib/utils";

export default function Page({ params, searchParams }: any) {
  const searchValue = searchParams?.search || "";
  const query = normalize(searchValue);

  const slug = params.slug || [];

  const category = slug[0];
  const subCategory = slug[1];
  const subProduct = slug[2];

  const filteredData = products.filter((item) => {
    const matchesSearch = query ? normalize(item.name).includes(query) : true;

    const matchesCategory = category ? item.category === category : true;
    const matchesSubCategory = subCategory
      ? item.subCategory === subCategory
      : true;

    const matchesSubProduct = subProduct
      ? item.subProduct === subProduct
      : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSubCategory &&
      matchesSubProduct
    );
  });

  return <Content data={filteredData} />;
}
