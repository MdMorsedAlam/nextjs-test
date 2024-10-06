import dbConnect from "@/lib/dbConnect";
import product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(){

    await dbConnect();
    try {
        const products = await product.find({});
        return NextResponse.json(products);
    } catch (error:any) {
        return NextResponse.json({error:"Something went wrong"});
    }
}




