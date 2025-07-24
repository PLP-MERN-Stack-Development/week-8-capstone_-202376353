# Leave Management App - Built by Sinothando Johnson 🌸

## Project Overview
This is a full-stack Leave Management Application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with **JWT Authentication**. It supports role-based access for **Users** and **Admins**, where users can apply for leave, and admins can manage requests.

---

## Features
- User Registration & Login (JWT Auth)
- Role-Based Dashboard (User/Admin)
- Leave Application Form
- Secure Token Storage (localStorage)
- React Context API for Auth State Management
- Protected Routes with React Router
- Responsive and Playful UI

---

## Tech Stack
- **Frontend**: React.js, Vite, React Router, React Icons, React Hot Toast
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt
- **Other**: dotenv, cors

---

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/202376353/week-8-capstone_-202376353.git

## Folder Structure

/server
  └── server.js
  └── models/User.js
  └── routes/authRoutes.js
  └── .env

/client
  └── src
      └── context/AuthContext.jsx
      └── pages/LoginPage.jsx
      └── pages/RegisterPage.jsx
      └── pages/Dashboard.jsx
      └── pages/LeaveForm.jsx
      └── pages/AdminDashboard.jsx
      └── App.jsx
      └── main.jsx


