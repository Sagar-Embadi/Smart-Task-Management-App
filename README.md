# 🧠 Smart Task Management App
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that enables users to manage tasks efficiently with role-based access, visual analytics, and cloud readiness.

## 📌 Features
### 🔐 Authentication
- JWT-based Sign Up/Login

- Google OAuth Login

- Role-based access: Admin / User

## 📋 Task Management
- Create, Read, Update, Delete (CRUD) operations on tasks
- Attributes: task name, description, category, due date, status (complete/incomplete)
- Categorized views:
    - Today's Tasks
    - Upcoming Tasks
    - Completed / Uncompleted Tasks

## 📊 Dashboard
- Task summary and progress visualization
- Graph of tasks completed in the last 7 days
- Popular categories overview
- Tasks due today list

## 📥 Data Export
- Export all listings as CSV, Excel, or PDF
- Includes sorting and filtering options

## 🧑‍💻 Admin Panel
- Create or deactivate user accounts
- View audit logs of user actions

## 🏗️ Tech Stack

| Layer      | Tech                                |
| ---------- | ----------------------------------- |
| Frontend   | React.js, Tailwind CSS, Recharts.js |
| Backend    | Node.js, Express.js                 |
| Database   | MySQL (using Sequelize ORM)         |
| Auth       | JWT, Google OAuth 2.0               |
| Deployment | AWS EC2, RDS, S3, CloudWatch        |

## 🔧 Installation
### 🖥️ Local Setup

#### Clone the repository
git clone https://github.com/your-username/smart-task-management-app.git
cd smart-task-management-app

#### Backend setup
cd server <br>
npm install<br>
npm run dev

#### Frontend setup
cd ../client <br>
npm install <br>
npm run dev

Create a .env file in both server/ and client/ folders with appropriate variables like DB credentials, JWT secret, and Google OAuth keys.

## 🌐 API Endpoints
### Auth
 - POST /api/auth/register
 - POST /api/auth/login
 - GET /api/auth/google

### Tasks

- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

### Admin

- GET /api/admin/users
- PATCH /api/admin/user/:id/deactivate

## 🛠️ Architecture & AWS Deployment
### 🔲 Architecture Diagram

### ☁️ Suggested AWS Stack

- Frontend: S3 + CloudFront
- Backend: EC2 with PM2 + NGINX
- Database: RDS (MySQL)
- CI/CD: GitHub Actions + CodeDeploy
- Monitoring: CloudWatch + AWS X-Ray

## 📜 Audit Logging
All actions are logged in the audit_logs table with:

- user_id
- action_type (create/update/delete/login/etc.)
- timestamp
- task_id (optional)
- details

## 📄 License
This project is licensed under the MIT License.

## 🙌 Acknowledgments
Thanks to Kellton Tech for the opportunity and inspiration to build this project.

## 🧑‍🦱 Author

### Sagar Embadi
sagarembadi7@gmail.com
