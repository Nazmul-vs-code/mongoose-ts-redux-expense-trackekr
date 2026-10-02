import { Expense } from "@/redux/features/expenseSlice";

const API_URL = "/api/expenses";

export const getExpenses = async (): Promise<Expense[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return response.json();
};

export const getExpense = async (id: string): Promise<Expense> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch expense");
  }

  return response.json();
};

export const createExpense = async (
  expense: Omit<Expense, "_id">
): Promise<Expense> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error("Failed to create expense");
  }

  return response.json();
};

export const updateExpense = async (
  id: string,
  expense: Partial<Expense>
): Promise<Expense> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error("Failed to update expense");
  }

  return response.json();
};

export const deleteExpense = async (id: string): Promise<Expense> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }

  return response.json();
};