const User = require('../models/User');

const userController = {
    showMain: (req, res) => {
        // Crear un objeto Usuario
        const usuario = new User('Ejemplo', 'ejemplo@correo.com');

        // Renderizar la vista con Handlebars
        res.render('user', { usuario });
    }
};

module.exports = userController;