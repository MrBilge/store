import Link from "next/link";
import type { Dispatch, HTMLAttributes, SetStateAction } from "react";
import type { MegaMenuColumn } from "@/data/categories";

type MegaMenuProps = HTMLAttributes<HTMLDivElement> & {
  columns: MegaMenuColumn[];
  setAllKategori: Dispatch<SetStateAction<boolean>>;
};

export default function MegaMenu({
  columns,
  setAllKategori,
  ...events
}: MegaMenuProps) {
  return (
    <div
      className=" top-full left-0 w-full bg-white text-black p-10"
      {...events}
    >
      <div className="grid grid-cols-4 gap-10">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-bold mb-3">{column.title}</h3>

            {column.items.map((item) => (
              <Link
                onClick={() => setAllKategori(false)}
                key={item.path}
                href={item.path}
                className="block mb-2"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
