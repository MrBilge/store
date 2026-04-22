import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "@/data/products";
import { SearchParams } from "@/app/(store)/products/page";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export const normalize = (str: string) => {
  const charMap: Record<string, string> = {
    ı: "i",
    İ: "i",
    ğ: "g",
    ü: "u",
    ş: "s",
    ö: "o",
    ç: "c",
  };

  return str
    .toLowerCase()
    .replace(/[ıİğüşöç]/g, (char) => charMap[char] || char)
    .replace(/\s/g, "");
};

export const searchFilteredData = (
  products: Product[],
  searchParams: SearchParams,
  query: string,
) => {
  const brands = searchParams.brand?.split(",") || [];
  const gpus = searchParams.gpu?.split(",") || [];
  const cpus = searchParams.cpu?.split(",") || [];
  const sizes = searchParams.size?.split(",") || [];
  const colors = searchParams.color?.split(",") || [];
  const category = searchParams.category?.split(",") || [];
  const subCategory = searchParams.subCategory?.split(",") || [];
  const packege = searchParams.package?.split(",") || [];
  const weight = searchParams.weight?.split(",") || [];

  const rating = Number(searchParams.rating || 0);
  const [min, max] = searchParams.price?.split("-") || [];

  return products.filter((item) => {
    const matchesSearch = query
      ? [item.name, item.category, item.subCategory].some((field) =>
          normalize(field).includes(query),
        )
      : true;

    const matchBrand = brands.length > 0 ? brands.includes(item.brand) : true;
    const matchGpu =
      item.gpu && gpus.length > 0 ? gpus.includes(item.gpu) : true;
    const matchCpu =
      item.cpu && cpus.length > 0 ? cpus.includes(item.cpu) : true;

    const matchSize =
      sizes.length > 0 ? item.size && sizes.includes(item.size) : true;

    const matchColor =
      colors.length > 0 ? item.color && colors.includes(item.color) : true;

    const matchesCategory =
      item.itemCategory && category.length > 0
        ? category.includes(item.itemCategory)
        : true;

    const matchesSubCategory =
      item.itemSubCategory && subCategory.length > 0
        ? subCategory.includes(item.itemSubCategory)
        : true;

    const matchesPackage =
      item.package && packege.length > 0
        ? packege.includes(item.package)
        : true;

    const matchesWeight =
      item.weight && weight.length > 0 ? weight.includes(item.weight) : true;

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
      matchesCategory &&
      matchesSubCategory &&
      matchesPackage &&
      matchesWeight
    );
  });
};
