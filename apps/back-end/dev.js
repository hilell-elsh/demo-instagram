require('dotenv').config()

require('child_process').execSync(`kill-port ${process.env.PORT}`)

require('./index')
