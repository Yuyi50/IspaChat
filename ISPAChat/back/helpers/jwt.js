var jwt= require('jwt-simple');
var moment= require('moment'); //Me permite ultilizar fechas
const {use}= require('../routes/user');//vamos a usar el archivo de rutas
var secret= 'camilareyes'; //contraseña por defecto para crear los tokens


exports.createToken= function(user){
    var payload={
        sub: user._id,
        nombre: user.nombre,
        email: user.email,
        telefono: user.telefono,
        bio: user.bio,
        curso: user.curso,
        imagen: user.imagen,
        estado: user.estado,
        iat: moment().unix(), //El dia en que se creo el token
        exp: moment().add(30, 'days').unix() //Fecha de expiracion del inicio de sesion
    }
    return jwt.encode(payload, secret) //Me retorna el token creado anteriormente

}