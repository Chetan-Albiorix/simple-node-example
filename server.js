require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")

// set url for mogodb database 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})

// connection to mongoose driver
const db = mongoose.connection

// handle an error of database connection
db.on('error', (error) => console.error(error))

// display message successfully when database connected   
db.once("open", () => console.log("Database Connection SuccessFully"))

// manage post request to 
app.use(express.json())


const subscribeRouter = require('./routes/subscribes')
app.use('/subscribes', subscribeRouter)
//http://localhost:3000/subscribes/id


app.listen(3000, () => console.log("Server started"))