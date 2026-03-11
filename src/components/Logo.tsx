import Link from "next/link";
export default function Logo() {
  const Upper = () => {};
  return (
    <Link href="/" className="flex gap-2">
      <img className="w-16 h-16" src="/assets/logo.png" />

      <h1 className="flex flex-col justify-center text-3xl"> ALINSIN </h1>
    </Link>
  );
}
