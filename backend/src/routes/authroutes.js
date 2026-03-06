const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const { authMiddleware, adminOnly } = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

// admin route
router.get("/users", authMiddleware, adminOnly, userController.getUsers);

module.exports = router;