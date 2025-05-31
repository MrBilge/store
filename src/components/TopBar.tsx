import Link from "next/link";
import Logo from "./Logo";
import { ShoppingBagIcon , UserIcon  } from '@heroicons/react/24/solid'

export default function () {
  return (
    <div className="flex justify-between p-2 bg-black text-white px-20 ">
      <Logo />
      <div className="flex justify-between items-center gap-10">
        <p>aaa</p>
        <p>bbb</p>
        <p>ccc</p>
        <p>ccc</p>
        <p>ccc</p>
        <p>ccc</p>
      </div>
      <div className="flex justify-center items-center gap-2">
         <Link href="/sepetim">
        <ShoppingBagIcon className="w-6 h-6"/>
        </Link>
          <Link href="/uye-ol">
        <UserIcon className="w-6 h-6"/>
        </Link>
       
        
      </div>
    </div>
  );
}
