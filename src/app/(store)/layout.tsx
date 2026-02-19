import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { BasketProvider } from "@/context/BasketContext";
import { SearchProvider } from "@/context/SearchContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex flex-col overflow-y-hidden ">
      <SearchProvider>
        <BasketProvider>
          <TopBar />
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className=" py-20 px-40 xl:px-60 w-full h-full overflow-y-auto bg-gray-100 "
          >
            {children}
          </div>
        </BasketProvider>
      </SearchProvider>
    </div>
  );
}
