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
// import { useSearch } from "@/context/SearchContext";
import { useBasket } from "@/context/BasketContext";
import SearchInput from "./SearchInput";

export default function () {
  const [allKategori, setAllKategori] = useState(false);
  // const { setSearchValue } = useSearch();
  const [tempValue, setTempValue] = useState("");
  const { basket } = useBasket();
  const productNumber = basket.length;
  return (
    <div className="w-full p-2 bg-white text-slate-900 xl:px-40">
      <div className="flex justify-between  ">
        <Logo />
        <div className="relative flex flex-col justify-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />

          <SearchInput />
        </div>

        <div className="flex justify-center items-center gap-2">
          <Link href="/sepetim">
            <div className="relative">
              <ShoppingBagIcon className=" w-6 h-6" />
              <span className="absolute right-4 bottom-1 text-xs font-semibold bg-gray-300 px-2 py-1 rounded-full text-red-500">
                {productNumber}
              </span>
            </div>
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
