const express = require('express')
const router = express.Router()
const MongoService = require('../services/mongoService')
const { success, error } = require('../helpers/response')

router.post('/', (req, res) => {
    const {body: query } = req
    const mongo = new MongoService()
    mongo.insertCard(query)
    .then(result => success(req, res, result))
    .catch(err => error(req, res, err))
})

module.exports = router