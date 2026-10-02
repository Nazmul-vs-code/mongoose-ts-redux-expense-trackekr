"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar border-b bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Expense Tracker
        </Link>
      </div>

      <div className="navbar-end gap-2">
        <Link
          href="/"
          className={`btn ${
            pathname === "/" ? "btn-primary" : "btn-ghost"
          }`}
        >
          Expenses
        </Link>

        <Link
          href="/add-expense"
          className={`btn ${
            pathname === "/add-expense" ? "btn-primary" : "btn-ghost"
          }`}
        >
          Add Expense
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;