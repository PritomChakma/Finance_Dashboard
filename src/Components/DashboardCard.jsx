import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const DashboardCard = () => {
  const lineData = [
    { month: "Jan", balance: 400 },
    { month: "Feb", balance: 800 },
    { month: "Mar", balance: 600 },
    { month: "Apr", balance: 1000 },
  ];

  const pieData = [
    { name: "Income", value: 1000 },
    { name: "Expense", value: 300 },
    { name: "Savings", value: 200 },
  ];

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

  return (
    <div >


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Balance */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className="bg-yellow-100 p-4 rounded-xl">
            <i className="fa-solid fa-wallet text-yellow-500 text-2xl"></i>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase">Total Balance</p>
            <p className="text-2xl font-bold">$500</p>
          </div>
        </div>

        {/* Income */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-xl">
            <i className="fa-solid fa-arrow-up text-green-500 text-2xl"></i>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase">Total Income</p>
            <p className="text-2xl font-bold">$1000</p>
          </div>
        </div>

        {/* Expense */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className="bg-red-100 p-4 rounded-xl">
            <i className="fa-solid fa-arrow-down text-red-500 text-2xl"></i>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase">Total Expense</p>
            <p className="text-2xl font-bold">$300</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>

          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 10 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Income vs Expense</h2>

          <div className="w-full h-64 flex justify-center items-center">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCard;