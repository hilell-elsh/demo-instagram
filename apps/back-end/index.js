const express = require('express');
const {join} = require('path')

const app = express()
app.use("/",express.static(join(__dirname,"static")))
app.use("*",express.static(join(__dirname,"static/index.html")))
app.listen(process.env.PORT || 3000, function () {
    console.log('listening on port 3000')
})