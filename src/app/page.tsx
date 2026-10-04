import ExpenseList from "@/components/ExpenseList";
import ExpenseSummary from "@/components/ExpenseSummary";
import ExpenseChart from "@/components/ExpenseChart";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Expenses Dashboard
      </h1>

      <ExpenseSummary />
      <ExpenseChart />
      <ExpenseList />
    </main>
  );
}