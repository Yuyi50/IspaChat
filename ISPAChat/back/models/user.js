var mongoose= require('mongoose'); //Conexion a la BD
var Schema= mongoose.Schema; //Creamos la variable que va envir el modello a Mongo

var userSchema= Schema({
    nombre: String,
    email: String,
    password: String,
    imagen: String,
    telefono: String,
    bio: String,
    curso: String,
    estado: Boolean  //Estado de conexion
});

module.exports= mongoose.model('user', userSchema)