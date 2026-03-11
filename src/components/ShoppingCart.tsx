"use client";
import { useState } from "react";
import { BasketItem, useBasket } from "@/context/BasketContext";
import { formatPrice } from "@/lib/utils";

type ShoppingCartProps = {
  data: BasketItem[];
};

export default function ShoppingCart({ data }: ShoppingCartProps) {
  const productsPrice = data.reduce((acc, item) => {
    return item.quantity ? acc + item.price * item.quantity : 0;
  }, 0);
  const kargoPrice = productsPrice >= 900 ? 200 : 0;

  const totalPrice = productsPrice + kargoPrice;
  const isDisabled = data.length === 0;

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

      {productsPrice === 0 && (
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
                {item.quantity && formatPrice(item.price * item.quantity)} TL
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
              <p>{formatPrice(productsPrice)} </p>
            </div>

            <div className="flex justify-between text-sm mb-1">
              <p>Kargo Tutarı</p>
              <p>{formatPrice(kargoPrice)} </p>
            </div>

            <div className="flex justify-between border-t border-slate-300 pt-2 mt-2 font-semibold">
              <p>Toplam</p>
              <p>{formatPrice(totalPrice)}</p>
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

            <button
              disabled={isDisabled}
              className={`w-full rounded p-2 mt-3 font-semibold transition
  ${
    isDisabled
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-green-500 hover:bg-green-400 text-white cursor-pointer"
  }`}
            >
              Ödemeye Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
