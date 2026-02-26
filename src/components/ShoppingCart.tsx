"use client";

import { BasketItem, useBasket } from "@/context/BasketContext";
import { useState } from "react";

type ShoppingCartProps = {
  data: BasketItem[];
};

export default function ShoppingCart({ data }: ShoppingCartProps) {
  const productPrice = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const kargoPrice = 200;
  const totalPrice = productPrice + kargoPrice;
  const [quantitties, setQuantites] = useState(1);

  const [saleCode, setSaleCode] = useState(false);
  const { addToBasket, deleteItem } = useBasket();

  const handleAdd = (item: BasketItem) => {
    addToBasket(item);
  };

  return (
    <div className="w-full">
      <h2 className="text-slate-800 font-semibold text-2xl mb-10">
        Alışveriş Sepeti
      </h2>

      {productPrice === 0 && (
        <p className="text-gray-500">Sepetinizde Ürün Bulunmuyor.</p>
      )}

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-3/4">
          {data.map((item) => (
            <div
              key={item.basketItemId}
              className="w-full border-y p-5 flex justify-between"
            >
              <div className="flex gap-6">
                <img
                  className="w-32 lg:w-40 object-cover rounded"
                  src={item.src}
                  alt={item.name}
                />

                <div className="flex flex-col gap-2 justify-center">
                  <h2 className="font-medium">{item.name}</h2>

                  <div className="flex items-center gap-2 border-2 border-amber-500 rounded-2xl px-3 py-1 w-max">
                    <button
                      onClick={() => deleteItem(item.basketItemId)}
                      className="bg-white px-3 rounded-full"
                    >
                      -
                    </button>

                    <span className="rounded-full bg-orange-400 px-4 text-white text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      className="bg-white px-3 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="font-semibold">
                {item.price * item.quantity} TL
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/4">
          <div className="sticky top-10 border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
            <h1 className="border-b border-slate-300 mb-3 pb-2 font-semibold">
              Sepet Özeti
            </h1>

            <div className="flex justify-between text-sm mb-1">
              <p>Ara toplam</p>
              <p>{productPrice} TL</p>
            </div>

            <div className="flex justify-between text-sm mb-1">
              <p>Kargo Tutarı</p>
              <p>{kargoPrice} TL</p>
            </div>

            <div className="flex justify-between border-t border-slate-300 pt-2 mt-2 font-semibold">
              <p>Toplam</p>
              <p>{totalPrice} TL</p>
            </div>

            <div className="mt-5">
              {saleCode ? (
                <div className="py-4 px-2 border rounded-lg">
                  <h2 className="text-xs mb-3">İndirim Kodu</h2>

                  <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                    <input
                      className="placeholder:text-sm p-2 outline-none flex-1"
                      placeholder="İndirim Kodu Gir"
                    />

                    <button className="bg-gray-400 hover:bg-gray-500 transition px-4 text-white text-sm">
                      Uygula
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setSaleCode(true)}
                  className="w-full p-2 text-center bg-amber-600 hover:bg-amber-500 transition text-white rounded"
                >
                  + İndirim Kodu Gir
                </button>
              )}
            </div>

            <button className="w-full rounded p-2 bg-green-500 hover:bg-green-400 transition text-white text-center mt-3 font-semibold">
              Ödemeye Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
