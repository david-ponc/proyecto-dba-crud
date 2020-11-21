const express = require('express')
const router = express.Router()

router.delete('/', (req, res) => { res.send({message: 'Funciona'}) })

module.exports = router