const express = require('express')
const MongoService = require('../services/mongoService')
const router = express.Router()

router.put('/', async (req, res) => {
  const mongo = new MongoService()
  const db = await mongo.connect()
  // const result = db.editCard()
  res.send({body: 'Funciona'})
})

module.exports = router