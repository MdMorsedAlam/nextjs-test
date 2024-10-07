import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export const getDataFromToken = (req: NextRequest) => {

    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const data:any = jwt.verify(token, process.env.JWT_SECRET!);
        return data.id;
    } catch (error: any) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

}