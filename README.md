# User Management API

## Overview
This is a RESTful API for user authentication and management built using **Express.js** and **MongoDB**. It includes user signup, login, role-based authorization, and basic CRUD operations for user management.

## Features
- **User Authentication**: Signup and login with JWT-based authentication.
- **Role-Based Access Control (RBAC)**: Restrict access based on user roles.
- **User Management**: CRUD operations for users (Admin only).
- **Error Handling**: Centralized error handling middleware.
- **Database Transactions**: Ensures data integrity with MongoDB transactions.

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JsonWebToken)
- Bcrypt.js (Password Hashing)

## Installation
### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env.<development/production>.local` file in /env/ directory and add the following variables:
   ```env
   PORT=5000
   NODE_ENV=<development/production>
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   JWT_EXPIRES_IN=1d
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
### Authentication Routes (`/api/v1/auth`)
| Method | Endpoint  | Description |
|--------|-----------|-------------|
| POST   | `/signup` | Register a new user |
| POST   | `/signin` | Authenticate user and get token |

### User Routes (`/api/v1/users`)
| Method | Endpoint  | Description |
|--------|-----------|-------------|
| GET    | `/`       | Get all users (Admin only) |
| GET    | `/:id`    | Get user by ID (Authenticated) |
| POST   | `/`       | Create a new user (Admin only) |
| PUT    | `/:id`    | Update user details (Admin only) |
| DELETE | `/:id`    | Delete a user (Admin only) |

## Authentication & Authorization
- **JWT Authentication**: Secure API with JSON Web Tokens.
- **Admin Role**: Only admin users can create, update, and delete users.
- **Protected Routes**: Users must be authenticated to access restricted endpoints.

## Error Handling
A centralized error handling middleware processes errors and returns appropriate responses.

## Contribution
Feel free to fork the repository, create a branch, and submit a pull request.

## License
This project is licensed under the MIT License.

