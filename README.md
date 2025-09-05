# NanoNotes – A Full-Stack Dockerised MERN Notes Application Deployed frontend on Vercel and backend on Render
##  Live Demo
**Check out the live application here:** [**https://my-nano-notesf.vercel.app**](https://my-nano-notesf.vercel.app)
---


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)
![Render](https://img.shields.io/badge/Render-Deployment-46E3B7?logo=render)

A minimalist, secure, and responsive notes application built with the MERN stack. NanoNotes allows users to create, manage, and delete their notes seamlessly, 
with a robust authentication system ensuring data privacy.




## 🚀 Tech Stack

| Frontend          | Backend           | Database        | Authentication | Deployment & DevOps      |
| ----------------- | ----------------- | --------------- | -------------- | ------------------------ |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white) | ![Vercel](https://img.shields.io/badge/-Vercel-black?logo=vercel&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) | ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white) |                   | ![Nodemailer](https://img.shields.io/badge/-Nodemailer-44a6d1) | ![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=white) |
|                   |                   |                   | ![Bcrypt](https://img.shields.io/badge/-Bcrypt-blue)  | ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white) |

---

## 📋 Key Features

-   **User Authentication:** Secure user registration and login system using JSON Web Tokens (JWT) for session management.
-   **Password Security:** Passwords are fully encrypted using `bcrypt` for maximum security.
-   **Password Reset:** "Forgot Password" functionality that sends a secure, time-sensitive reset link to the user's email via **Nodemailer**.
-   **Full CRUD Functionality:** Users can Create, Read, Update, and Delete their own notes.
-   **Responsive Design:** A clean and intuitive UI that is fully responsive and works seamlessly on desktop, tablet, and mobile devices.
-   **Containerized:** The entire application is containerized using **Docker**, ensuring a consistent and isolated environment for development and deployment.
-   **Separate Frontend/Backend Deployment:** Frontend deployed on **Vercel** for optimal performance and backend on **Render** for a robust server environment.

---

## 🛠️ Local Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/manaskng/MyNotesApp.git](https://github.com/manaskng/MyNotesApp.git)
    cd MyNotesApp
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the environment variables as specified in the `.env.example` section below.
    ```bash
    npm start
    ```
    The backend server will start on `http://localhost:5000` (or your specified port).

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory and add the following:
    ```
    REACT_APP_API_URL=http://localhost:5000
    ```
    ```bash
    npm start
    ```
    The frontend development server will open at `http://localhost:3000`.

---

## ⚙️ Environment Variables

You will need to create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection String
MONGO_URI="your_mongodb_connection_string"

# Port for the server
PORT=5000

# JWT Secret Key
JWT_SECRET="your_strong_jwt_secret_key"

# Nodemailer Configuration (for password reset)
# Example using Gmail, but it's better to use a transactional email service
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=465
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password_for_gmail"
