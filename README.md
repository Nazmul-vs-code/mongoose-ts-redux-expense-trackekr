# 💸 Expense Tracker

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=700&lines=Track+Every+Expense+%F0%9F%92%B8;Built+with+Next.js+%2B+MongoDB;Redux+Powered+State+Management;Simple.+Fast.+Responsive." alt="Typing SVG" />

<br />

<a href="https://mongoose-ts-redux.vercel.app/">
  <img src="https://img.shields.io/badge/%F0%9F%9A%80_Live_Demo-Visit_App-6366f1?style=for-the-badge" alt="Live Demo" />
</a>

<a href="https://github.com/Nazmul-vs-code">
  <img src="https://img.shields.io/badge/GitHub-Nazmul--vs--code-181717?style=for-the-badge&logo=github" alt="GitHub" />
</a>

<br /><br />

<img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" />
<img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" />
<img src="https://img.shields.io/badge/Redux_Toolkit-State_Management-764ABC?style=flat-square&logo=redux" />
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb" />
<img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=flat-square&logo=mongoose" />
<img src="https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=flat-square&logo=tailwindcss" />

</div>

---

## ✨ What is Expense Tracker?

**Expense Tracker** is a full-stack expense management application built with **Next.js, TypeScript, Redux Toolkit, Mongoose, and MongoDB**.

It allows users to:

* ➕ Add expenses
* 👀 View all expenses
* ✏️ Edit existing expenses
* 🗑️ Delete expenses
* 🏷️ Organize expenses by category
* 📅 Track expense dates
* 💰 View expense amounts
* 🔄 Keep frontend state synchronized with the database

The application uses **Next.js Route Handlers as the backend**, so there is no separate Express server.

```text
┌─────────────────────────────────────────────┐
│              Expense Tracker               │
├─────────────────────────────────────────────┤
│                                             │
│   Next.js Frontend                          │
│          ↓                                  │
│   Fetch API                                 │
│          ↓                                  │
│   Next.js API Route Handlers                │
│          ↓                                  │
│   Mongoose                                  │
│          ↓                                  │
│   MongoDB                                   │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🌐 Live Application

### 🚀 Try it here

**[Open Expense Tracker →](https://mongoose-ts-redux.vercel.app/)**

> The application is deployed on **Vercel** and uses MongoDB for persistent data storage.

---

# 🎯 Features

<table>
<tr>
<td width="50%">

### 💰 Expense Management

* Create expenses
* Read expenses
* Update expenses
* Delete expenses
* Persistent MongoDB storage

</td>

<td width="50%">

### 🏷️ Categories

* 🍔 Food
* 🚗 Transport
* 🛍️ Shopping
* 📦 Others

</td>
</tr>

<tr>
<td>

### ⚡ Frontend

* Next.js App Router
* React
* TypeScript
* Redux Toolkit
* Responsive UI
* DaisyUI components
* Toast notifications

</td>

<td>

### 🔐 Backend

* Next.js API Routes
* Mongoose
* MongoDB
* REST-style endpoints
* Environment variables
* Server-side database connection

</td>
</tr>
</table>

---

# 🧠 How It Works

The application follows a simple full-stack architecture.

```mermaid
flowchart LR

    A[👤 User] --> B[🖥️ Next.js UI]

    B --> C[⚡ Redux Store]

    B --> D[🌐 Fetch API]

    D --> E[🚀 Next.js API Routes]

    E --> F[🧩 Mongoose]

    F --> G[(🍃 MongoDB)]

    G --> F
    F --> E
    E --> D
    D --> C
    C --> B
```

### 🔄 Example: Creating an Expense

```text
User fills form
      ↓
ExpenseForm
      ↓
createExpense()
      ↓
POST /api/expenses
      ↓
Next.js Route Handler
      ↓
Mongoose
      ↓
MongoDB
      ↓
Created Expense returned
      ↓
Redux Store updated
      ↓
