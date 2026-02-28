# Task Manager API (Assignment)

## 🚀 Features

### Backend
- User Authentication (JWT)
- Password hashing (bcrypt)
- Role-based access (User/Admin)
- CRUD APIs for tasks
- Error handling
- Protected routes

### Frontend
- User Registration & Login
- Dashboard with tasks
- Create, Update, Delete tasks
- API integration using Axios

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- React.js
- JWT Authentication

---

## ⚙️ Setup Instructions

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm run dev

---

## 🔗 API Endpoints

### Auth
POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks
GET /api/v1/tasks  
POST /api/v1/tasks  
PUT /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## 🔐 Authorization

Use JWT token in headers:

Authorization: Bearer <token>

---

## 📦 API Testing

Postman collection is included in:

docs/task-manager.postman_collection.json

---

## 📈 Scalability

- Modular architecture
- JWT stateless authentication
- Can scale using microservices
- Can add Redis caching
- Can deploy using Docker & load balancing

---

## ✨ Future Improvements

- Input validation (Joi)
- Swagger API docs
- Role-based UI
- Logging system
