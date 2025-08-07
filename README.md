# 🔐 Full-Stack Authentication System  
**React + Express + MySQL JWT Authentication**

![Authentication Flow](https://i.imgur.com/placeholder.png)  

---

## ✨ Features

- ✅ JWT Authentication with HTTP-only cookies  
- ✅ Protected routes in React  
- ✅ MySQL database with password hashing  
- ✅ Rate-limited login (5 attempts/15 mins)  
- ✅ Postman-tested API endpoints  

---

## 📂 Project Structure  

### 📦 Backend (Express)
```bash
server/
├── controllers/
│ ├── authController.js
│ └── profileController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── authModel.js
│ └── profileModel.js
├── routes/
│ ├── authRoutes.js
│ └── profileRoutes.js
├── config/
│ └── db.js
├── .env
├── index.js
├── package.json
```

### 💻 Frontend (React)
```bash
client/
├── src/
│   ├── api/
│   │   ├── axiosClient.js
│   ├── auth/
│   │   ├── AuthContext.jsx
│   │   ├── useAuth.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── NotFound.jsx
|   |   ├── ErrorMessage.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │   └── Login.jsx
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
```
---

## 🚀 Quick Start  

### 🔧 Backend Setup

```bash
cd server
npm install
Create a .env file in server/ and configure:

DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_secret_key
NODE_ENV=dev
```
###  💻 Frontend Setup

```bash 
cd client
npm install
Create a .env file in client/ and configure:

VITE_API_URL=http://localhost:5000
```
### ▶️ Run Both Servers
#### In two terminals:

```bash 
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm run dev
```
## 🚀 Quick Start  

| Endpoint             | Method | Description               |
| -------------------- | ------ | ------------------------- |
| `/auth/register`     | POST   | Register new user         |
| `/auth/login`        | POST   | Login with credentials    |
| `/auth/connect-user` | GET    | Get logged-in user        |
| `/user/profile`      | GET    | Get user profile (secure) |
| `/auth/logout`      | GET    | logout from applicaton     |

## 🚀 Quick Start  
### 📥 Register User

```http

POST http://localhost:5000/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}

```
### 🔐 Login
```http
POST http://localhost:5000/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

### 👤 Get Profile (Protected)
```http
GET http://localhost:5000/user/profile
Cookie: token=YOUR_JWT_TOKEN
```
## 🛠️ Technologies Used

- Frontend: React, Vite, TailwindCSS, axios
- Backend: Express.js, MySQL2

- Security: bcryptjs, JWT, cookie-parser

- Rate Limiting: express-rate-limit

