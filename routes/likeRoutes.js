const express = require("express");
const router = express.Router();
const { toggleLike, getAllLikes } = require("../controllers/likeController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/:postId", authMiddleware, toggleLike);
router.get("/", authMiddleware, getAllLikes);

module.exports = router;