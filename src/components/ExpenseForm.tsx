"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addExpense } from "@/redux/features/expenseSlice";
import { createExpense } from "@/services/expenseApi";

const ExpenseForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<
    "Food" | "Transport" | "Shopping" | "Others"
  >("Food");
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      return;
    }

    try {
      const newExpense = await createExpense({
        title,
        amount: Number(amount),
        category,
        date,
      });

      dispatch(addExpense(newExpense));

      setTitle("");
      setAmount("");
      setCategory("Food");
      setDate("");
    } catch (error) {
      console.error("Failed to create expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input input-bordered w-full"
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value as
              | "Food"
              | "Transport"
              | "Shopping"
              | "Others"
          )
        }
        className="select select-bordered w-full"
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input input-bordered w-full"
      />

      <button type="submit" className="btn btn-primary w-full">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;