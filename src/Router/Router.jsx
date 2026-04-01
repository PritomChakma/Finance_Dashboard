import { createBrowserRouter } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import DashBoard from "../Pages/DashBoard";
import Transactions from "../Pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        index: true,
        element: <DashboardCard></DashboardCard>,
      },
      {
        path: "/dashboard",
        element: <DashboardCard></DashboardCard>,
      },
      {
        path: "/transactions",
        element: <Transactions></Transactions>,
      },
    ],
  },
]);

export default router;
