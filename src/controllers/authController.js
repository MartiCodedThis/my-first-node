const User = require('../models/User')
const bcrypt = require('bcryptjs');
const session = require('../../config/session.config')

const authController = {
    showLogin: (req, res) => {
        // Renderizar la vista con Handlebars
        res.render('login')
    },
    readLogin: async (req,res)=>{
        try{
            const email = req.body.email
            const password = req.body.password

            const user = await User.findOne({ email: email })
            console.log(user)            
            if(user){
                const passwordMatch = await bcrypt.compare(password, user.password);
                if(passwordMatch){
                    
                    console.log('SESSION =====> ', req.session);
                    req.session.currentUser = user
                    res.render('user')
                }
                else{
                    errorMessage = "Wrong password"
                    res.render('login', {errorMessage:errorMessage})
                }
            }
            else{
                errorMessage = "User doesn't exist"
                res.render('login', {errorMessage:errorMessage})
            }
            
        }
        catch(errorMessage){
            res.render('login', {errorMessage:errorMessage})
        }      
    },

    showSignup: (req, res) =>{
        res.render('signup')
    },
    readSignup: async (req,res)=>{
        try{
            const email = req.body.email
            const password = req.body.password
            const username = req.body.username
            console.log(req.body)
            console.log(`Email: ${email}, Password: ${password}`)
            salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            await User.create({email, username, password: hashedPassword});
            res.render('login')
        }
        catch(errorMessage){
            res.render('signup', errorMessage)
        }
    },
};


module.exports = authController