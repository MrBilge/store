"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type BasketItem = {
  id: number;
  name: string;
  price: number;
  src: string;
  basketItemId: string;
};
type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  deleteItem: (itemId: any) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item: BasketItem) => {
    setBasket((prev) => [
      ...prev,
      { ...item, basketItemId: crypto.randomUUID() },
    ]);
  };
  const deleteItem = (basketItemId: any) => {
    setBasket((prev) =>
      prev.filter((item) => item.basketItemId !== basketItemId),
    );
  };

  return (
    <BasketContext.Provider value={{ deleteItem, basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context)
    throw new Error("useBasket must be used within a BasketProvider");
  return context;
};
