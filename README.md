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
