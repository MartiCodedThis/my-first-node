// routes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
// Definir una ruta principal
router.get('/', (req, res) => {
  res.render('user');
});

router.get('/user', userController.showMain)
// Exportar el router para ser utilizado en app.js
module.exports = router;