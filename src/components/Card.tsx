"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { BasketItem, useBasket } from "@/context/BasketContext";
import { formatPrice } from "@/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type CardProps = {
  data: BasketItem[];
};

export default function Card({ data }: any) {
  const { addToBasket, basket } = useBasket();
  const [addedIds, setAddedIds] = useState<number[]>([]);
  console.log("data", data);

  const handleAddToBasket = (item: BasketItem) => {
    addToBasket(item);
    setAddedIds((prev) => [...prev, item.id]);
  };

  return (
    <>
      {data.map((item: BasketItem, index: number) => {
        const added = basket.some((bItem) => bItem.id === item.id);
        return (
          <div
            className="p-5 border-2 h-max border-slate-300 rounded-2xl font-semibold"
            key={index}
          >
            <img className="w-max" src={item.src} />
            <div className="flex justify-between text-sm mt-2">
              <p>{item.name}</p>
              <p>{formatPrice(item.price)}</p>
            </div>
            <Button
              disabled={added}
              onClick={() => handleAddToBasket(item)}
              variant="outline"
              className="w-full mt-5 cursor-pointer"
            >
              {added ? (
                <p className="flex justify-center items-center gap-2">
                  <CheckCircleIcon className="text-green-500 w-4 h-4" /> Sepete
                  Eklendi
                </p>
              ) : (
                "Sepete Ekle"
              )}
            </Button>
          </div>
        );
      })}
    </>
  );
}
