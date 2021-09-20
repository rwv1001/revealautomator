console.log('Hello')

import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT)