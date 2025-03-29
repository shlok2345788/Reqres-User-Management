# Reqres-User-Management
# Reqres User Management

## Overview

This is a **User Management System** built with React.js. It includes features like user authentication, user listing, and user editing. The project integrates with the [Reqres API](https://reqres.in/) to fetch and manage users.

## Features

- **User Authentication**: Users can log in using a predefined email and password.
- **User Listing**: Displays a list of users fetched from the Reqres API.
- **Edit User Details**: Allows updating user details.
- **Modern UI**: Styled with a red and blue color theme for a visually appealing design.

## Tech Stack

- **Frontend**: React.js, React Router, Axios
- **Styling**: CSS (Custom styles)
- **API**: [Reqres API](https://reqres.in/)

## Installation

1. **Clone the repository**:
  
   ```sh
   git clone https://github.com/your-username/reqres-user-management.git
   cd reqres-user-management
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

## Project Structure

```
reqres-user-management/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── UsersList.jsx
│   │   ├── EditUser.jsx
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   ├── Login.css
│   ├── assets/
│
├── package.json
├── README.md
```

## API Endpoints

- **Login**: `POST https://reqres.in/api/login`
  - **Request Body:**
    ```json
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    ```
  - **Response:**
    ```json
    {
      "token": "QpwL5tke4Pnpja7X4"
    }
    ```
- **Fetch Users**: `GET https://reqres.in/api/users?page=1`
- **Update User**: `PUT https://reqres.in/api/users/:id`

## How It Works

1. The **Login Page** allows users to log in with the credentials provided above.
2. Upon successful login, the app stores the token in `localStorage` and redirects to the **Users List Page**.
3. The **Users List Page** fetches and displays users from the Reqres API.
4. Clicking **Edit** on a user navigates to the **Edit User Page**, where users can modify their details.

## Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/981ead1b-2092-4003-a70b-1ca6d27b47e3)



### Users List
![image](https://github.com/user-attachments/assets/d36c0a74-9d35-4d7c-8871-f691df187458)








