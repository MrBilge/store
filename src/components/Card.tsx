"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import BasketSheet from "./BasketSheet";
import { useBasket } from "@/context/BasketContext";

export default function Card({ data }: any) {
  const [openBasket, setOpenBasket] = useState(false);
  const { addToBasket } = useBasket();

  const handleAddToBasket = (item: any) => {
    addToBasket(item);
    setOpenBasket(true);
  };

  return (
    <>
      <div className="flex  flex-wrap gap-10">
        {data.map((item: any, index: any) => (
          <div
            className="p-5 border-2 border-slate-300 rounded-2xl"
            key={index}
          >
            <img className="w-max max-w-3xs" src={item.src} />
            <div className="flex justify-between">
              <p>{item.name}</p>
              <p>{item.price}TL</p>
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
      </div>

      <BasketSheet open={openBasket} setOpen={setOpenBasket} />
    </>
  );
}
