# Full Stack Task Tracker Application

This project is a **full stack task management system** built as part of a hiring assignment.
It allows users to register, log in, and manage their personal tasks. The system also includes **role-based access control**, where admin users can manage other users and view all tasks.

The project consists of two main parts:

* **Backend API** built with Node.js, Express, Prisma, and SQLite
* **Frontend Application** built with React

The goal of this project was to demonstrate practical skills in:

* Backend API development
* Authentication and security
* Role-based authorization
* Frontend development
* API integration
* Testing

---

# Project Architecture

The application follows a simple **client-server architecture**.

Frontend → React application
Backend → REST API built using Express
Database → SQLite managed through Prisma ORM

The frontend communicates with the backend using HTTP requests and JWT authentication.

---

# Tech Stack

## Backend

* Node.js
* Express.js
* Prisma ORM
* SQLite Database
* JWT Authentication
* bcrypt password hashing
* Jest + Supertest for testing

## Frontend

* React
* React Router
* Axios
* CSS
* Jest + React Testing Library

---

# Features

## User Authentication

Users can create accounts and securely log in.

Features implemented:

* User registration
* Password hashing using bcrypt
* JWT token authentication
* Protected API routes

### Authentication APIs

POST /auth/register
POST /auth/login

After login, the backend returns a **JWT token** which is used for all protected API requests.

---

# User Roles

The system supports two roles:

User
Admin

Each user has a role stored in the database.

Example:

```
role: "user"
role: "admin"
```

---

# Admin Permissions

Admin users have additional privileges.

Admins can:

* View all registered users
* Delete users
* View all tasks in the system

Admin routes are protected using **role-based middleware**.

Example admin routes:

GET /users
DELETE /users/:id

If a non-admin user tries to access these routes, the API returns:

```
{
  "error": "Admin access required"
}
```

---

# How Admin Authentication Works

Authentication works in two layers.

### Step 1 – JWT Authentication

When a user logs in, the backend generates a JWT token containing the user's:

* id
* role

Example token payload:

```
{
  id: 1,
  role: "admin"
}
```

---

### Step 2 – Role Authorization

Admin routes use middleware:

authMiddleware → adminOnly → controller

authMiddleware verifies the JWT token.

adminOnly checks if the user role is **admin**.

If not, the request is rejected.

---

# How to Create an Admin User

By default, users register as **normal users**.

To make a user an admin:

1. Run Prisma Studio

```
npx prisma studio
```

2. Open the **User table**

3. Change the role field to:

```
admin
```

4. Save the changes.

5. Log in again with that account.

The user will now have admin privileges.

---

# Task Management

Users can create and manage their own tasks.

Each task contains:

* title (required)
* description (optional)
* status (pending / completed)
* createdAt timestamp

---

# Task APIs

POST /tasks
GET /tasks
PUT /tasks/:id
DELETE /tasks/:id

### Access Rules

Normal users:

* Can access only their own tasks

Admin users:

* Can access tasks created by all users

---

# Frontend Application

The frontend is built with **React** and connects to the backend API.

It provides:

* Register page
* Login page
* Dashboard
* Task management interface

---

# Dashboard Features

After login, users can:

* Create tasks
* View tasks
* Update task status
* Delete tasks
* Logout

The dashboard communicates with backend APIs using Axios.

---

# API Authentication

All protected API requests include a JWT token.

Example header:

```
Authorization: Bearer TOKEN
```

The frontend stores the token in **localStorage** after login.

---

# Project Structure

```
task-tracker-assignment
│
├── backend
│   ├── src
│   ├── prisma
│   └── tests
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   └── tests
│
├── README.md
└── package.json
```

---

# Running the Backend

Navigate to the backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=5000
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_secret_key
```

Run migrations:

```
npx prisma migrate dev
```

Start the server:

```
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

# Running the Frontend

Navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
REACT_APP_API_URL=http://localhost:5000
```

Start the React application:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# Running Tests

Backend tests:

```
npm test
```

Frontend tests:

```
npm test
```

---

# Security Measures

The project includes several basic security practices:

* Password hashing using bcrypt
* JWT authentication
* Role-based access control
* Protected routes
* Environment variables for secrets
* `.env` excluded from GitHub

---

# Possible Improvements

Future improvements could include:

* Pagination for tasks
* Advanced form validation
* API documentation with Swagger
* Rate limiting
* Better UI components
* Deployment support

---

# Author

Rakesh Reddy
Computer Science Student
Interested in Backend Development and Full Stack Development
