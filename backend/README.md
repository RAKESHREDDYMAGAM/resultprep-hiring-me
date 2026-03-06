# User Management & Task Tracker API

This project is a backend API built using **Node.js, Express, and Prisma**.
It allows users to register, log in, and manage their personal tasks.

The main goal of this project was to implement a **secure and clean backend system** with authentication, role-based access control, database integration, and testing.

This was developed as part of a **backend hiring assignment** to demonstrate practical backend development skills.

---

# Tech Stack

The technologies used in this project:

* Node.js
* Express.js
* Prisma ORM
* SQLite
* JWT (authentication)
* bcrypt (password hashing)
* Jest + Supertest (API testing)

---

# Features

## Authentication

Users can create an account and log in securely.

* User registration
* Password hashing using bcrypt
* Login with JWT token generation
* Protected routes using authentication middleware

### Endpoints

POST /auth/register
POST /auth/login

---

## User Roles

The system supports two types of users:

* **Admin**
* **User**

### Admin abilities

* View all registered users
* Delete users

### Normal user abilities

* Access their own account
* Create and manage their own tasks

---

## Task Management

Each user can manage their own tasks.

A task contains:

* **title** (required)
* **description** (optional)
* **status** (pending / completed)
* **createdAt**

### Task APIs

POST /tasks
GET /tasks
PUT /tasks/:id
DELETE /tasks/:id

### Access rules

* Normal users can only see and manage **their own tasks**
* Admin users can see **all tasks**

---

# Project Structure

```
backend
│
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   │
│   ├── routes
│   │   ├── authroutes.js
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   └── server.js
│
├── prisma
│   └── schema.prisma
│
├── tests
│   ├── auth.test.js
│   ├── login.test.js
│   └── task.test.js
│
├── package.json
├── .env.example
└── README.md
```

---

# Setup Instructions

### 1. Clone the repository

```
git clone <repository-url>
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create environment variables

Create a `.env` file in the root folder.

Example:

```
PORT=5000
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_secret_key
```

---

### 4. Run database migration

```
npx prisma migrate dev
```

This will create the database and apply the schema.

---

### 5. Start the development server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

# Running Tests

This project includes **basic API tests**.

Run them with:

```
npm test
```

Tests currently cover:

* User registration
* User login
* Task authorization behavior

---

# Security Considerations

A few basic security practices were implemented:

* Passwords are hashed using **bcrypt**
* Authentication is handled with **JWT**
* Protected routes require a valid token
* Sensitive values are stored in **environment variables**
* `.env` is excluded from version control

---

# Example API Request

### Register

POST /auth/register

```
{
  "email": "user@test.com",
  "password": "123456"
}
```

---

### Login

POST /auth/login

```
{
  "email": "user@test.com",
  "password": "123456"
}
```

Response returns a JWT token.

---

### Create Task

POST /tasks

Header:

```
Authorization: Bearer TOKEN
```

Body:

```
{
  "title": "Learn Node.js",
  "description": "Practice backend development"
}
```

---

# Possible Improvements

If this project were extended further, some improvements could include:

* Pagination for task lists
* Better request validation
* API documentation using Swagger
* Logging and monitoring
* Rate limiting

---

# Author

Rakesh Reddy
B.Sc Computer Science Student
Interested in Backend Development (Node.js / Express / Prisma)
