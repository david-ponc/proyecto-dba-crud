const express = require('express')
const MongoService = require('../services/mongoService')
const router = express.Router()

router.put('/put/cards/:cardId', async (req, res) => {
  const { cardId } = req.params
  const { body } = req
  const mongo = new MongoService()
  const result = await mongo.updateCard(cardId, body)
  res.send({ body: result })
})

module.exports = router