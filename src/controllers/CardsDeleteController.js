const express = require('express')
const MongoService = require('../services/mongoService')
const router = express.Router()

router.delete('/', (req, res) => { 
    const mongo = new MongoService()
    const db = mongo.connect()    
})

module.exports = router