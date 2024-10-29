'use client'
import { Badge } from "@/components/ui/badge"
import { useAppSelector } from "@/store/hooks";
import { ShoppingCart } from "lucide-react";
const ShopCart = () => {
const items = useAppSelector(state=>state.card.items)

    return (
        <li><Badge className="relative" variant="outline"><ShoppingCart className="text-red-500" /><span className="absolute w-6 h-6 items-center justify-center -top-2 -right-5 rounded-full text-xl font-semibold text-red-500">{items.length}</span></Badge></li>
    )
}

export default ShopCart;