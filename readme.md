### Full-Stack Login/Register Authentication Project
This is a full-stack project that allows users to register, login, and authenticate their access to a protected route using JSON Web Tokens (JWT). The project is built using React for the front-end, Node.js and Express for the back-end, and MongoDB as the database. Bootstrap is used for the UI components.

## Getting Started
To get started, clone this repository to your local machine. You will need to have Node.js and MongoDB installed on your machine. Follow these steps to run the project:

1. Open two terminals. 

2. Navigate to the server directory and run **npm install** to install the dependencies for the server.

3. Navigate to the client directory and run **npm install** to install the dependencies for the client.

4. Then run **npm start** in the server directory to start the server and run **npm run dev** in the client directory to start the app.

## Usage
Once the project is running, you will be taken to the login page. If you don't have an account yet, click the "Register" link to create an account.

After registering, you will be redirected to the login page. Enter your email and password to log in. If your credentials are correct, you will be redirected to the protected route, which displays a welcome message.

If you try to access the protected route without logging in, you will be redirected to the login page.

## Technologies Used
This project was built using the following technologies:

1. React: for the front-end UI

2. Node.js and Express: for the back-end server

3. MongoDB: for the database

4. JSON Web Tokens (JWT): for authentication

5. Bootstrap: for the UI components
