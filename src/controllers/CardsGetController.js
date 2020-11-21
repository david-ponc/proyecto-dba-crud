const express = require('express')
const MongoService = require('../services/mongoService')
const router = express.Router()

router.get('/', async(req, res) => { 
    const mongo = new MongoService()
    const db = await mongo.connect();
    const collection = db.collection("cards");
    const result = await collection.find().toArray();
    res.send(result)
})

module.exports = router