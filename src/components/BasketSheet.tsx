import { useBasket } from "@/context/BasketContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  CheckBadgeIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";

export default function BasketSheet({ open, setOpen }: any) {
  const { basket, deleteItem } = useBasket();

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetContent className="h-dvh w-full pt-10">
        <SheetHeader>
          <SheetTitle className="ml-5">Sepetim</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto ">
          {basket.length === 0 ? (
            <p>Sepetiniz boş</p>
          ) : (
            basket.map((item, index) => (
              <div className="flex justify-between mx-10 relative" key={index}>
                <div key={index} className="flex items-center gap-4 mb-4">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.price} TL</p>
                  </div>
                </div>

                <div
                  onClick={() => deleteItem(item.basketItemId)}
                  className=" flex  bg-gray-300 p-2 w-max h-max rounded-lg "
                >
                  <TrashIcon className="h-4 w-4 text-red-500 cursor-pointer" />
                </div>
              </div>
            ))
          )}
          <div className="absolute bottom-0 w-full">
            <div className="bg-gray-200 flex gap-1 justify-center items-center p-2">
              <CheckBadgeIcon className="w-4 h-4" />
              <p className="underline  text-sm">Ödeme Adımına Git</p>
            </div>
            <div className="flex justify-between bg-black p-5 px-10 text-white">
              <div className="text-sm">
                <p>Ara Toplam</p>
                <p>{totalPrice} TL</p>
              </div>
              <Link
                className="flex justify-center items-center space-x-2"
                href="/sepetim"
              >
                <p>SEPETE GİT </p>
                <ChevronRightIcon className="w-5 h-5 " />
              </Link>
            </div>
          </div>{" "}
        </div>
      </SheetContent>
    </Sheet>
  );
}
