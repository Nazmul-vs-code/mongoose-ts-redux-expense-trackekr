import ConnectDb from "@/lib/mongodb";
import Expenses from "@/models/Expense";
import { NextResponse } from "next/server";

await ConnectDb();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const expense = await Expenses.findById(id);

    return NextResponse.json(expense, { status: 200 });
  } catch (error) {
    console.log("Error:", error);

    return NextResponse.json(
      { message: "Failed to get expense" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const expense = await Expenses.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(expense, { status: 200 });
  } catch (error) {
    console.log("Error:", error);

    return NextResponse.json(
      { message: "Failed to update expense" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const expense = await Expenses.findByIdAndDelete(id);

    return NextResponse.json(expense, { status: 200 });
  } catch (error) {
    console.log("Error:", error);

    return NextResponse.json(
      { message: "Failed to delete expense" },
      { status: 200 }
    );
  }
}