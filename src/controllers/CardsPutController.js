const express = require('express')
const { success, error } = require('../helpers/response')
const MongoService = require('../services/mongoService')
const router = express.Router()

router.put('/put/cards/:cardId', (req, res) => {
  const { cardId } = req.params
  const { body } = req
  const mongo = new MongoService()
  mongo.updateCard(cardId, body)
    .then(result => success(req, res, result))
    .catch(err => error(req, res, err))
})

module.exports = router