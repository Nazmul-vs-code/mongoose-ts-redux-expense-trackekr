# 💰 Expense Tracker

<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=6366F1&center=true&vCenter=true&width=700&lines=Expense+Tracker;Track+Your+Money+Smarter;Next.js+%2B+MongoDB+%2B+Redux"
    alt="Typing SVG"
  />
</p>

<p align="center">
  A modern, responsive full-stack expense management application built with
  <strong>Next.js, TypeScript, Redux Toolkit, Mongoose, MongoDB, Tailwind CSS and DaisyUI.</strong>
</p>

<p align="center">
  <a href="YOUR_LIVE_URL">
    <img src="https://img.shields.io/badge/Live-Demo-6366F1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
  <a href="YOUR_GITHUB_URL">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>

---

## ✨ Overview

**Expense Tracker** is a full-stack web application designed to help users
manage their daily expenses in a simple and organized way.

Users can:

- ➕ Add new expenses
- 📋 View all expenses
- ✏️ Edit existing expenses
- 🗑️ Delete expenses
- 🏷️ Categorize expenses
- 📅 Select expense dates
- 🔔 Receive success and error notifications
- 📱 Use the application on different screen sizes

The application uses **Next.js Route Handlers** as the backend, so the entire
project is built inside a single Next.js application.

---

## 🚀 Features

<table>
<tr>
<td width="50%">

### 💰 Expense Management

- Create expenses
- Read expenses
- Update expenses
- Delete expenses
- MongoDB persistence
- Mongoose validation

</td>

<td width="50%">

### 🎨 User Interface

- Responsive design
- DaisyUI components
- Clean dashboard
- Interactive modals
- Category badges
- Toast notifications
- Mobile-friendly layout

</td>
</tr>

<tr>
<td width="50%">

### 🧠 State Management

- Redux Toolkit
- Centralized expense state
- Instant UI updates
- Typed Redux store
- Redux actions for CRUD

</td>

<td width="50%">

### ⚡ Developer Experience

- TypeScript
- Next.js App Router
- Reusable components
- API service layer
- Environment variables
- Clean project structure

</td>
</tr>
</table>

---

# 🛠️ Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=nextjs,typescript,react,tailwind,mongodb,git,github" />

</p>

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **React Hot Toast**

### State Management

- **Redux Toolkit**
- **React Redux**

### Backend

- **Next.js Route Handlers**
- **Mongoose**
- **MongoDB**

### Development

- **Git**
- **GitHub**
- **Vercel**

---

# 🏗️ Architecture

The application follows a simple full-stack architecture:

```text
┌───────────────────────┐
│       React UI        │
│   Next.js Components  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│    Redux Toolkit      │
│   Global App State    │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│     Fetch API         │
│   API Service Layer   │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Next.js Route Handler │
│       REST API        │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│       Mongoose        │
│     MongoDB Model     │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│       MongoDB         │
│     Expense Data      │
└───────────────────────┘