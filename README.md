# TaskFlow SaaS - Backend 🚀

A secure and scalable REST API built with **Node.js**, **Express.js**, and **PostgreSQL** using **Sequelize ORM**.

## ✨ Features
- **Secure Authentication**: Signup and Login with JWT and Bcrypt hashing.
- **Strict Multi-tenancy**: Database queries are isolated by user ID for maximum data privacy.
- **Global Error Handling**: Centralized middleware for consistent API responses.
- **Deployment Ready**: Optimized for Railway with automatic database synchronization.

## 🛠 Tech Stack
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **PostgreSQL**: Robust relational database.
- **Sequelize**: ORM for database modeling and interactions.
- **JWT**: Secure token-based authentication.

## 🔌 API Endpoints

### Auth
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication

### Tasks (Protected)
- `GET /api/tasks` - Fetch user's tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task title/status
- `DELETE /api/tasks/:id` - Delete task

## 🚀 Deployment (Free Tier)

### 1. Database (Neon)
1. Use your Neon connection string as the `DATABASE_URL`.
2. The code is already configured to handle Neon's SSL requirements.

### 2. Server (Render)
1. Connect your GitHub repo to **Render.com**.
2. Create a **Web Service**.
3. Add Environment Variables:
   - `DATABASE_URL`: `postgresql://neondb_owner:npg_tb82SVhWZGec@ep-morning-mouse-an4a8keu.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require`
   - `JWT_SECRET`: `supersecretkey_change_me_in_production`
   - `NODE_ENV`: `production`

## 💻 Local Setup
1. Create a `.env` file based on the local requirements.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
