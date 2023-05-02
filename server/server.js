const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
// routes
const router = require('./routes/UserRoutes');
// db connection
const connectDB = require('./config/connectDB');
// PORT 
const PORT = 5000 || process.env.PORT;

// connect to db
connectDB();

// app 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// use the controllers with the app
app.use('/', router);

// check if app is running
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`); 
})