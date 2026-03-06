# Task Tracker Frontend

This project is the **frontend application** for the User Management & Task Tracker system.
It is built using **React** and connects to the backend API to allow users to register, log in, and manage their tasks through a simple user interface.

The goal of this frontend was to demonstrate **UI development, API integration, authentication handling, and basic testing** as part of the hiring assignment.

---

# Tech Stack

Frontend technologies used in this project:

* React
* React Router
* Axios
* CSS
* Jest + React Testing Library

---

# Features

## Authentication Screens

The frontend provides two main authentication pages.

### Register Page

Users can create an account by providing:

* Email
* Password

The form validates inputs and sends a request to the backend:

POST /auth/register

If the registration is successful, the user is redirected to the login page.

---

### Login Page

Users can log in using their credentials.

The login form sends a request to:

POST /auth/login

If authentication succeeds:

* A **JWT token** is returned from the backend
* The token is stored in **localStorage**
* The user is redirected to the dashboard

---

# Dashboard

After logging in, the user is redirected to the **dashboard**.

The dashboard displays:

* Task creation form
* List of tasks
* Task status
* Buttons to update or delete tasks
* Logout option

The dashboard communicates with the backend using authenticated API requests.

---

# Task Management

Users can manage their tasks directly from the dashboard.

### Create Task

Users can create a task with:

* Title
* Description

Request sent:

POST /tasks

---

### View Tasks

All tasks for the logged-in user are fetched from:

GET /tasks

The dashboard displays them in a simple task list.

---

### Update Task Status

Users can toggle the task status between:

* pending
* completed

Request sent:

PUT /tasks/:id

---

### Delete Task

Users can remove tasks from the system.

Request sent:

DELETE /tasks/:id

---

# API Integration

All frontend API calls are handled using **Axios**.

A custom API instance is created to define the backend base URL and automatically attach the JWT token.

Example configuration:

* Base URL stored in environment variables
* Authorization header added automatically
* Token read from localStorage

Example header sent to backend:

Authorization: Bearer TOKEN

This ensures protected backend routes can be accessed.

---

# Protected Routes

The frontend checks if a JWT token exists in localStorage.

If the token is missing:

* The user is redirected to the login page

This prevents unauthorized access to the dashboard.

---

# Logout

The dashboard includes a logout button.

When clicked:

* The JWT token is removed from localStorage
* The user is redirected to the login page

---

# Project Structure

frontend
│
├── src
│   ├── pages
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Dashboard.js
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── tests
│   │   ├── Login.test.js
│   │   └── Dashboard.test.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
├── .env.example
└── README.md

---

# Setup Instructions

### 1. Clone the repository

git clone <repository-url>
cd frontend

---

### 2. Install dependencies

npm install

---

### 3. Configure environment variables

Create a `.env` file in the root directory.

Example:

REACT_APP_API_URL=http://localhost:5000

This is the backend API URL.

---

### 4. Start the development server

npm start

The application will run at:

http://localhost:3000

---

# Running Tests

The frontend includes basic component tests.

Run tests with:

npm test

Tests cover:

* Login component rendering
* Dashboard component rendering

---

# UI Design

The interface was designed to be:

* Simple
* Clean
* Responsive
* Easy to use

Basic CSS styling is used for layout, form inputs, buttons, and task cards.

---

# Error Handling

The frontend handles API errors and displays appropriate messages.

Examples include:

* Login failed
* Registration failed
* Unauthorized access
* Task operation failures

Backend error messages are shown to the user when available.

---

# Possible Improvements

Some improvements that could be added in the future:

* Better UI styling using a component library
* Improved form validation
* Pagination for large task lists
* Global state management
* Loading indicators
* Better error UI components

---

# Author

Rakesh Reddy
B.Sc Computer Science Student
Interested in Backend Development and Full Stack Development
