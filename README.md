# FullStack Chatbot Task - Nitin Yadav

A responsive full-stack **AI Support & Lead Assistant** web application built using React, TypeScript, Node.js, Express.js and MongoDB.

The application provides a rule-based chatbot for customer/student support, collects enquiries/leads through an enquiry form, and provides an admin dashboard for managing enquiries.

> **Note:** The chatbot uses predefined/rule-based responses. No real AI/LLM API is required.

---

## 1. Project Overview

The **AI Support & Lead Assistant** is a full-stack web application designed to help businesses, training institutes, and service providers handle customer/student enquiries.

The system provides:

- Customer support chatbot
- Service information
- Customer/student enquiry collection
- Admin authentication
- Admin dashboard
- Enquiry management
- Search and filtering
- Enquiry status management
- MongoDB database integration
- REST APIs
- JWT authentication
- Password hashing
- Form validation
- Responsive UI

---

## 2. Objectives

The main objectives of this project are:

- Provide quick responses to common customer questions.
- Collect customer/student enquiries through an online form.
- Store enquiry data securely in MongoDB.
- Provide an admin dashboard for enquiry management.
- Allow administrators to search and filter enquiries.
- Implement secure admin authentication.
- Provide a responsive and user-friendly interface.
- Demonstrate complete frontend and backend integration.

---

## 3. Features

### User Features

- Responsive home page
- Services page
- Rule-based chatbot
- Enquiry form
- Form validation
- Success/error messages
- Mobile responsive design

### Chatbot Features

- Floating chatbot button
- Open/close chatbot window
- Predefined responses
- Service-related responses
- Contact-related responses
- Pricing-related responses
- Enquiry guidance
- Unknown-question fallback response

### Admin Features

- Admin login
- JWT authentication
- Protected dashboard
- View enquiries
- Search enquiries
- Filter enquiries
- View enquiry details
- Update enquiry status
- Delete enquiries
- Logout

---

## 4. Technology Stack

### Frontend

- React.js
- TypeScript
- Vite
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- TypeScript
- REST API

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT
- bcryptjs
- Environment variables
- Input validation
- Protected routes
- CORS

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- MongoDB Compass
- MongoDB Atlas

---

## 5. Project Structure

```text
FullStack_Chatbot_Task_Nitin_Yadav/
│
├── client/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Chatbot.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── EnquiryForm.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Enquiry.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── AdminDashboard.tsx
│   │   │   └── NotFound.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── chatService.ts
│   │   │   └── enquiryService.ts
│   │   │
│   │   ├── types/
│   │   │   ├── chat.ts
│   │   │   ├── enquiry.ts
│   │   │   └── user.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── server/
│   │
│   ├── config/
│   │   └── db.ts
│   │
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── chatController.ts
│   │   └── enquiryController.ts
│   │
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   └── validationMiddleware.ts
│   │
│   ├── models/
│   │   ├── User.ts
│   │   └── Enquiry.ts
│   │
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── chatRoutes.ts
│   │   └── enquiryRoutes.ts
│   │
│   ├── services/
│   │   └── chatbotService.ts
│   │
│   ├── utils/
│   │   └── generateToken.ts
│   │
│   ├── server.ts
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md



## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Database Collections](#database-collections)
- [API Endpoints](#api-endpoints)
- [Flows](#flows)
- [Admin Dashboard](#admin-dashboard)
- [Search and Filtering](#search-and-filtering)
- [Validation](#validation)
- [Security](#security)
- [Screenshots](#screenshots)
- [Running the Application](#running-the-application)
- [Application URLs](#application-urls)
- [Project Architecture](#project-architecture)
- [Git Commands](#git-commands)
- [Future Scope](#future-scope)

---

## Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/Ny8948/FullStack_Chatbot_Task_Nitin_Yadav.git
cd FullStack_Chatbot_Task_Nitin_Yadav
```

### Step 2: Install Frontend Dependencies

```bash
cd client
npm install
```

