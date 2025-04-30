# Authentication User Frontend

This is the **frontend** of the Authentication User project, built with **React**, **Vite**, **Axios**, and **Tailwind**. It communicates with the Auth API to register and authenticate users, allowing access to a private user list.

## Technologies Used

- **React** – Library for building user interfaces  
- **Vite** – Fast build tool and development server  
- **Axios** – HTTP client for API requests  
- **Tailwind CSS** – Utility-first CSS framework  

## Backend Integration

This frontend connects to the [Auth API](https://github.com/tulioanesio/Auth-API), which handles:

- User registration  
- User login (with JWT)  
- Access to protected routes  

## Installation

To run the frontend locally:

1. Clone the repository and navigate to the project folder
```
   git clone https://github.com/tulioanesio/auth-frontend.git
```
3. Install the dependencies with npm
```
   npm install
```
5. Start the development server with npm
```
   npm run dev
``` 

Once running, the application will be available at `http://localhost:5173`.

## Features

- User registration with validation  
- Login using JWT authentication  
- Protected route that lists registered users  
- Auth state saved using `localStorage`  
- Redirects based on login status  
- Fully responsive interface using Tailwind  

## Authentication Flow

1. The user registers with name, email, and password  
2. After login, the user receives a token and is redirected  
3. A private route shows the list of all users, accessible only when authenticated  

## Live Demo

The project is deployed on **Vercel** and can be accessed here:  
[**Authentication User Frontend**](https://auth-front-mu.vercel.app/)
