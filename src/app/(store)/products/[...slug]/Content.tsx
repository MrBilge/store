"use client";

import Card from "@/components/Card";
import type { Product } from "@/data/products";

export default function Content({ data }: { data: Product[] }) {
  return <Card data={data} />;
}
