const { MongoClient } = require('mongodb')

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

  close() {
    this.client.close()
  }
}

module.exports = MongoService