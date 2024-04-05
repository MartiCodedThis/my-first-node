
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/login', authController.showMain)
router.post('/login', authController.readForm)
// Exportar el router para ser utilizado en app.js
module.exports = router;