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

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! your user was registered`
    })
})
sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
