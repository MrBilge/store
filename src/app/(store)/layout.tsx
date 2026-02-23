"use client";
import TopBar from "@/components/TopBar";
import { SearchProvider } from "@/context/SearchContext";
import { useEffect, useState } from "react";
import { useBasket } from "@/context/BasketContext";
import MiniBasket from "@/components/BasketSheet";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { basket } = useBasket();
  const [openBasket, setOpenBasket] = useState(false);
  const noEmpty = basket.length > 0;
  useEffect(() => {
    noEmpty ? setOpenBasket(true) : null;
  }, [basket.length]);

  return (
    <div className="h-dvh flex flex-col overflow-y-hidden ">
      <SearchProvider>
        <TopBar />
        <div className="flex flex-1 h-full min-h-0 bg-gray-100">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className={`  transition-all duration-400 grid grid-cols-3 xl:grid-cols-4 gap-10  py-20 px-20 xl:px-40 w-full h-full overflow-y-auto  ${openBasket ? "mr-5 xl:mr-10" : ""} `}
          >
            {children}
          </div>
          {openBasket && (
            <MiniBasket show={openBasket} setShow={setOpenBasket} />
          )}
        </div>
      </SearchProvider>
    </div>
  );
}
