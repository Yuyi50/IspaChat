var express= require('express');
var messageController=require('../controllers/MessageController');


var api=express.Router();

api.post('/message/enviar', messageController.send)
api.get('/message/:de/:para', messageController.data_msm)

module.exports=api;

