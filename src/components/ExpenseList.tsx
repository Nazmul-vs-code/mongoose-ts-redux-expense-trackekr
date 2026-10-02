"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "@/redux/store";
import {
  Expense,
  setExpenses,
} from "@/redux/features/expenseSlice";

import { getExpenses } from "@/services/expenseApi";

import EditExpenseModal from "./EditExpenseModal";
import DeleteExpenseModal from "./DeleteExpenseModal";

const ExpenseList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const expenses = useSelector(
    (state: RootState) => state.expenses.expenses
  );

  const [selectedExpense, setSelectedExpense] =
    useState<Expense | null>(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();

        dispatch(setExpenses(data));
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };

    fetchExpenses();
  }, [dispatch]);

  const handleEdit = (expense: Expense) => {
    setSelectedExpense(expense);
    setShowEditModal(true);
  };

  const handleDelete = (expense: Expense) => {
    setSelectedExpense(expense);
    setShowDeleteModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedExpense(null);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedExpense(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.title}</td>

                <td>৳{expense.amount}</td>

                <td>
                  <span className="badge badge-primary">
                    {expense.category}
                  </span>
                </td>

                <td>
                  {new Date(expense.date).toLocaleDateString()}
                </td>

                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(expense)}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(expense)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditExpenseModal
        expense={showEditModal ? selectedExpense : null}
        onClose={closeEditModal}
      />

      <DeleteExpenseModal
        expense={showDeleteModal ? selectedExpense : null}
        onClose={closeDeleteModal}
      /> 
    </>
  );
};

export default ExpenseList;