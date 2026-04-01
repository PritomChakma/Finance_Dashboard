import { Link, useLocation } from "react-router-dom";
import { useRole } from "../Context/RoleContext";

const Sidebar = () => {
  const { role, setRole } = useRole();
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
  <div className="border-t border-gray-200 pt-5 mt-5">
  <p className="text-xs text-gray-400 uppercase mb-3 tracking-wider">
    Select Role
  </p>

  {/* Button Toggle */}
  <div className="flex gap-3">
    {/* Admin Button */}
    <button
      onClick={() => setRole("admin")}
      className={`flex-1 py-2 rounded-xl font-semibold transition-all duration-300 shadow-sm
        ${
          role === "admin"
            ? "bg-blue-500 text-white shadow-lg scale-105"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      Admin
    </button>

    {/* Viewer Button */}
    <button
      onClick={() => setRole("viewer")}
      className={`flex-1 py-2 rounded-xl font-semibold transition-all duration-300 shadow-sm
        ${
          role === "viewer"
            ? "bg-green-500 text-white shadow-lg scale-105"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      Viewer
    </button>
  </div>

  {/* Current Role Display */}
  <div className="mt-4">
    <p className="text-sm text-gray-500">Current Role</p>
    <p
      className={`text-lg font-bold capitalize ${
        role === "admin" ? "text-blue-500" : "text-green-500"
      }`}
    >
      {role}
    </p>
  </div>
</div>
    </div>
  );
};

export default Sidebar;