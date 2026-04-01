import React, { useState } from "react";
import avatar from "../assets/avatar.png";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Expense");

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
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold transition"
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

      {/* Modal */}
{open && (
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
      <form className="space-y-4">

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Description
          </label>
          <input
            type="text"
            placeholder="e.g. Grocery Shopping"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Amount + Date */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-sm font-medium text-gray-600">
              Amount
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Date
            </label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Category
          </label>
          <select className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Salary</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-4">

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className={`px-6 py-2 rounded-xl text-white font-semibold shadow-lg transition ${
              type === "Income"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Save Transaction
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