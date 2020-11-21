const express = require('express')
const MongoService = require('../services/mongoService')
const { success, error } = require('../helpers/response')
const router = express.Router()

router.get('/', async(req, res) => { 
    const mongo = new MongoService()
    mongo.getCards()
    .then(result => success(req, res, result))
    .catch(err => error(req, res, err))
})

module.exports = router