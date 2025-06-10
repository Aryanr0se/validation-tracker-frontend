# ✅ Validation Tracker – Task Management System for Software QA and Functional Testing

A modern task management web application built using **Angular**, **Node.js**, **Express**, and **MongoDB** — tailored for **Software QA** teams and **Functional Testing** workflows. This full-stack project mimics a real-world engineering workflow system like those used in **HIL (Hardware-in-the-Loop)** validation environments at companies like **Magna Powertrain**.

---

## 🚀 Features

- 📝 Add, list, and track tasks with status and due dates
- ✅ Real-time task submission with confirmation toast notifications
- 🎯 Categorize tasks by project area or module
- 🌐 Full-stack MERN architecture with REST API integration
- 💡 Designed for functional testing & QA engineers

## 🔧 Tech Stack

| Frontend                | Backend                     | Database            |
|-------------------------|-----------------------------|---------------------|
| Angular 17              | Node.js + Express           | MongoDB Atlas       |
| Bootstrap + Custom CSS  | RESTful API with Mongoose   | Mongoose ODM        |
| ngx-toastr for alerts   |                             |                     |

---

## 📁 Project Structure
validation-tracker/
│
├── validation-tracker-frontend/
│ └── src/app/
│ ├── task-form/
│ │ ├── task-form.ts
│ │ ├── task-form.html
│ │ └── task-form.css
│ ├── task-list/
│ │ ├── task-list.ts
│ │ ├── task-list.html
│ │ └── task-list.css
│ ├── app.ts
│ └── task.service.ts
│
├── validation-tracker-backend/
│ ├── models/
│ │ └── Task.js
│ ├── routes/
│ │ └── tasks.js
│ └── server.js


---

## ⚙️ Getting Started

### 📦 1. Clone the repository

```bash
git clone https://github.com/Aryanr0se/validation-tracker-frontend.git
cd validation-tracker-frontend

### 🔧 2. Install Angular dependencies

```bash
npm install

### 🖥️ 3. Run the Angular app
```bash
ng serve

### ⚙️ 4. Run backend (in separate terminal)
```bash
cd ../validation-tracker-backend
node server.js


---

' 
🌍 Deployment
This app is deployed on:
Frontend: Vercel
Backend: Render (or your preferred backend hosting)

👨‍💻 Author
Aryan Rose – International CS student at Michigan State University
📫 Connect on LinkedIn - https://www.linkedin.com/in/aryan-rose-/
'
