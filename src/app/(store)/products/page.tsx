import Content from "./Content";
import { products } from "@/data/products";
import { normalize } from "@/lib/utils";

export default function Page({ searchParams }: any) {
  const searchValue = searchParams?.search || "";
  const query = normalize(searchValue);

  // 🔥 FILTER PARAMS
  const brands = searchParams.brand?.split(",") || [];
  const gpus = searchParams.gpu?.split(",") || [];
  const cpus = searchParams.cpu?.split(",") || [];
  const rating = Number(searchParams.rating || 0);
  const [min, max] = searchParams.price?.split("-") || [];

  const filteredData = products.filter((item) => {
    // 🔍 SEARCH
    const matchesSearch = query
      ? [
          item.name,
          item.category,
          item.subCategory,
          item.subProduct,
        ].some((field) => normalize(field).includes(query))
      : true;

    // 🔥 FILTERS
    const matchBrand =
      brands.length > 0 ? brands.includes(item.brand) : true;

    const matchGpu =
      gpus.length > 0 ? gpus.includes(item.gpu) : true;

    const matchCpu =
      cpus.length > 0 ? cpus.includes(item.cpu) : true;

    const matchRating =
      rating > 0 ? item.rating >= rating : true;

    const matchPrice =
      (min ? item.price >= Number(min) : true) &&
      (max ? item.price <= Number(max) : true);

    return (
      matchesSearch &&
      matchBrand &&
      matchGpu &&
      matchCpu &&
      matchRating &&
      matchPrice
    );
  });

  return <Content data={filteredData} />;
}