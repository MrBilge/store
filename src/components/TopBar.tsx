"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { categories } from "@/data/categories";
import AllProducts from "./TopBarAllProducts";
import { useSearch } from "@/context/SearchContext";

export default function () {
  const [allKategori, setAllKategori] = useState(false);
  const { setSearchValue } = useSearch();
  const [tempValue, setTempValue] = useState("");

  return (
    <div className="w-full p-2 bg-white text-slate-900 xl:px-60">
      <div className="flex justify-between  ">
        <Logo />
        <div className="relative flex flex-col justify-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />

          <input
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchValue(tempValue);
              }
            }}
            className="w-[800px] h-10 bg-gray-100 rounded-2xl text-black placeholder:text-black pl-10"
            placeholder="Ara..."
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <Link href="/sepetim">
            <ShoppingBagIcon className="w-6 h-6" />
          </Link>
          <div>
            <UserIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => setAllKategori(false)}
        className="w-full  relative flex justify-center items-center gap-10 mt-5"
      >
        {categories.map((item, index) => {
          const allCategori = index === 0;

          return (
            <p
              onMouseEnter={() => index === 0 && setAllKategori(true)}
              className={`font-bold text-sm ${allCategori ? "text-red-600" : "text-slate-900 "}`}
              key={index}
            >
              {item.title}
            </p>
          );
        })}
        {allKategori && <AllProducts setAllKategori={setAllKategori} />}
      </div>
    </div>
  );
}
