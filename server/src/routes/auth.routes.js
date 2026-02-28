const router = require("express").Router();
const { register, login } = require("../controllers/auth.controller");

// Public routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;