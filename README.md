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
  <img width="788" height="721" alt="Screenshot 2025-10-05 121001" src="https://github.com/user-attachments/assets/15e66fa9-494b-4e6a-ad25-f096a5bb8cde" />

-   **Password Security:** Passwords are fully encrypted using `bcrypt` for maximum security.
-   **Password Reset:** "Forgot Password" functionality that sends a secure, time-sensitive reset link to the user's email via **SendGrid**.
  <img width="676" height="475" alt="Screenshot 2025-10-05 120949" src="https://github.com/user-attachments/assets/8be558c3-fe89-4549-a09d-3fa47bc6b2ea" />
  <img width="894" height="246" alt="Screenshot 2025-10-05 121309" src="https://github.com/user-attachments/assets/3518167f-abe5-4d8c-85a0-df54fb72192d" />

-   **Full CRUD Functionality:** Users can Create, Read, Update, and Delete their own notes.
    <img width="1870" height="877" alt="Screenshot 2025-10-05 120907" src="https://github.com/user-attachments/assets/64199606-333c-46f8-94e4-011969bf68cd" />
   
-   **Responsive Design:** A clean and intuitive UI that is fully responsive and works seamlessly on desktop, tablet, and mobile devices.
    <img width="1858" height="864" alt="Screenshot 2025-10-05 120923" src="https://github.com/user-attachments/assets/8a2d2e90-a41c-4426-b897-58028dd0d67e" />
    <img width="1865" height="861" alt="Screenshot 2025-10-05 120937" src="https://github.com/user-attachments/assets/d9c93589-b050-47a6-b9ba-9bd87db96a17" />


-   **Containerized:** The entire application is containerized using **Docker**, ensuring a consistent and isolated environment for development and deployment.
  <img width="622" height="88" alt="Screenshot 2025-07-21 204434" src="https://github.com/user-attachments/assets/ffbc79a0-ca68-4653-95ae-aa2b16f481f8" />
  <img width="1867" height="701" alt="Screenshot (291)" src="https://github.com/user-attachments/assets/517b99d4-9ae9-4065-ab13-3111e57ea54b" />

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

Of course. A great README.md is essential for making your project stand out to recruiters. It's the front page of your work.

Based on the features you've described for your NanoNotes app, here is a professional, comprehensive README.md file. Just copy and paste the content below into the README.md file in your GitHub repository.

Pro-Tip: I highly recommend creating a short GIF of your app in action and replacing the placeholder image. You can use free tools like Giphy Capture or ScreenToGif to record your screen.

Markdown

# NanoNotes – A Full-Stack MERN Notes Application

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)
![Render](https://img.shields.io/badge/Render-Deployment-46E3B7?logo=render)

A minimalist, secure, and responsive notes application built with the MERN stack. NanoNotes allows users to create, manage, and delete their notes seamlessly, with a robust authentication system ensuring data privacy.

<p align="center">
  <img src="https://your-link-to-a-demo-gif.com/demo.gif" alt="NanoNotes Demo GIF" width="80%">
</p>

## ✨ Live Demo

**Check out the live application here:** [**https://my-nano-notesf.vercel.app**](https://my-nano-notesf.vercel.app)

---

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
📝 API Endpoints
The following are the primary API routes available:

Method	Endpoint	Description
POST	/api/users/register	Register a new user.
POST	/api/users/login	Log in an existing user.
POST	/api/users/forgotpassword	Send a password reset email.
PUT	/api/users/resetpassword/:resetToken	Reset the user's password.
GET	/api/notes	Get all notes for the logged-in user.
POST	/api/notes	Create a new note.
PUT	/api/notes/:id	Update an existing note.
DELETE	/api/notes/:id	Delete a note.

Export to Sheets
📄 License
This project is distributed under the MIT License. See LICENSE for more information.

👨‍💻 Contact
Manas Raj - GitHub - LinkedIn
