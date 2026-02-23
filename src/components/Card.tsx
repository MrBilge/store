"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import BasketSheet from "./BasketSheet";
import { useBasket } from "@/context/BasketContext";
import { formatPrice } from "@/lib/utils";

export default function Card({ data }: any) {
  const [openBasket, setOpenBasket] = useState(false);
  const { addToBasket } = useBasket();

  const handleAddToBasket = (item: any) => {
    addToBasket(item);
  };

  return (
    <>
      {data.map((item: any, index: any) => (
        <div
          className="p-5 border-2 h-max border-slate-300 rounded-2xl"
          key={index}
        >
          <img className="w-max" src={item.src} />
          <div className="flex justify-between text-sm">
            <p>{item.name}</p>
            <p>{formatPrice(item.price)}</p>
          </div>
          <Button
            onClick={() => handleAddToBasket(item)}
            variant="outline"
            className="w-full mt-5 cursor-pointer"
          >
            Sepete Ekle
          </Button>
        </div>
      ))}
    </>
  );
}
