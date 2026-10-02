"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  Expense,
  deleteExpense as deleteExpenseState,
} from "@/redux/features/expenseSlice";
import { deleteExpense } from "@/services/expenseApi";
import toast from "react-hot-toast";

interface DeleteExpenseModalProps {
  expense: Expense | null;
  onClose: () => void;
}

const DeleteExpenseModal = ({
  expense,
  onClose,
}: DeleteExpenseModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  if (!expense) {
    return null;
  }

  const handleDelete = async () => {
    try {
      await deleteExpense(expense._id);

      dispatch(deleteExpenseState(expense._id));

      toast.success(
        `Backend confirmed: "${expense.title}" deleted successfully! 🗑️`
      );

      onClose();
    } catch (error) {
      console.error("Failed to delete expense:", error);
      toast.error("Failed to delete expense");
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="text-xl font-bold">
          Delete Expense
        </h3>

        <p className="py-6">
          Are you sure you want to delete{" "}
          <span className="font-bold">
            `${expense.title}`
          </span>
          ?
        </p>

        <div className="modal-action">
          <button
            onClick={onClose}
            className="btn btn-ghost"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>

      <div
        className="modal-backdrop"
        onClick={onClose}
      />
    </dialog>
  );
};

export default DeleteExpenseModal;