### Step 3: Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder (`server/.env`):

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Example:**

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/fullstack_chatbot
JWT_SECRET=your_super_secret_key
```

For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

> **Important:** Do not upload `.env` to GitHub. It contains sensitive configuration such as MongoDB credentials, the JWT secret, and database connection information. Add `.env` to `.gitignore`.

---

## Database Setup

This project uses **MongoDB** with **Mongoose**.

### MongoDB Local

Install MongoDB Community Server and start the MongoDB service.

- Example database: `fullstack_chatbot`
- Connection string:

```env
MONGO_URI=mongodb://127.0.0.1:27017/fullstack_chatbot
```

MongoDB automatically creates the database when data is first inserted.

### MongoDB Atlas

1. Create a MongoDB Atlas cluster.
2. Copy the connection string.
3. Add it to `server/.env`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

---

## Database Collections

### Users Collection

Stores admin account information.

```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "HASHED_PASSWORD",
  "role": "admin"
}
```

The password is stored as a **bcrypt hash**, not plain text.

### Enquiries Collection

Stores customer/student enquiry information.

```json
{
  "name": "Nitin Yadav",
  "email": "nitin@example.com",
  "phone": "9876543210",
  "userType": "student",
  "category": "training",
  "company": "Lloyd Institute",
  "message": "I want to know more about training.",
  "status": "new",
  "source": "website-form"
}
```

---

## API Endpoints

### Authentication

#### Admin Login

`POST /api/auth/login`

Request:

```json
{
  "email": "admin@example.com",
  "password": "Admin@123"
}
```

A successful login returns a JWT token.

### Chatbot API

#### Get Chatbot Response

`POST /api/chat`

Used for predefined / rule-based chatbot responses.

Request:

```json
{
  "message": "What services do you provide?"
}
```

Response:

```json
{
  "reply": "We provide Web Development, Mobile App Development, UI/UX Design and Digital Solutions."
}
```

### Enquiry APIs

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/api/enquiries` | Public | Create an enquiry |
| `GET` | `/api/enquiries` | Admin | Get all enquiries |
| `GET` | `/api/enquiries/:id` | Admin | Get enquiry by ID |
| `PUT` | `/api/enquiries/:id` | Admin | Update an enquiry |
| `DELETE` | `/api/enquiries/:id` | Admin | Delete an enquiry |

#### Create Enquiry

```json
{
  "name": "Nitin Yadav",
  "email": "nitin@example.com",
  "phone": "9876543210",
  "userType": "student",
  "category": "training",
  "company": "Lloyd Institute",
  "message": "I want to know more about training."
}
```

#### Update Enquiry

```json
{
  "status": "in-progress"
}
```

Available statuses: `new`, `in-progress`, `resolved`, `closed`

---

## Flows

### Authentication Flow

```text
Admin
  │
  ▼
Login Page
  │
  ▼
POST /api/auth/login
  │
  ▼
Backend verifies email/password
  │
  ▼
bcrypt password comparison
  │
  ▼
JWT Token Generated
  │
  ▼
Token stored in localStorage
  │
  ▼
Protected Admin Dashboard
```

The frontend sends the token in the `Authorization` header:

```text
Authorization: Bearer YOUR_TOKEN
```

### Chatbot Flow

```text
User
  │
  ▼
Chatbot
  │
  ▼
User enters message
  │
  ▼
POST /api/chat
  │
  ▼
Chatbot Service
  │
  ▼
Rule-Based Matching
  │
  ├── Greeting
  ├── Services
  ├── Website
  ├── Mobile
  ├── Pricing
  ├── Contact
  └── Help
  │
  ▼
Bot Response
  │
  ▼
Chatbot UI
```

The chatbot does **not** require a real AI/LLM API.

### Enquiry Flow

```text
User
  │
  ▼
Enquiry Form
  │
  ▼
Frontend Validation
  │
  ▼
POST /api/enquiries
  │
  ▼
Express Backend
  │
  ▼
Validation
  │
  ▼
MongoDB
  │
  ▼
Enquiry Stored
  │
  ▼
Admin Dashboard
```

