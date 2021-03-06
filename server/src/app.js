console.log('Hello')

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {sequelize} = require("./models/index.js")
const config = require("./config/config")

const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors())

require('./routes')(app)

sequelize.sync() //sequelize.sync({force: true}) to clear db
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
