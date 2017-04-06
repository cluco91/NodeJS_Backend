
//Dependencias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost/rest_test');


//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Rutas
app.use('/api', require('./rutas/api'));

app.listen(3000);
console.log('API se esta ejecutando en el puerto 3000');