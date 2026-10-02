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


export async function GET(request:Request) {
    try {
        
        const expenseData = await Expenses.find({});

        return NextResponse.json(expenseData, {status: 200})


    } catch (error) {
        console.log("Error:", error);

    return NextResponse.json(
      { message: "Failed to create expense" },
      { status: 500 })
    }
}