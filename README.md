# FullStack Chatbot Task - Nitin Yadav

A full-stack customer/student support and enquiry management web application built using React.js, TypeScript, Node.js, Express.js, and MongoDB.

The application provides a rule-based chatbot for answering predefined user queries, an enquiry submission system for customers/students, secure admin authentication, and an admin dashboard for managing enquiries.

---

## 📌 Project Overview

This project was developed as a Full Stack Chatbot and Lead/Enquiry Assistant application.

The main purpose of the application is to provide:

- Customer/student support through a predefined chatbot
- Enquiry collection through a structured form
- Secure admin authentication
- Centralized enquiry management
- Search and filtering functionality
- Enquiry status management
- CRUD operations
- MongoDB database integration
- Form validation and error handling
- Basic backend security

The chatbot uses predefined/rule-based responses and does not require an external AI/LLM API.

---

# 🎯 Objectives

The main objectives of this project are:

1. Build a responsive React.js + TypeScript frontend.
2. Develop a functional rule-based chatbot.
3. Collect customer/student enquiries.
4. Store enquiry information in MongoDB.
5. Develop REST APIs using Node.js and Express.js.
6. Implement CRUD operations for enquiries.
7. Provide secure admin authentication using JWT.
8. Create an admin dashboard for enquiry management.
9. Implement search and filtering.
10. Provide enquiry status management.
11. Implement form validation and error handling.
12. Apply basic security practices to the backend.

---

# 🛠️ Technologies Used

## Frontend

- React.js
- TypeScript
- Vite
- React Router DOM
- Axios
- CSS
- Lucide React

## Backend

- Node.js
- Express.js
- TypeScript
- Mongoose
- JWT
- bcryptjs
- Helmet
- Express Rate Limit
- CORS
- dotenv

## Database

- MongoDB
- MongoDB Atlas

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- PowerShell
- Chrome DevTools

---

# ✨ Features

## 1. Responsive Frontend

The application provides a responsive user interface developed using React.js and TypeScript.

Main frontend pages include:

- Home
- Services
- Enquiry
- Admin Login
- Admin Dashboard
- Enquiry Details
- Not Found

---

## 2. Rule-Based Chatbot

The application includes a predefined/rule-based chatbot.

The chatbot can respond to predefined queries related to:

- Training
- Drone services
- GIS & Mapping
- AI & Technology
- Career
- Business
- General enquiries

The chatbot does not use an external AI/LLM API.

### Chatbot Flow

Step 2: Install Frontend Dependencies

Open terminal:

cd client

Install dependencies:

npm install
Step 3: Install Backend Dependencies

Open another terminal:

cd server

Install dependencies:

npm install
5. Environment Variables

Create a .env file inside the server folder:

server/.env

Add the following variables:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
Example
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/fullstack_chatbot

JWT_SECRET=your_super_secret_key

For MongoDB Atlas, use your MongoDB Atlas connection string.

Important

Do not upload .env to GitHub because it contains sensitive configuration.

6. Database Setup

This project uses MongoDB with Mongoose.

MongoDB Local

Install and start MongoDB locally.

Example database:

fullstack_chatbot

MongoDB connection:

MONGO_URI=mongodb://127.0.0.1:27017/fullstack_chatbot
MongoDB Atlas

Alternatively, create a MongoDB Atlas cluster and add its connection string to:

server/.env

Example:

MONGO_URI=your_mongodb_atlas_connection_string
Main Collections
Users

Stores admin account information.

{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "HASHED_PASSWORD",
  "role": "admin"
}
Enquiries

Stores customer/student enquiry information.

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
7. API Endpoints
Authentication
Admin Login
POST /api/auth/login

Request:

{
  "email": "admin@example.com",
  "password": "Admin@123"
}
Chatbot
Get Chatbot Response
POST /api/chat

Used for predefined/rule-based chatbot responses.

Enquiry APIs
Create Enquiry
POST /api/enquiries

Public endpoint used by customers/students.

Example request:

{
  "name": "Nitin Yadav",
  "email": "nitin@example.com",
  "phone": "9876543210",
  "userType": "student",
  "category": "training",
  "company": "Lloyd Institute",
  "message": "I want to know more about training."
}
Get All Enquiries
GET /api/enquiries

Admin authentication required.

Get Enquiry By ID
GET /api/enquiries/:id

Admin authentication required.

Update Enquiry
PUT /api/enquiries/:id

Example:

{
  "status": "in-progress"
}

Available statuses:

new
in-progress
resolved
closed
Delete Enquiry
DELETE /api/enquiries/:id

Admin authentication required.

8. Screenshots

The following screenshots demonstrate the main functionality of the application.

Home Page

Add screenshot here:

02_Screenshots/home.png
Chatbot

Add screenshot here:

02_Screenshots/chatbot.png
Enquiry Form

Add screenshot here:

02_Screenshots/enquiry-form.png
Admin Login

Add screenshot here:

02_Screenshots/admin-login.png
Admin Dashboard

Add screenshot here:

02_Screenshots/admin-dashboard.png
Search and Filtering

Add screenshot here:

02_Screenshots/search-filter.png
Enquiry Details

Add screenshot here:

02_Screenshots/enquiry-details.png
MongoDB Database

Add screenshot here:

02_Screenshots/mongodb.png
9. How to Run Frontend and Backend
Run Backend

Open PowerShell terminal:

cd server

Install dependencies:

npm install

Start backend:

npm run dev

Backend will run on:

http://localhost:5000
Run Frontend

Open another PowerShell terminal:

cd client

Install dependencies:

npm install

Start frontend:

npm run dev

Frontend will run on:

http://localhost:5173
Application URLs
Page	URL
Home	http://localhost:5173
Enquiry	http://localhost:5173/enquiry
Admin Login	http://localhost:5173/login
Admin Dashboard	http://localhost:5173/admin/dashboard
Project Flow
User
 │
 ▼
React + TypeScript Frontend
 │
 ├── Chatbot
 │
 ├── Enquiry Form
 │
 └── Admin Login
       │
       ▼
Node.js + Express Backend
       │
       ├── Authentication
       ├── Chatbot API
       └── Enquiry APIs
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
GitHub Repository

https://github.com/Ny8948/FullStack_Chatbot_Task_Nitin_Yadav
