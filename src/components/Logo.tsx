import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/" className="flex gap-2">
      <Image
        className="w-16 h-16"
        src="/assets/logo.png"
        alt="ALINSIN logosu"
        width={64}
        height={64}
      />

      <h1 className="flex flex-col justify-center text-3xl"> ALINSIN </h1>
    </Link>
  );
}
