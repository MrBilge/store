import ShoppingCart from "@/components/ShoppingCart";
import { BasketItem } from "@/context/BasketContext";

type ContentProps = {
  data: BasketItem[];
};

export default function Content({ data }: ContentProps) {
  return <ShoppingCart data={data} />;
}
