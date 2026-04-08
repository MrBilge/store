import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
