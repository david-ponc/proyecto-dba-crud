const express = require('express')
const MongoService = require('../services/mongoService')
const router = express.Router()
const {success, error} = require('../helpers/response')

router.delete('/:cardId', (req, res) => { 
    const mongo = new MongoService()
    const id = req.params.cardId
    mongo.deleteCard(id)
    .then(function (result){
        if(result){
            success(req,res,result)
        }else{
            success(req,res,{message:`No existe la tarjeta:${id}`},200)    
        }
    })
    .catch(function (erro){
        error(req,res,erro)
    })
})

module.exports = router