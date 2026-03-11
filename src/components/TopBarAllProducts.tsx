import { useState } from "react";
import { categories } from "@/data/categories";
import MegaMenu from "./MegaMenu";

export default function AllProducts({ setAllKategori }: any) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeData = categories.find((cat) => cat.title === activeCategory);
  return (
    <div
      className="flex  w-full  absolute z-50 p-2  top-full  left-5 xl:left-0 -mt-1    bg-white text-black  rounded-lg "
      onMouseEnter={() => setAllKategori(true)}
      onMouseLeave={() => {
        setAllKategori(false);
        setActiveCategory(null);
      }}
    >
      <div className="flex flex-col space-y-2 mt-2 border-r border-slate-400 p-5 overflow-y-auto max-h-[500px] no-scrollbar ">
        {categories.map((item, index) => {
          const active = item.title === activeCategory;
          return (
            index > 0 && (
              <div
                onMouseEnter={() => setActiveCategory(item.title)}
                className={` hover:bg-gray-300 rounded-lg p-2 flex  gap-2 ${active ? "bg-gray-300" : ""}  `}
                key={index}
              >
                <item.icon className="w-8 h-8 text-orange-400" />
                <div className="flex items-center justify-center">
                  <p className="text-sm">{item.title}</p>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div>
        {activeData && (
          <MegaMenu
            data={activeData}
            setAllKategori={setAllKategori}
            onMouseEnter={() => setActiveCategory(activeData.title)}
            onMouseLeave={() => setActiveCategory(null)}
          />
        )}
      </div>
    </div>
  );
}
