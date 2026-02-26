"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type BasketItem = {
  id: number;
  name: string;
  price: number;
  src: string;
  basketItemId: string;
  quantity: number;
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
    setBasket((prev) => {
      const existingItem = prev.find((p) => p.id === item.id);

      if (existingItem) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [
        ...prev,
        {
          ...item,
          basketItemId: crypto.randomUUID(),
          quantity: 1,
        },
      ];
    });
  };

  const deleteItem = (basketItemId: string) => {
    setBasket((prev) =>
      prev
        .map((item) =>
          item.basketItemId === basketItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
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
