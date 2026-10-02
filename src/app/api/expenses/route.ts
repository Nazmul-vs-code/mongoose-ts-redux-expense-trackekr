import ConnectDb from "@/lib/mongodb";
import Expenses from "@/models/Expense";
import { NextResponse } from "next/server";


await ConnectDb();

export async function POST(request: Request) {
    try {
        
        const body = await request.json();

        const expens = await Expenses.create(body);

        return NextResponse.json(expens, {status:201})

    } catch (error) {
        console.log("Error:", error);

    return NextResponse.json(
      { message: "Failed to create expense" },
      { status: 500 })
    }
}