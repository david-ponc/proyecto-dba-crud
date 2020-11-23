const express = require('express')
const MongoService = require('../services/mongoService')
const { success, error } = require('../helpers/response')
const router = express.Router()


router.get('/cards/:cardId', async (req, res) => {
    const { cardId } = req.params
    const mongo = new MongoService()
    mongo.getCard(cardId)
    .then(result => { console.log(result); success(req, res, result)})
    .catch(err => error(req, res, err))
})

module.exports = router