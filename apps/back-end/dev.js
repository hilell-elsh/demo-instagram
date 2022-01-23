require('dotenv').config()

require('child_process').execSync(`npx kill-port ${process.env.PORT}`)

require('./index')
