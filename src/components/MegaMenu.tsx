import Link from "next/link";
export default function MegaMenu({ data, ...events }: any) {
  return (
    <div
      className=" top-full left-0 w-full bg-white text-black p-10"
      {...events}
    >
      <div className="grid grid-cols-4 gap-10">
        {data.megaMenu.map((column: any, i: any) => (
          <div key={i}>
            <h3 className="font-bold mb-3">{column.title}</h3>

            {column.items.map((item: any, idx: any) => (
              <Link key={idx} href={item.path} className="block mb-2">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
