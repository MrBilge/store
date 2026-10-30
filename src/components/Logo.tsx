import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <>
    <Link href="/"> 
      <Image
        className="w-36 h-max"
        src="/assets/logo.png"
        alt="ALINSIN logosu"
        width={100}
        height={100}
      />

      </Link>

    </>
  );
}
