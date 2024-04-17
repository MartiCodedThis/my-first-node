const User = require('../models/User');

const userController = {
    showMain: (req, res) => {
        // Renderizar la vista con Handlebars
        res.render('user', { userInSession: req.session.currentUser });
    }
};

module.exports = userController;