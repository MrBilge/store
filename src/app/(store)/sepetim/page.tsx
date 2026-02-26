"use client";
import Content from "./Content";
import { useBasket } from "@/context/BasketContext";

export default function Page() {
  const { basket } = useBasket();
  return (
    <div className="w-full">
      <Content data={basket} />
    </div>
  );
}
