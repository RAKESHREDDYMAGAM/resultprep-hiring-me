const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

router.get("/users", authMiddleware, adminOnly, userController.getUsers);
router.delete("/users/:id", authMiddleware, adminOnly, userController.deleteUser);

module.exports = router;