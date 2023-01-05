//js
const express = require('express');
const { protectRoute } = require("../auth/protect");
const {registerView, loginView, registerUser, loginUser } = require('../controllers/loginController');
const { dashboardView } = require("../controllers/dashboardController");

const router = express.Router();

router.get('/register', registerView);
router.get('/login', loginView);
router.get("/dashboard", protectRoute, dashboardView);
router.get("/", protectRoute, dashboardView)

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;