UI updates instantly
```

---

# 🗂️ Project Structure

```text
expense-tracker/
│
├── src/
│   │
│   ├── app/
│   │   ├── add-expense/
│   │   │   └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── expenses/
│   │   │       ├── route.ts
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   │
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ExpenseForm.tsx
│   │   ├── ExpenseList.tsx
│   │   ├── EditExpenseModal.tsx
│   │   └── DeleteExpenseModal.tsx
│   │
│   ├── lib/
│   │   └── mongodb.ts
│   │
│   ├── models/
│   │   └── Expense.ts
│   │
│   ├── redux/
│   │   ├── Provider.tsx
│   │   ├── store.ts
│   │   └── features/
│   │       └── expenseSlice.ts
│   │
│   └── services/
│       └── expenseApi.ts
│
├── .env.local
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

# 🧩 Tech Stack

<div align="center">

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| ⚛️ React           | UI development          |
| ▲ Next.js          | Full-stack framework    |
| 🔷 TypeScript      | Type safety             |
| 🟣 Redux Toolkit   | Global state management |
| 🍃 MongoDB         | Database                |
| 🧩 Mongoose        | MongoDB ODM             |
| 🎨 Tailwind CSS    | Styling                 |
| 💠 DaisyUI         | UI components           |
| 🔔 React Hot Toast | Notifications           |
| 🚀 Vercel          | Deployment              |

</div>

---

# 🛠️ Developer Setup

Want to run this project locally?

Follow the steps below.

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Nazmul-vs-code/mongoose-ts-redux.git
```

Then:

```bash
cd mongoose-ts-redux
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

## 3️⃣ Create environment variables

Create:

```text
.env.local
```

Add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Example

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expense_tracker
```

> ⚠️ Never commit `.env.local` to GitHub.

Make sure `.env.local` is included in `.gitignore`:

```gitignore
.env*
```

---

# 🍃 MongoDB Setup

You can use **MongoDB Atlas** for the database.

Your connection string should look similar to:

```text
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
```

The application reads it through:

```ts
process.env.MONGODB_URI
```

The database connection is handled by:

```text
src/lib/mongodb.ts
```

---

# 🚀 Run the Development Server

Start the project:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

You should see the Expense Tracker dashboard.

---

# 🔌 API Documentation

The backend is implemented using **Next.js Route Handlers**.

Base URL:

```text
/api/expenses
```

---

## 📌 Expense Object

An expense looks like this:

```json
{
  "_id": "6abf4e2a3209531200ff6c63",
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-10-02T00:00:00.000Z",
  "createdAt": "2026-10-02T06:24:42.800Z",
  "updatedAt": "2026-10-02T06:24:42.800Z"
}
```

---

# 📡 API Routes

| Method   | Endpoint            | Purpose           |
| -------- | ------------------- | ----------------- |
| `GET`    | `/api/expenses`     | Get all expenses  |
| `POST`   | `/api/expenses`     | Create an expense |
| `GET`    | `/api/expenses/:id` | Get one expense   |
| `PUT`    | `/api/expenses/:id` | Update an expense |
| `DELETE` | `/api/expenses/:id` | Delete an expense |

---

# 🟢 GET — Get All Expenses

### Endpoint

```http
GET /api/expenses
```

### Example

```bash
curl http://localhost:3000/api/expenses
```

### Response

```json
[
  {
    "_id": "6abf4e2a3209531200ff6c63",
    "title": "Lunch",
    "amount": 250,
    "category": "Food",
    "date": "2026-10-02T00:00:00.000Z"
  }
]
```

---

# 🟢 POST — Create Expense

### Endpoint

```http
POST /api/expenses
```

### Request body

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-10-02"
}
```

### JavaScript example

```ts
const response = await fetch("/api/expenses", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Lunch",
    amount: 250,
    category: "Food",
    date: "2026-10-02",
  }),
});

const data = await response.json();
```

