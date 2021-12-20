require('dotenv').config();

const express = require('express');
const {join} = require('path');

const connectToDb = require('./models');

const port = process.env.PORT || 44444;
const app = express();
app.use(express.json());
app.use("/",express.static(join(__dirname,"static")));
app.use("*",express.static(join(__dirname,"static/index.html")));

// require('./routes/??????')(app);

connectToDb()
    .then(app.listen(port, ()=>console.log("app is running in port: " + port)));
