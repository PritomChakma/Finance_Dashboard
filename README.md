# 💰 Finance Dashboard UI

> A modern, responsive, and interactive finance dashboard built with React to track income, expenses, and transactions with role-based access control.

---

## 🌐 Live Demo

👉 [View Live Project](https://finance-dashboard-pritom.web.app/)

---

x`

## ✨ Features

### 📊 Dashboard Overview
- Total Balance, Income, and Expense summary cards
- Clean and modern UI design
- Responsive layout for all devices

### 🧾 Transactions Management
- Add new transactions (Admin only)
- Delete transactions (Admin only)
- View all transaction details:
  - Date
  - Description
  - Category
  - Amount

### 🔍 Smart Filtering & Search
- Search transactions by description
- Filter by:
  - All
  - Income
  - Expense
- Real-time results

### 🔐 Role-Based Access Control (Frontend Only)
- **Admin**
  - Can add transactions
  - Can delete transactions
- **Viewer**
  - Read-only access
- Role switching via UI

### 🎯 User Experience
- Smooth transitions & hover effects
- Clean and intuitive UI
- Empty state handling
- Mobile-first responsive design

---

## 🛠️ Tech Stack

- ⚛️ React.js
- 🎨 Tailwind CSS
- 🧠 Context API (State Management)
- ⚡ Vite
- 💻 JavaScript (ES6+)



---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository


git clone https://github.com/PritomChakma/Finance_Dashboard.git


### 2️⃣ Navigate to Project Folder


cd Finance_Dashboard


### 3️⃣ Install Dependencies


npm install


### 4️⃣ Run Development Server


npm run dev


---

## 🔐 Role System Logic

This project simulates role-based access on the frontend:

```jsx
{role === "admin" && (
  <button>Add Transaction</button>
)}
Roles:
Role	Permissions
Admin	Add, Delete, View
Viewer	View only
📊 State Management
useContext used for global state
Transactions stored in context
Role handled via RoleContext
Local states:
Search
Filter
Modal control
🧠 Key Learnings
Building scalable React component structure
Managing global state with Context API
Implementing role-based UI logic
Creating responsive UI with Tailwind CSS
Improving UX with filtering and search
🎨 UI & UX Highlights
Clean card-based layout
Smooth hover animations
Button-based role switcher
Responsive and mobile-friendly
Professional dashboard design
🚀 Future Improvements
📈 Add charts (Recharts)
💾 LocalStorage / Backend integration
🌙 Dark mode toggle
🔔 Toast notifications
📥 Export data (CSV / JSON)
🔐 Full authentication system
📷 Screenshots

Add your screenshots here

👨‍💻 Author

Pritom Chakma

🌐 Portfolio: https://pritomchakma-4a4c7.web.app
💻 GitHub: https://github.com/PritomChakma
💼 LinkedIn: https://www.linkedin.com/in/pritomchakma
📧 Email: chakmapritom1@gmail.com
🏁 Conclusion

This project demonstrates a clean, scalable, and user-friendly approach to building a frontend finance dashboard. It focuses on UI/UX, state management, and role-based access simulation.