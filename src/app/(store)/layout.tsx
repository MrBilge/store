import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { BasketProvider } from "@/context/BasketContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-y-hidden">
        <SideBar />
        <div className="mx-10 mt-10 p-10 w-full overflow-y-auto">
          <BasketProvider> {children}</BasketProvider>
        </div>
      </div>
    </div>
  );
}
