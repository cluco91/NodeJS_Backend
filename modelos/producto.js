
//Dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Esquema
var productoSchema = new mongoose.Schema({
	nombre: String,
	sku: String,
	precio: Number
});

//Retorna el Modelo
module.exports = restful.model('Productos', productoSchema);
