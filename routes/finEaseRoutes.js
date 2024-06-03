const express = require("express");
const { register } = require("../controllers/register");

// using routes
const router = express.Router();

// register user
router.post("/register", register);

module.exports = router;
