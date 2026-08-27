"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useBasket } from "@/context/BasketContext";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type CardProps = {
  data: Product[];
};

export default function Card({ data }: CardProps) {
  const { addToBasket, basket } = useBasket();
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setValue(searchParams.get("search") || "");
  }, [searchParams]);

  const handleAddToBasket = (item: Product) => {
    addToBasket(item);
  };

  if (data.length === 0)
    return (
      <div className="flex gap-2">
        <SearchIcon className="shrink-0" />
        <p className="whitespace-nowrap">
          Sonuçlar arasında <span className="font-semibold">``{value}``</span>
          ürünü bulunamadı.
        </p>
      </div>
    );
  else
    return (
      <>
        {data.map((item) => {
          const added = basket.some((bItem) => bItem.id === item.id);
          return (
            <div
              className={`border border-slate-300 rounded-2xl font-semibold flex flex-col `}
              key={item.id}
            >
              <Image
                className="h-auto w-full rounded-t-lg"
                src={item.src}
                alt={item.name}
                width={500}
                height={500}
              />
              <div className="flex  h-16  justify-between gap-5 text-sm mt-2 px-5">
                <p className="flex  line-clamp-3">{item.name}</p>
                <p>{formatPrice(item.price)}</p>
              </div>
              <div className="p-5">
                <Button
                  disabled={added}
                  onClick={() => handleAddToBasket(item)}
                  variant="outline"
                  className="w-full  cursor-pointer"
                >
                  {added ? (
                    <p className="flex justify-center items-center gap-2">
                      <CheckCircleIcon className="text-green-500 w-4 h-4" />
                      Sepete Eklendi
                    </p>
                  ) : (
                    "Sepete Ekle"
                  )}
                </Button>{" "}
              </div>
            </div>
          );
        })}
      </>
    );
}
