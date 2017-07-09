const express = require('express');
const path = require('path');
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const routes = require('./routes/routes');
const sass = require('node-sass');
const sassMiddleware = require('node-sass-middleware');


//Definicion del puerto y la aplicacion express
const server_port = 3000;
const app = express();

//Creacion de la db, a partir del archivo students.json
const db = low('students.json', {
    storage: fileAsync
});
app.locals.db = db;


//Middleware de SASS
app.use(
    sassMiddleware({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'public'),
        debug: true,
    })
);


//Definicion de rutas
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


//Creacion del server
app.listen(server_port, function() {
    console.log('La aplicación se está ejecutando en localhost:' + server_port);
});

module.exports = app;
