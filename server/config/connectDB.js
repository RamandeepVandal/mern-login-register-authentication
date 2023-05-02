const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_KEY);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;