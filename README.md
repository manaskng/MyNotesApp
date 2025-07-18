# 📝 MyNotesApp

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
-  About to be Dockerised

---

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

**Route	Method	Description**
/api/users/register	POST	Register a new user
/api/users/login	POST	Login with credentials
/api/users/forgot-password	POST	Send reset password email
/api/users/reset-password/:token	POST	Reset password via token

**📝 Notes Routes**
Route	Method	Description
/api/notes	GET	Get all notes (user-specific)
/api/notes	POST	Create a new note
/api/notes/:id	PUT	Update a note
/api/notes/:id	DELETE	Delete a note

🧪 Optional Features (You can Add Later)
✅ Image upload (Multer + Cloudinary)
✅ WYSIWYG Editor for rich notes
✅ Search & Filter notes
✅ Archive/Trash functionality
✅ Daily/Weekly productivity graph
✅ Markdown support

📸 Screenshots



🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or improve.

📄 License
This project is open source and available under the MIT License.

👨‍💻 Author
Manas Raj
