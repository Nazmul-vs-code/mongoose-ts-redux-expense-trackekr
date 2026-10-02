import ExpenseForm from "@/components/ExpenseForm";

export default function AddExpensePage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Add Expense
      </h1>

      <ExpenseForm />
    </main>
  );
}