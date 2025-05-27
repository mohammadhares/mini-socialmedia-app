const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./configs/db');
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); 
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoutes = require("./routes/likeRoutes");

// Load .env
dotenv.config();
// Connect Database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));