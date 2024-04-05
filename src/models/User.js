//`mongoose` es importado y luego se destruyen los objetos `Schema` y `model` 
//Para poder ser utilizados sin hacer referencia a mongoose
const { Schema,  model  } = require("mongoose");
const mongoose = require('mongoose');

//Se crea un esquema de usuario utilizando `new Schema`, especifica la estructura de los documentos de usuario en la base de datos MongoDB
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Validar el formato de correo electrónico utilizando una expresión regular
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'El formato del correo electrónico no es válido'
    }
  },
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function(value) {
        // Validar la seguridad del password
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      },
      message: 'El password no cumple con los requisitos de seguridad'
    }
  },
  avatarUrl: {
    type: String,
    default: 'images/default-avatar.png'
  }
});

//Utilizando `mongoose.model()`, se crea un modelo llamado `User` a partir del esquema de usuario. El modelo `User`,Se le pasa el nombre de la colección (`'User'`) y el esquema de usuario (`userSchema`).
const User = mongoose.model('User', userSchema);

module.exports = User;