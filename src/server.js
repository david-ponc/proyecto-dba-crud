const express = require('express')
require('dotenv').config()
const CardsGetController = require('./controllers/CardsGetController')
const CardGetController = require('./controllers/CardGetController')
const CardsPostController = require('./controllers/CardsPostController')
const CardsDeleteController = require('./controllers/CardsDeleteController')
const CardsPutController = require('./controllers/CardsPutController')
const server = express()

server.use(express.json())

// Devuelte todas las tarjetas de la coleccion
server.use('/get/cards', CardsGetController)

// Devuelte la tarjeta con el cardId proporcionado
server.use('/get/cards/:cardId', CardGetController)

// Ingresa un nuevo documento (card) a la coleccion
server.use('/post/cards', CardsPostController)

// Elimina una tarjeta con el cardId proporcionado
server.use('/delete/cards/', CardsDeleteController)

// Edita una tarjeta de la coleccion
server.use('/', CardsPutController)

const s = server.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${s.address().port}`)
})
