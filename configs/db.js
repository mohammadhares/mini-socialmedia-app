
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected')
    } catch(e){
        console.error("MongoDB connection failed:", err.message);
    }
}

module.exports = connectDB