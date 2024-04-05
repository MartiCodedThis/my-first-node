const express = require('express');
const routes = require('./routes/mainRoutes');
const auth = require('./routes/authRoutes')
const bodyParser = require('body-parser');
const connectToMongo = require('../config/database')
// Crear una instancia de Express
const app = express();
const hbs = require("hbs");
const path = require("path");

app.set("view engine", "hbs");
//Seteo la carpeta views desde donde se buscaran las plantillas
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// Configurar middleware si es necesario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar las rutas
app.use('/', routes);
app.use('/auth', auth)
// Exportar la aplicación para ser utilizada en otros archivos
module.exports = app;

// 2. let know your app you will be using it
app.use(bodyParser.urlencoded({ extended: true }));