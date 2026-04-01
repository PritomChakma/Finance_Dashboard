import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import "./index.css";
import { TransactionProvider } from "./Context/TransactionContext.jsx";
import { RoleProvider } from "./Context/RoleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RoleProvider>
     <TransactionProvider>
      <RouterProvider router={router} />
    </TransactionProvider>
   </RoleProvider>
  </StrictMode>
);