### Successful response

```json
{
  "_id": "6abf4e2a3209531200ff6c63",
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-10-02T00:00:00.000Z"
}
```

---

# 🔵 GET — Get One Expense

### Endpoint

```http
GET /api/expenses/:id
```

Example:

```http
GET /api/expenses/6abf4e2a3209531200ff6c63
```

This endpoint retrieves a single expense using its MongoDB `_id`.

---

# 🟡 PUT — Update Expense

### Endpoint

```http
PUT /api/expenses/:id
```

### Example request

```json
{
  "title": "Dinner",
  "amount": 350,
  "category": "Food",
  "date": "2026-10-02"
}
```

### JavaScript example

```ts
const response = await fetch(
  `/api/expenses/${id}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Dinner",
      amount: 350,
      category: "Food",
      date: "2026-10-02",
    }),
  }
);

const data = await response.json();
```

---

# 🔴 DELETE — Delete Expense

### Endpoint

```http
DELETE /api/expenses/:id
```

Example:

```ts
const response = await fetch(
  `/api/expenses/${id}`,
  {
    method: "DELETE",
  }
);

const deletedExpense = await response.json();
```

The expense is removed from MongoDB and then removed from the Redux state.

---

# 🧬 MongoDB Model

The application uses a Mongoose schema:

```ts
const expenseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      enum: [
        "Food",
        "Transport",
        "Shopping",
        "Others",
      ],
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
```

Mongoose automatically adds:

```text
createdAt
updatedAt
```

---

# 🧠 Redux Architecture

Redux Toolkit manages the application's client-side expense state.

```text
                  Redux Store
                      │
                      ▼
              ┌───────────────┐
              │ Expense Slice │
              └───────┬───────┘
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   setExpenses     addExpense    updateExpense
                                      │
                                      ▼
                                deleteExpense
```

The slice contains four main actions:

```ts
setExpenses()
addExpense()
updateExpense()
deleteExpense()
```

---

# 🌐 API Service Layer

Instead of writing `fetch()` calls throughout the components, API communication is centralized inside:

```text
src/services/expenseApi.ts
```

It contains:

```ts
getExpenses()
getExpense()
createExpense()
updateExpense()
deleteExpense()
```

This keeps the UI components cleaner and makes the API logic reusable.

---

# 🖥️ User Guide

## 1. View Expenses

Open the home page:

```text
/
```

You can see all expenses stored in the database.

Each expense displays:

* Title
* Amount
* Category
* Date
* Edit button
* Delete button

---

## 2. Add an Expense

Click:

```text
Add Expense
```

Or visit:

```text
/add-expense
```

Fill in:

```text
Title
Amount
Category
Date
```

Then click:

```text
Add Expense
```

The application will:

```text
Form
 ↓
API
 ↓
MongoDB
 ↓
Redux
 ↓
Updated UI
```

---

## 3. Edit an Expense

Click:

```text
Edit
```

A modal opens with the existing expense information.

Change the values and click:

```text
Update Expense
```

The database and Redux state are updated.

---

## 4. Delete an Expense

Click:

```text
Delete
```

A confirmation modal appears.

After confirmation:

```text
MongoDB record
      ↓
Deleted
      ↓
Redux state
      ↓
Updated UI
```

---

# 📱 Responsive Design

The application is designed to work across:

```text
📱 Mobile
   ↓
📲 Tablet
   ↓
💻 Desktop
   ↓
🖥️ Large Screens
```

The expense table and form adapt to different screen sizes.

---

# 🔔 User Feedback

The application uses toast notifications to communicate important actions.

Examples:

```text
🎉 Expense added successfully!

🎉 Expense updated successfully!

🗑️ Expense deleted successfully!

❌ Failed to add expense
```

---

# 🛡️ Environment Variables

| Variable      | Required | Description                        |
| ------------- | -------: | ---------------------------------- |
| `MONGODB_URI` |        ✅ | MongoDB database connection string |

### Local

```env
MONGODB_URI=your_mongodb_connection_string
```

### Vercel

Add the same variable from:

```text
Vercel
 → Project
 → Settings
 → Environment Variables
