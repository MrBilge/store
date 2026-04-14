"use client";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";
import { useBasket } from "@/context/BasketContext";
import MiniBasket from "@/components/BasketSheet";
import { usePathname } from "next/navigation";
import FilterBar from "@/components/FilterBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const { basket } = useBasket();
  const [openBasket, setOpenBasket] = useState(false);
  const noEmpty = basket.length > 0;
  const isCartPage = pathName === "/sepetim";
  useEffect(() => {
    noEmpty && !isCartPage ? setOpenBasket(true) : null;
  }, [basket.length]);

  return (
    <div className="h-dvh flex flex-col overflow-y-hidden ">
      <TopBar />
      <div className="flex flex-1 w-full h-full min-h-0 bg-gray-100">
        <div className="no-scrollbar overflow-y-auto shrink-0">
          <FilterBar />
        </div>

        <div
          className={`no-scrollbar
    transition-all duration-400
    ${isCartPage ? "block" : "grid grid-cols-3  xl:grid-cols-4 items-start gap-10"}
    py-20 px-20 xl:px-40 w-full h-full overflow-y-auto
    ${openBasket ? "mr-5 xl:mr-10" : ""}
  `}
        >
          {children}
        </div>
        {openBasket && !isCartPage && (
          <MiniBasket show={openBasket} setShow={setOpenBasket} />
        )}
      </div>
    </div>
  );
}
