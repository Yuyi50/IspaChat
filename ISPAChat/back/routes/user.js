var express= require('express');
var app= express.Router(); //Me permite crear las rutas donde viajara la informacion

var userController= require('../controllers/userController') //Requerimos el archivo que acabamos de crear
var multiparty= require('connect-multiparty');
var path= multiparty({uploadDir: './uploads/perfiles'}) //direccion donde se van almacenar la fotos.



app.post('/registrar', userController.registrar) //Creamos la ruta que nos permitira registrar
app.post('/login', userController.login) //Creamos la ruta login
app.get('/usuario/:id', userController.get_user) //Creamos la ruta para traer la informacion de esa persona
app.get('/usuarios', userController.get_users) // Ruta para traer todos los chats
app.put('/usuario/editar/imagen/:id', path, userController.update_foto)
app.get('/usuario/img/:img', userController.get_img); //creamos la ruta con la cual vamos a traer la imagen
app.put('/usuario/editar/:id', path, userController.editar_config)


module.exports= app;