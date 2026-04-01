import { useEffect, useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/transactions.json")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            {/* Table Head */}
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider sticky top-0">
              <tr>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">

              {transactions.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition group"
                >

                  {/* Date */}
                  <td className="px-6 py-4 text-gray-600">
                    {item.date}
                  </td>

                  {/* Description */}
                  <td className="px-6 py-4 font-medium text-gray-800 group-hover:text-blue-600 transition">
                    {item.description}
                  </td>

                  {/* Category */}
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

                  {/* Amount */}
                  <td
                    className={`px-6 py-4 font-bold ${
                      item.amount > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.amount > 0 ? `+${item.amount}` : item.amount}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    

                   

                      <button className="text-red-500 hover:text-red-700 font-medium">
                        Delete
                      </button>

                
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;