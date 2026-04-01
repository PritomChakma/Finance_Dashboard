import { useState } from "react";
import { useRole } from "../Context/RoleContext";
import { useTransaction } from "../Context/TransactionContext";

const Transactions = () => {
  const { transactions, deleteTransaction } = useTransaction();
  const { role } = useRole();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // 🔍 Filter + Search + Sort
  const filteredTransactions = transactions
    .filter((item) => {
      const matchSearch = item.description
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter = filter === "all" ? true : item.category === filter;

      return matchSearch && matchFilter;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        {/* 🔍 Search Box */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
      transition-all duration-300 shadow-sm"
          />

          {/* Search Icon */}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
        </div>

        <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              filter === "all"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Income")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              filter === "Income"
                ? "bg-white text-green-600 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Income
          </button>

          <button
            onClick={() => setFilter("Expense")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              filter === "Expense"
                ? "bg-white text-red-600 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Expense
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-400">
                    No transactions found
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition group"
                  >
                    <td className="px-6 py-4 text-gray-600">{item.date}</td>

                    <td className="px-6 py-4 font-medium group-hover:text-blue-600">
                      {item.description}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          item.category === "Income"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>

                    <td
                      className={`px-6 py-4 font-bold ${
                        item.amount > 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {item.amount > 0 ? `+${item.amount}` : item.amount}
                    </td>

                    <td className="px-6 py-4">
                      {role === "admin" ? (
                        <button
                          onClick={() => deleteTransaction(item.id)}
                          className="text-red-500 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">No Access</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
