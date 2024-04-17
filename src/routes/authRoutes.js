
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/login', authController.showLogin)
router.post('/login', authController.readLogin)
router.get('/signup', authController.showSignup);
router.post('/signup', authController.readSignup)
// Exportar el router para ser utilizado en app.js
module.exports = router;