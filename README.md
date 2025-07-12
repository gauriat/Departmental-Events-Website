# 🎉 Departmental Events Management System

🚀 **Project:** Departmental Events Web Platform  
🎓 **Course:** Software Engineering & Web Technologies Laboratory (Integrated Project)  

---

## 📌 Project Overview

This project implements a **centralized web platform for managing departmental events**, designed to streamline event creation, participant registration, and viewing of past events. It provides an intuitive, responsive interface for both organizers and students, making departmental engagement more efficient and vibrant.

---

## 🎯 Objectives

✅ Provide a user-friendly platform for event organizers to create & manage events  
✅ Enable students to register easily for upcoming events  
✅ Showcase past events with photos & summaries, building departmental history  
✅ Implement alert systems for notifications about upcoming events  
✅ Enforce strict role-based access control (Admin/User)  
✅ Design for scalability and security

---

## ⚙️ Core Features

### 🧑‍💼 Organizers / Admin
- Create, edit, and manage event details
- Upload multiple photos per event
- View lists of registered participants
- Manage all events from a central dashboard

### 🎓 Students
- Register & login securely
- Explore past events with rich summaries & photos
- Register for upcoming events with simple forms
- Receive alerts for new events & registration deadlines

---

## 🏗️ System Architecture

### 🖥️ MERN Stack
- **MongoDB** – NoSQL database for storing events, participants, and admin data
- **Express.js** – Backend framework handling HTTP requests & routing
- **React** – Dynamic, responsive front-end
- **Node.js** – Server runtime executing backend logic

### 🔄 MVC Client-Server Design
- Clear separation of frontend (UI), backend (API), and database (data store)
- Ensures scalability, maintainability, and secure central control over data

---

## 🗃️ Database Design (MongoDB)

- **Admin Schema:** Admin email, password
- **Events Schema:** Name, date, time, photos
- **Student Schema:** Name, email, password, USN, semester
- **Event Registration Schemas:** Tied to students for each event type

Includes **CRUD operations:**
- `POST /insert/...` to add data
- `GET /fetch/...` to retrieve all or filtered data
- `PUT /update/...` to modify records
- `DELETE /delete/...` to remove records

---

## 🚀 Tech Stack & Tools

- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose models)
- **API Testing:** Postman
- **Testing:** Selenium IDE for automated UI tests
- **CI/CD:** Jenkins for automated builds, tests, and deployment pipelines

---

## 🧪 Testing Highlights

| Test Case                 | Description                        | Result |
|----------------------------|-----------------------------------|--------|
| ✅ Login with valid creds    | User / Admin login flow           | Pass   |
| ✅ Invalid login attempts    | Wrong password/email             | Pass   |
| ✅ Event creation / edits    | Admin adding & modifying events  | Pass   |
| ✅ Registration              | Students registering for events | Pass   |
| ✅ Duplicate registration    | Prevent repeat entries          | Pass   |

Used **Selenium IDE** to ensure UI workflows like login, event browsing, and registration operate seamlessly.

---

## 🔁 CI/CD Pipeline

Implemented with **Jenkins**, automating:
- Code integration from multiple team members
- Running unit & UI tests
- Auto-deploying updates to the web environment
- Ensures stable builds & rapid iteration cycles

---

## 📸 Screenshots

> **ℹ️ Upload your images to your repo (in `images/` or root) and update these paths.**

### 🖥️ Login Page
![Login](images/login.png)

### 📝 Event Registration
![Register](images/register.png)

### 🏠 Admin Dashboard
![Admin Dashboard](images/dashboard.png)

### 📚 Past Events View
![Past Events](images/past_events.png)

---

## 🔮 Future Scope

✅ Integrate automated email notifications for registrations & event reminders  
✅ Add analytics dashboard for event participation statistics  
✅ Expand to multi-department or university-wide events portal  
✅ Integrate file storage services (AWS S3 / Google Drive) for scalable photo management  
✅ Explore adding mobile-first progressive web app (PWA) features

---

## ✍️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install backend dependencies
npm install

# Start backend server
node server.js

# Install frontend dependencies
cd client
npm install

# Start React frontend
npm start
