"use client";

import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF19A3",
];

const ExpenseChart = () => {
  const expenses = useSelector(
    (state: RootState) => state.expenses.expenses
  );

  const [filterCategory, setFilterCategory] =
    useState<string>("All");

  const categories = [
    "All",
    "Food",
    "Transport",
    "Shopping",
    "Others",
  ];

  const chartData = useMemo(() => {
    const filtered =
      filterCategory === "All"
        ? expenses
        : expenses.filter(
          (e) => e.category === filterCategory
        );

    const grouped = filtered.reduce(
      (acc, curr) => {
        const existing = acc.find(
          (item) => item.name === curr.category
        );

        if (existing) {
          existing.value += curr.amount;
        } else {
          acc.push({
            name: curr.category,
            value: curr.amount,
          });
        }

        return acc;
      },
      [] as { name: string; value: number }[]
    );

    return grouped;
  }, [expenses, filterCategory]);

  return (
    <div className="card mb-8 bg-base-100 p-6 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="card-title text-2xl">
          Expenses by Category
        </h2>

        <select
          className="select select-bordered w-full max-w-xs"
          value={filterCategory}
          onChange={(e) =>
            setFilterCategory(e.target.value)
          }
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="h-80 w-full">
        {chartData.length > 0 ? (
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(
                    (percent ?? 0) * 100
                  ).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => `৳${value}`}
              />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No expenses found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseChart;