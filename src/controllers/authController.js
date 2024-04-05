const User = require('../models/User')

const loginController = {
    showMain: (req, res) => {
        // Renderizar la vista con Handlebars
        res.render('login')
    },
    readForm: async (req,res)=>{
        const email = req.body.email
        const password = req.body.password
        const user = req.body.user

        console.log(`Email: ${email}, Password: ${password}`)
        const newUser = new User({
            email: email,
            username:user,
            password: password
        });
        await newUser.save();
        res.render('user')
    }
};

module.exports = loginController