import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icon.png";
import { useRole } from "../Context/RoleContext";

const Sidebar = () => {
  const { role, setRole } = useRole();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
        <div className="flex justify-center items-center gap-2 text-2xl font-semibold">
          <img src={logo} alt="" className="w-10" />
          <h1 className="text-xl font-bold text-blue-500">FinTrack</h1>
        </div>
        <button onClick={() => setOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-5 flex flex-col justify-between z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* Header */}
        <div>
          <div className="pb-4 border-b border-gray-200 flex items-center gap-3">
            <img src={logo} alt="" className="w-10" />
            <h1 className="text-xl font-bold text-blue-500">FinTrack</h1>
          </div>

          {/* Menu */}
          <nav className="mt-6 flex flex-col gap-2">
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
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

          <div className="flex gap-3">
            <button
              onClick={() => setRole("admin")}
              className={`flex-1 py-2 rounded-xl font-semibold transition-all shadow-sm
              ${
                role === "admin"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Admin
            </button>

            <button
              onClick={() => setRole("viewer")}
              className={`flex-1 py-2 rounded-xl font-semibold transition-all shadow-sm
              ${
                role === "viewer"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Viewer
            </button>
          </div>

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
    </>
  );
};

export default Sidebar;