```

Then redeploy the project.

> 🔐 Environment variables contain sensitive credentials. Never expose your MongoDB connection string in frontend code or commit it to GitHub.

---

# ☁️ Deployment

The project is deployed using **Vercel**.

### Production URL

```text
https://mongoose-ts-redux.vercel.app/
```

### Deployment flow

```text
GitHub
   │
   ▼
Vercel
   │
   ├── Next.js Frontend
   │
   ├── API Route Handlers
   │
   └── Environment Variables
             │
             ▼
          MongoDB
```

---

# 🧪 Development Workflow

A typical development cycle looks like:

```text
💡 Feature Idea
      ↓
🧩 Component
      ↓
🌐 API Service
      ↓
🚀 Route Handler
      ↓
🍃 MongoDB
      ↓
🔄 Redux Update
      ↓
🧪 Test
      ↓
🚀 Deploy
```

---

# 📚 What This Project Demonstrates

This project was built to practice real-world full-stack concepts rather than only UI development.

### Frontend

* Next.js App Router
* React components
* TypeScript
* Client-side state management
* Form handling
* Responsive UI
* API integration

### Backend

* Next.js Route Handlers
* REST-style API design
* HTTP methods
* Request/response handling
* Error handling
* Environment variables

### Database

* MongoDB
* Mongoose
* Schema design
* Validation
* CRUD operations
* Timestamps

### State Management

* Redux Toolkit
* Redux Provider
* Redux slices
* Actions
* Selectors
* State synchronization

---

# 🧭 API Architecture at a Glance

```text
                 ┌────────────────────┐
                 │      Browser       │
                 └─────────┬──────────┘
                           │
                        fetch()
                           │
                           ▼
                 ┌────────────────────┐
                 │ Next.js API Layer  │
                 │                    │
                 │ /api/expenses      │
                 │ /api/expenses/:id  │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │      Mongoose      │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │      MongoDB       │
                 └────────────────────┘
```

---

# 🚦 HTTP Methods Used

```text
POST    → Create
GET     → Read
PUT     → Update
DELETE  → Delete
```

The application therefore follows a simple CRUD architecture:

```text
       C
       ↓
   CREATE
       │
       ▼
   DATABASE
       │
       ▼
       R
     READ
       │
   ┌───┴───┐
   ▼       ▼
 UPDATE   DELETE
   U        D
```

---

# 🔮 Future Improvements

The current application focuses on core expense management.

Possible future improvements include:

* 📊 Expense analytics
* 🥧 Category-based charts
* 🔎 Category filtering
* 📅 Date-range filtering
* 📈 Monthly expense reports
* 👤 Authentication
* 👥 User-specific expenses
* 🌙 Dark mode
* 📤 CSV export
* 📥 CSV import
* 💰 Monthly budgets
* 🔔 Budget notifications
* 📱 Improved mobile dashboard

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### 1. Fork the project

```bash
git fork
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

```bash
git add .
```

### 4. Commit

```bash
git commit -m "feat: add your feature"
```

### 5. Push

```bash
git push origin feature/your-feature
```

### 6. Open a Pull Request

---

# 👨‍💻 Developer

<div align="center">

### Nazmul Huda

**Full Stack Web Developer**

Building modern web applications with
**Next.js • React • TypeScript • MongoDB**

<br />

<a href="https://github.com/Nazmul-vs-code">
  <img src="https://img.shields.io/badge/GitHub-Nazmul--vs--code-181717?style=for-the-badge&logo=github" />
</a>

</div>

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps support the project and encourages more development.

<br />

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=gradient" />

### Built with ☕ + 💻 + curiosity

**Next.js × TypeScript × Redux × Mongoose × MongoDB**

</div>
