const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");
const { registerUser, loginUser, getSingleUser } = require("../controllers/authController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

router.post("/signup",  upload.single("profilePhoto"), registerUser);
router.post("/signin",  loginUser);
router.get('/user/:id', authMiddleware, getSingleUser);

module.exports = router;