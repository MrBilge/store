"use client";
import Link from "next/link";
import { useBasket } from "@/context/BasketContext";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { formatPrice } from "@/lib/utils";

type MiniBasketProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MiniBasket({ show, setShow }: MiniBasketProps) {
  const { basket, deleteItem, addToBasket } = useBasket();

  const productPrice = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div
      className={`
        bg-white  z-50 w-1/3  xl:w-1/4 h-full 
        transition-all duration-300 flex flex-col overflow-y-auto
        ${show ? "" : " opacity-0"}
      `}
    >
      <div className="flex justify-between  px-5 border-b">
        <h2 className="text-lg font-semibold">Sepetim</h2>
        <XCircleIcon onClick={() => setShow(false)} className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {basket.length === 0 ? (
          <p>Sepetiniz boş</p>
        ) : (
          basket.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-10 items-center mb-4"
            >
              <div className="flex gap-3">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />

                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 ">
                <button
                  onClick={() => deleteItem(item.basketItemId)}
                  className="px-2 py-0 rounded-full bg-gray-300"
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => addToBasket(item)}
                  className="px-2 py-0 rounded-full bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t">
        <div className="bg-gray-200 flex gap-1 justify-center items-center p-2 text-sm">
          <CheckBadgeIcon className="w-4 h-4" />
          Ödeme Adımına Git
        </div>

        <div className="flex justify-between items-center bg-black text-white p-5">
          <div className="text-sm">
            <p>Ara Toplam</p>
            <p>{formatPrice(productPrice)} TL</p>
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
