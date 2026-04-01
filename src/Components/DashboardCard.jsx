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
import { useTransaction } from "../Context/TransactionContext";


const DashboardCard = () => {
  const { transactions } = useTransaction();

  // ✅ Calculate Income, Expense, Balance
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income + expense;

  // ✅ Pie Chart Data
  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: Math.abs(expense) },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  // ✅ Line Chart Data
  const lineData = transactions.map((t, i) => ({
    name: `T${i + 1}`,
    value: t.amount,
  }));

  return (
    <div className="space-y-6">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Card title="Total Balance" value={balance} icon="wallet" color="yellow" />

        <Card title="Total Income" value={income} icon="arrow-up" color="green" />

        <Card
          title="Total Expense"
          value={Math.abs(expense)}
          icon="arrow-down"
          color="red"
        />

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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
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
                  outerRadius={80}
                  label
                >
                  {pieData.map((_, index) => (
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

// ✅ Reusable Card Component
const Card = ({ title, value, icon, color }) => {
  const bgColor = {
    yellow: "bg-yellow-100 text-yellow-500",
    green: "bg-green-100 text-green-500",
    red: "bg-red-100 text-red-500",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
      <div className={`p-4 rounded-xl ${bgColor[color]}`}>
        <i className={`fa-solid fa-${icon} text-2xl`}></i>
      </div>

      <div>
        <p className="text-sm text-gray-500 uppercase">{title}</p>
        <p className="text-2xl font-bold">${value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;