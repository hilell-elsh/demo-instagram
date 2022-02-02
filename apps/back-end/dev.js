require('dotenv').config()

require('child_process').execSync(`kill-port ${process.env.PORT} 3000`)

require('./index')
