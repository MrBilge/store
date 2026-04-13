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

  const getValue = (val: string | string[] | undefined) =>
    Array.isArray(val) ? val[0] : val;

  const brands = getValue(searchParams.brand)?.split(",") || [];
  const gpus = getValue(searchParams.gpu)?.split(",") || [];
  const cpus = getValue(searchParams.cpu)?.split(",") || [];

  const rating = Number(getValue(searchParams.rating) || 0);

  const price = getValue(searchParams.price);
  const [min, max] = price?.split("-") || [];

  const filteredData = products.filter((item) => {
    const matchesSearch = query
      ? [item.name, item.category, item.subCategory, item.subProduct].some(
          (field) => normalize(field).includes(query),
        )
      : true;

    const matchesCategory = category ? item.category === category : true;

    const matchesSubCategory = subCategory
      ? item.subCategory === subCategory
      : true;

    const matchesSubProduct = subProduct
      ? item.subProduct === subProduct
      : true;

    const matchBrand = brands.length > 0 ? brands.includes(item.brand) : true;

    const matchGpu =
      gpus.length > 0 ? item.gpu && gpus.includes(item.gpu) : true;

    const matchCpu =
      cpus.length > 0 ? item.cpu && cpus.includes(item.cpu) : true;

    const matchRating = rating > 0 ? item.rating >= rating : true;

    const matchPrice =
      (min !== undefined && min !== "" ? item.price >= Number(min) : true) &&
      (max !== undefined && max !== "" ? item.price <= Number(max) : true);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSubCategory &&
      matchesSubProduct &&
      matchBrand &&
      matchGpu &&
      matchCpu &&
      matchRating &&
      matchPrice
    );
  });

  return <Content data={filteredData} />;
}
