'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type BasketItem = {
  id: number;
  name: string;
  price: number;
  src: string;
};

type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) throw new Error("useBasket must be used within a BasketProvider");
  return context;
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  // 🧠 Sayfa yüklendiğinde localStorage'tan veriyi oku
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  // 💾 basket her değiştiğinde localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  
  const addToBasket = (item: BasketItem) => {
    setBasket((prev) => [...prev, item]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
