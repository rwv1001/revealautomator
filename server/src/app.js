console.log('Hello')

import express from "express";
import cors from "cors";
import morgan from "morgan";

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

app.listen(process.env.PORT)