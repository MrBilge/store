import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { BasketProvider } from "@/context/BasketContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex flex-col overflow-y-hidden ">
      <TopBar />
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className=" py-20 px-60 w-full h-full overflow-y-auto bg-gray-100 "
      >
        <BasketProvider> {children}</BasketProvider>
      </div>
    </div>
  );
}
