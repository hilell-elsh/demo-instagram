const express = require('express');
const {join} = require('path')
const DEAFULT_PORT = 44444
const app = express()
app.use(express.json());
app.use("/",express.static(join(__dirname,"static")));
app.use("*",express.static(join(__dirname,"static/index.html")));
app.listen(process.env.PORT || DEAFULT_PORT, function () {
    console.log('listening on port 3000')
})