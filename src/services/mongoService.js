const { MongoClient, ObjectId } = require('mongodb')

const URI_MONGO = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`

class MongoService {
  client
  constructor() {
    this.client = new MongoClient(URI_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((error) => {
        if(error) reject(error)
        resolve(this.client.db('pdba'))
      })
    })
  }

  deleteCard(id){
    const id_int = parseInt(id,10) 
    return this.connect()
    .then(function (db) {
      db.collection('cards').findOne({number:id_int})
      .then(function (res){
        if(res){
          return db.collection('cards').deleteOne({number:id_int})

        }else{
            throw new Error()
          }
      })
      .catch(function (error){
        return error
      })
    })
    .catch(function (error){
      return error
    })
  }
  
  close() {
    this.client.close()
  }

  async updateCard(cardId, query) {
    const { owner, brand, number, expiration, amount } = query
    const db = await this.connect()
    return db
      .collection('cards')
      .updateOne({ _id: ObjectId(cardId) }, { $set : { owner, brand, number, expiration, amount } })
  }

  async getCards(cardId, query) {
    const db = await this.connect()
    return db
      .collection('cards')
      .find().toArray()
  }
  async insertCard(query) {
    const { owner, number, brand, expired, amount, type } = query
    const db = await this.connect()
    return db
      .collection('cards')
      .insertOne({ $set : { owner: "Pedro Hernandez", number: 5566555644458899, brand: "American Express", expired: 2023, amount: 25000, type: "credito" } })
  }
}

module.exports = MongoService