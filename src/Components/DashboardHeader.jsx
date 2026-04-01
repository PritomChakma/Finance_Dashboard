import { useState } from "react";
import avatar from "../assets/avatar.png";
import { useTransaction } from "../Context/TransactionContext";
import { useRole } from "../Context/RoleContext"; // ✅ add

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Expense");

  const { addTransaction } = useTransaction();
  const { role } = useRole(); // ✅ get role

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newTransaction = {
      id: Date.now(),
      description: form.description.value,
      amount:
        type === "Income"
          ? Number(form.amount.value)
          : -Number(form.amount.value),
      date: form.date.value,
      category: type,
    };

    addTransaction(newTransaction);
    setOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Financial Overview</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your money.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* ✅ Role based button */}
          <button
            onClick={() => role === "admin" && setOpen(true)}
            disabled={role !== "admin"}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              role === "admin"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            title={role !== "admin" ? "Admin only" : ""}
          >
            + Add Transaction
          </button>

          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full ring-2 ring-gray-200"
          />
        </div>
      </div>

      {/* Modal (Admin only) */}
      {open && role === "admin" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Add Transaction
            </h2>

            {/* Toggle */}
            <div className="bg-gray-100 p-1 rounded-xl flex mb-6">
              <button
                type="button"
                onClick={() => setType("Expense")}
                className={`w-1/2 py-2 rounded-lg font-semibold transition ${
                  type === "Expense"
                    ? "bg-white text-red-500 shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Expense
              </button>

              <button
                type="button"
                onClick={() => setType("Income")}
                className={`w-1/2 py-2 rounded-lg font-semibold transition ${
                  type === "Income"
                    ? "bg-white text-green-500 shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Income
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  required
                  className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="number" name="amount" required placeholder="Amount" className="border p-2 rounded" />
                <input type="date" name="date" required className="border p-2 rounded" />
              </div>

              <select name="category" className="w-full border p-2 rounded">
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Salary</option>
              </select>

              <div className="flex justify-between">
                <button type="button" onClick={() => setOpen(false)}>
                  Cancel
                </button>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;