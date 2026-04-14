import Content from "./Content";
import { products } from "@/data/products";
import { normalize } from "@/lib/utils";

export default function Page({ basketSheetOpen, searchParams }: any) {
  const searchValue = searchParams?.search || "";
  const query = normalize(searchValue);

  // 🔥 FILTER PARAMS
  const brands = searchParams.brand?.split(",") || [];
  const gpus = searchParams.gpu?.split(",") || [];
  const cpus = searchParams.cpu?.split(",") || [];

  const sizes = searchParams.size?.split(",") || [];
  const colors = searchParams.color?.split(",") || [];
  const category = searchParams.category?.split(",") || [];

  const rating = Number(searchParams.rating || 0);
  const [min, max] = searchParams.price?.split("-") || [];

  const filteredData = products.filter((item) => {
    const matchesSearch = query
      ? [item.name, item.category, item.subCategory, item.subProduct].some(
          (field) => normalize(field).includes(query),
        )
      : true;

    const matchBrand = brands.length > 0 ? brands.includes(item.brand) : true;

    const matchGpu = gpus.length > 0 ? gpus.includes(item.gpu) : true;

    const matchCpu = cpus.length > 0 ? cpus.includes(item.cpu) : true;

    // shoes
    const matchSize =
      sizes.length > 0 ? item.size && sizes.includes(item.size) : true;

    const matchColor =
      colors.length > 0 ? item.color && colors.includes(item.color) : true;

    const matchesCategory =
      category.length > 0
        ? item.category && category.includes(item.itemCategory)
        : true;

    const matchRating = rating > 0 ? item.rating >= rating : true;

    const matchPrice =
      (min ? item.price >= Number(min) : true) &&
      (max ? item.price <= Number(max) : true);

    return (
      matchesSearch &&
      matchBrand &&
      matchGpu &&
      matchCpu &&
      matchSize &&
      matchColor &&
      matchRating &&
      matchPrice &&
      matchesCategory
    );
  });

  return <Content data={filteredData} />;
}
