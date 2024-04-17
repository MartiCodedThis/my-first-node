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
    validate: {
      validator: (value) => {
        // Utiliza una expresión regular para asegurar que la contraseña tenga al menos 8 caracteres
        // y contenga al menos una letra mayúscula, una minúscula, un número y un carácter especial
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(value);
      },
      message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial'
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