# 📝 MyNotesApp
# Deployed At Render :https://mynotesapp-oh0p.onrender.com/

A **Full-Stack Notes Management App** with **JWT Authentication**, **CRUD Operations**, **Forgot/Reset Password Functionality**, and a modern UI. Built using **MERN Stack** (MongoDB, Express, React, Node.js) and **Axios** for API handling.

---

## 🔐 Features

- ✅ **User Authentication** (JWT-based)
- 📧 **Forgot & Reset Password via Email** (using Nodemailer)
- 📝 **CRUD Notes** (Create, Read, Update, Delete)
- 📁 Organize notes with **Labels** or **Categories**
- 📎 Store **Links, Images**, and **Rich Text**
- 🔐 Protected Routes using JWT middleware
- 📦 Frontend and Backend separated for clean structure
-   Dockerised

---

# Feature Walkthrough with visuals
## Register Page
<img width="1795" height="834" alt="image" src="https://github.com/user-attachments/assets/f7e596ff-c79e-4e44-8f44-439c87ea0175" />

## Login page 
<img width="1807" height="853" alt="image" src="https://github.com/user-attachments/assets/08882cfb-af1a-406e-976a-6f6f89a11b15" />

## forgot-password and reset password page
<img width="1840" height="892" alt="image" src="https://github.com/user-attachments/assets/96b88205-603b-47df-a19f-77d035b799d5" />

## Gmail link for Password reset
<img width="1235" height="360" alt="image" src="https://github.com/user-attachments/assets/3ccf94f0-8f66-494f-8992-696d3f1a8752" />


## search page for notes
<img width="1868" height="510" alt="image" src="https://github.com/user-attachments/assets/d790e900-c437-4938-b2dd-93946e7a979e" />

## Dockerised runs on Container mern-notesapp and 2 images using node:20 as base image for forntend and node:18-alpine as base image for backend
<img width="1589" height="878" alt="image" src="https://github.com/user-attachments/assets/22d6a6d7-126a-4352-97c2-ffe39b208178" />





## 🛠️ Tech Stack

### 🔷 Frontend:
- React.js (with Hooks & Context API)
- Axios for HTTP Requests
- React Router DOM
- TailwindCSS 

### 🔶 Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (jsonwebtoken)
- Bcrypt.js (password hashing)
- Nodemailer (email service for reset password)
- dotenv (environment configuration)

---

## 🚀 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/myNotesApp.git
cd myNotesApp
2. Setup Backend
bash
Copy
Edit
cd backend
npm install

### Create a .env file in the backend folder:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
Run the server:

3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start
📬 API Endpoints (Protected with JWT)
🔐 Auth Routes



🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or improve.

📄 License
This project is open source and available under the MIT License.

👨‍💻 Author
Manas Raj
