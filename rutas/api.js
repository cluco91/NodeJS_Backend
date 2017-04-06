
//Dependencias
var express = require('express');
var router = express.Router();

//Modelos
var Producto = require('../modelos/producto');

//Rutas
Producto.methods(['get', 'put', 'post', 'delete']);
Producto.register(router, '/productos');

//Retorna router
module.exports = router;