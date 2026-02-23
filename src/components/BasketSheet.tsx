"use client";
import { useBasket } from "@/context/BasketContext";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  CheckBadgeIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";

type MiniBasketProps = {
  show: boolean;

  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MiniBasket({ show, setShow }: MiniBasketProps) {
  const { basket, deleteItem } = useBasket();

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      className={`
        bg-white  z-50 w-1/3  xl:w-1/6 h-full 
        transition-all duration-300 flex flex-col overflow-y-auto
        ${show ? "" : " opacity-0"}
      `}
    >
      {/* HEADER */}
      <div className="flex justify-between  px-5 border-b">
        <h2 className="text-lg font-semibold">Sepetim</h2>
        <XCircleIcon onClick={() => setShow(false)} className="w-6" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {basket.length === 0 ? (
          <p>Sepetiniz boş</p>
        ) : (
          basket.map((item) => (
            <div
              key={item.basketItemId}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex gap-3">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />

                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.price} TL</p>
                </div>
              </div>

              <button
                onClick={() => deleteItem(item.basketItemId)}
                className="bg-gray-200 p-2 rounded-lg"
              >
                <TrashIcon className="h-4 w-4 text-red-500" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="border-t">
        <div className="bg-gray-200 flex gap-1 justify-center items-center p-2 text-sm">
          <CheckBadgeIcon className="w-4 h-4" />
          Ödeme Adımına Git
        </div>

        <div className="flex justify-between items-center bg-black text-white p-5">
          <div className="text-sm">
            <p>Ara Toplam</p>
            <p>{totalPrice} TL</p>
          </div>

          <Link
            href="/sepetim"
            className="flex items-center gap-1 text-sm font-medium"
          >
            SEPETE GİT
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
