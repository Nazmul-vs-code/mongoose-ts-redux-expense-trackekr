import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Expense {
  _id: string;
  title: string;
  amount: number;
  category: "Food" | "Transport" | "Shopping" | "Others";
  date: string;
}

interface ExpenseState {
  expenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,

  reducers: {
    setExpenses: (state, action: PayloadAction<Expense[]>) => {
      state.expenses = action.payload;
    },

    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },

    updateExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.expenses.findIndex(
        (expense) => expense._id === action.payload._id
      );

      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },

    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense._id !== action.payload
      );
    },
  },
});

export const {
  setExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = expenseSlice.actions;

export default expenseSlice.reducer;