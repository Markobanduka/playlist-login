const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

//middleware

router.use(
  cors({
    credentials: true,
    origin: [
      "https://playlist-login.onrender.com",
      "https://markobanduka.github.io",
    ],
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
