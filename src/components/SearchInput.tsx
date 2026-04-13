"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(); // ✅ TEMİZ BAŞLA

    if (value.trim()) {
      params.set("search", value);
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Ara..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      className="w-[800px] h-10 bg-gray-100 rounded-2xl text-black placeholder:text-black pl-10"
    />
  );
}
