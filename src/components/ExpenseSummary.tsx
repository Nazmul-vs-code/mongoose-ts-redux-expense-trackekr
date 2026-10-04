"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ExpenseSummary = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const totalExpenses = expenses.length;
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const highestExpense = expenses.length > 0 
    ? Math.max(...expenses.map(e => e.amount)) 
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="card bg-primary text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Total Amount</h2>
          <p className="text-4xl font-bold">৳{totalAmount.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="card bg-secondary text-secondary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Total Expenses</h2>
          <p className="text-4xl font-bold">{totalExpenses}</p>
        </div>
      </div>
      
      <div className="card bg-accent text-accent-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Highest Expense</h2>
          <p className="text-4xl font-bold">৳{highestExpense.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
