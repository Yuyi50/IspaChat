var Message= require('../models/message'); //Traigo el modelo del mensaje

function send(req, res) {
        var data= req.body;  //recibe todo el cuerpo del mensaje
        var message= new Message(); //Traigo el modelo
        message.de= data.de;
        message.para= data.para;//el para del modelo y el para del formulario
        message.msm= data.msm; 

        message.save((err, message_save)=>{
            if (err) {
                res.status(500).send({message: 'Error en el servidor'})
            } else {
              if (message_save) { //si fue guardado correctamente
                  res.status(200).send({message: message_save})
                  //me va a devolver el cuerpo del mensaje
              }  
            }
        })
}
function data_msm(req,res){
    var data = req.body
    var de = req.params['de']; //obtengo el id de quien envio el mensaje
    var para = req.params['para']; //obtengo el id de quien recibe el mensaje
const filtro = { // Me filtrara los mensajes como messeger y de whatsapp
    '$or': [
        {
            '$and': [
                {
                    'para': de
                }, {
                    'de': para
                }
            ]
    }, {
        '$and': [
            {
                'para': para
            }, {
                'de': de
            }
        ]
    },
]
}
//Me va a filtrar y ordenar por fecha de creacion. una funcion que recibe un error o los mensajes
//El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
Message.find(filtro).sort({createAt: 1}).exec(function(err,messages){
   if (messages) { // Si hay mensajes que me los mande todos
       res.status(200).send({message:messages}); //me envie como respuesta los mensajes de los usuari
os
   } else { //sino hay mensajes
       res.status(404).send({message:'No hay ningun mensaje entre estos usuarios'})
   }
})
}
module.exports={
    send,
    data_msm
}