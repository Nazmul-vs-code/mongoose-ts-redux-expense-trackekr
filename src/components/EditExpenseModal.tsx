"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Expense, updateExpense as updateExpenseState } from "@/redux/features/expenseSlice";
import { updateExpense } from "@/services/expenseApi";
import toast from "react-hot-toast";

interface EditExpenseModalProps {
  expense: Expense | null;
  onClose: () => void;
}

const EditExpenseModal = ({
  expense,
  onClose,
}: EditExpenseModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<
    "Food" | "Transport" | "Shopping" | "Others"
  >("Food");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (expense) {
      setTitle(expense.title);
      setAmount(String(expense.amount));
      setCategory(expense.category);
      setDate(expense.date.split("T")[0]);
    }
  }, [expense]);

  if (!expense) {
    return null;
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const updatedExpense = await updateExpense(expense._id, {
        title,
        amount: Number(amount),
        category,
        date,
      });

      dispatch(updateExpenseState(updatedExpense));

      toast.success(
        `Backend confirmed: "${updatedExpense.title}" updated successfully! 🎉`
      );

      onClose();
    } catch (error) {
      console.error("Failed to update expense:", error);
      toast.error("Failed to update expense");
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="mb-6 text-2xl font-bold">
          Edit Expense
        </h3>

        <form onSubmit={handleUpdate} className="space-y-4">
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

          <div className="modal-action">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost"
            >
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Update Expense
            </button>
          </div>
        </form>
      </div>

      <div
        className="modal-backdrop"
        onClick={onClose}
      />
    </dialog>
  );
};

export default EditExpenseModal;