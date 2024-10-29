"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { add } from "@/store/features/card/cardSlice";
import { useToast } from "@/hooks/use-toast"

export function CardItem({item}:{item:{_id:string,name:string,price:number,description:string}}) {
 const dispatch=useAppDispatch();
 const storeItems=useAppSelector(state=>state.card.items)
 const { toast } = useToast();
 const addToCartData=(id:string)=>{
const exitsData=storeItems.find(item=>item===id);
if(exitsData){
    toast({
    title:"This Item Already Added"
})
}else{
    dispatch(add(id))
}

 }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{item?.name}</CardTitle>
      </CardHeader>
      <CardContent>
      <CardDescription>{item.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={()=>{addToCartData(item._id)}}>Add To Cart</Button>
      </CardFooter>
    </Card>
  )
}
