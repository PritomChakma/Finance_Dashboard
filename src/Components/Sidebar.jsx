import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-5 flex flex-col justify-between">

      {/* Header */}
      <div>

        <div className="pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-500">
            FinTrack
          </h1>
        </div>

        {/* Menu */}
        <nav className="mt-6 flex flex-col gap-2">

          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-lg transition font-medium ${
              isActive("/dashboard")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/transactions"
            className={`px-4 py-2 rounded-lg transition font-medium ${
              isActive("/transactions")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Transactions
          </Link>

        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-4">

        <p className="text-xs text-gray-400 uppercase">
          Current Role
        </p>

        <p className="text-sm font-semibold text-gray-700">
          Admin
        </p>

      </div>
    </div>
  );
};

export default Sidebar;