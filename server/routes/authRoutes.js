const express = require('express');
const router = express.Router();
const { register, login, connectUser,logout } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Secure getting connect user route
router.get('/connect-user', authMiddleware, connectUser);
module.exports = router;
