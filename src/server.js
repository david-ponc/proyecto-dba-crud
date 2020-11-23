const express = require('express')
const cors = require('cors')
require('dotenv').config()
const CardsGetController = require('./controllers/CardsGetController')
const CardGetController = require('./controllers/CardGetController')
const CardsPostController = require('./controllers/CardsPostController')
const CardsDeleteController = require('./controllers/CardsDeleteController')
const CardsPutController = require('./controllers/CardsPutController')
const server = express()

server.use(express.json())
server.use(cors())

// Devuelte todas las tarjetas de la coleccion
server.use('/api/v1', CardsGetController)

// Devuelte la tarjeta con el cardId proporcionado
server.use('/api/v1', CardGetController)

// Ingresa un nuevo documento (card) a la coleccion
server.use('/api/v1', CardsPostController)

// Elimina una tarjeta con el cardId proporcionado
server.use('/api/v1', CardsDeleteController)

// Edita una tarjeta de la coleccion
server.use('/api/v1', CardsPutController)

const s = server.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${s.address().port}`)
})
