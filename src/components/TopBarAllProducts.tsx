import { useState } from "react";
import { categories } from "./TopBar";
import MegaMenu from "./MegaMenu";

export default function AllProducts({ setAllKategori }: any) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeData = categories.find((cat) => cat.title === activeCategory);
  return (
    <div
      className="flex  absolute  top-full  left-5 xl:left-0 -mt-1   w-full  bg-white text-black z-50 p-2 rounded-lg "
      onMouseEnter={() => setAllKategori(true)}
      onMouseLeave={() => {
        setAllKategori(false);
        setActiveCategory(null);
      }}
    >
      <div className="flex flex-col space-y-2 mt-2 border-r border-slate-400 p-5 overflow-y-auto max-h-[500px] no-scrollbar ">
        {categories.map((item, index) => {
          return (
            index > 0 && (
              <div
                onMouseEnter={() => setActiveCategory(item.title)}
                className={` hover:bg-gray-300 rounded-lg p-2 flex  gap-2   `}
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
            onMouseEnter={() => setActiveCategory(activeData.title)}
            onMouseLeave={() => setActiveCategory(null)}
          />
        )}
      </div>
    </div>
  );
}
