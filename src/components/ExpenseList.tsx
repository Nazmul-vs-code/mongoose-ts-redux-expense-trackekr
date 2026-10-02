"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setExpenses } from "@/redux/features/expenseSlice";
import { getExpenses } from "@/services/expenseApi";

const ExpenseList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const expenses = useSelector(
    (state: RootState) => state.expenses.expenses
  );

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

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;