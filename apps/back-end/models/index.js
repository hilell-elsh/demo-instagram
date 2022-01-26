require('./auth')
require('./comment')
require('./like')
require('./post')
require('./tag')
require('./user')

const { connect } = require('mongoose')
let connection

async function connectToDb() {
    connection = await connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
}

module.exports = connectToDb
