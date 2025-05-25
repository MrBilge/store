import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useBasket } from "@/context/BasketContext";
export default function BasketSheet({open , setOpen  } : any){
     const { basket } = useBasket();

    return(
<Sheet  onOpenChange={setOpen} open={open}>
  <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
    <SheetHeader>
      <SheetTitle>Sepetim</SheetTitle>
    </SheetHeader>
      {basket.length === 0 ? (
          <p>Sepetiniz boş</p>
        ) : (
          basket.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <img src={item.src} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm">{item.price} TL</p>
              </div>
            </div>
          ))
        )}
  </SheetContent>
</Sheet>
    )
}

