# MERN-Stack-User-Authentication
This repository contains a basic implementation of user authentication using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes both frontend and backend code to demonstrate user registration, login, and authentication.

Features

User Registration
User Login
Password Hashing with bcrypt
JWT (JSON Web Token) Authentication
Protected Routes
Logout Functionality

Tech Stack
Frontend: React.js, Axios, React Router
Backend: Node.js, Express.js, MongoDB, Mongoose, bcrypt, JSON Web Tokens (JWT)

Getting Started
Follow these steps to get the project running locally.
Prerequisites
Node.js and npm installed
MongoDB installed and running
Git installed
Installation
Clone the repository:
Set up the backend:
Configure environment variables:Create a .env file in the backend directory with the following content:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
Start the backend server:
Set up the frontend:
Start the frontend server:

Usage
Register a User: Go to the registration page and create a new account.
Login: Use the registered credentials to log in.
Access Protected Routes: After login, you can access routes that require authentication.
Logout: Click on the logout button to end the session.

Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for any improvements or bug fixes.
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature-branch)
Open a Pull Request

