import path from "path";
import Link from "next/link";
export default function SideBar() {
  const menuItem = [
    {
      label: "dekoratif",
      path: "/dekoratif",
    },
    {
      label: "aaa",
      path: "/aaa",
    },
    {
      label: "bbb",
      path: "/bbb",
    },
    {
      label: "ccc",
      path: "/ccc",
    },
  ];

  return (
    <nav className="bg-gray-100 w-1/6">
      {menuItem.map((item: any, index: any) => (
        <div key={index} className="space-y-10 ml-5 mt-10">
          <Link  href={item.path}>
            <p>{item.label}</p>
          </Link>
        </div>
      ))}
    </nav>
  );
}
