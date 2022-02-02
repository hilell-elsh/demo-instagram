const express = require('express')
const { join } = require('path')
const cookieParser = require('cookie-parser')

const connectToDb = require('./models')

const port = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const router = require('./routes')
router(app)

app.use('/', express.static(join(__dirname, 'static')))
app.use('*', express.static(join(__dirname, 'static/index.html')))

connectToDb().then(
    app.listen(port, () => console.log('app is running in port: ' + port))
)