---

## Admin Dashboard

The admin dashboard provides:

- Total enquiries
- New enquiries
- In-progress enquiries
- Resolved enquiries
- Closed enquiries
- Search
- Filtering
- View enquiry
- Update status
- Delete enquiry
- Logout

---

## Search and Filtering

Admins can search enquiries by:

- Name
- Email
- Phone
- Service
- Category

Enquiries can also be filtered by status: **All**, **New**, **In Progress**, **Resolved**, **Closed**.

---

## Validation

Validation is performed on both the frontend and backend.

| Field | Rule |
|-------|------|
| Name | Required |
| Email | Required, valid email format |
| Phone | Required, valid phone number |
| Service/Category | Required |
| Message | Required, minimum length |

---

## Security

- JWT authentication
- bcrypt password hashing
- Protected admin routes
- Backend validation
- Frontend validation
- Environment variables
- CORS configuration
- No plain-text passwords
- No sensitive `.env` data in GitHub
- Centralized error handling

---

## Screenshots

The following screenshots demonstrate the main functionality of the application.

### Home Page
![Home Page](02_Screenshots/home.png)

### Chatbot
![Chatbot](02_Screenshots/chatbot.png)

### Enquiry Form
![Enquiry Form](02_Screenshots/enquiry-form.png)

### Admin Login
![Admin Login](02_Screenshots/admin-login.png)

### Admin Dashboard
![Admin Dashboard](02_Screenshots/admin-dashboard.png)

### Search and Filtering
![Search and Filtering](02_Screenshots/search-filter.png)

### Enquiry Details
![Enquiry Details](02_Screenshots/enquiry-details.png)

### MongoDB Database
![MongoDB Database](02_Screenshots/mongodb.png)

---

## Running the Application

### Run Backend

```powershell
cd server
npm install
npm run dev
```

Backend runs at: http://localhost:5000

### Run Frontend

Open another terminal:

```powershell
cd client
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

---

## Application URLs

| Page | URL |
|------|-----|
| Home | http://localhost:5173 |
| Services | http://localhost:5173/services |
| Enquiry | http://localhost:5173/enquiry |
| Admin Login | http://localhost:5173/login |
| Admin Dashboard | http://localhost:5173/admin/dashboard |

---

## Project Architecture

```text
                    USER
                      │
                      ▼
          ┌──────────────────────┐
          │ React + TypeScript   │
          │ Frontend             │
          └──────────┬───────────┘
                     │
                     ▼
               Axios / REST API
                     │
                     ▼
          ┌──────────────────────┐
          │ Node.js + Express    │
          │ Backend              │
          └──────────┬───────────┘
                     │
          ┌──────────┼───────────┐
          │          │           │
          ▼          ▼           ▼
     Authentication Chatbot   Enquiries
          │          │           │
          │          │           ▼
          │          │       MongoDB
          │          │           │
          └──────────┴───────────┘
                     │
                     ▼
             Admin Dashboard
```

### Complete Project Flow

```text
User
 │
 ├── Home
 │
 ├── Services
 │
 ├── Chatbot
 │      │
 │      └── Rule-Based Response
 │
 └── Enquiry Form
        │
        ▼
     Backend API
        │
        ▼
      MongoDB
        │
        ▼
   Admin Dashboard
        │
        ├── Search
        ├── Filter
        ├── View
        ├── Update
        └── Delete
```

---

## Git Commands

```bash
git init
git status
git add .
git commit -m "Initial commit - Full Stack Chatbot Task"
git branch -M main
git remote add origin https://github.com/Ny8948/FullStack_Chatbot_Task_Nitin_Yadav.git
git push -u origin main
```

---

## Future Scope

- Real AI/LLM integration
- Voice-based chatbot
- Email notifications
- WhatsApp integration
- Advanced analytics
- Lead scoring
- Role-based admin access
- File/document upload
- Customer accounts
- Automated follow-up notifications
- Deployment to cloud platforms
