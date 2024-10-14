const express = require('express')
const dbConnect  = require('./config/dbConnect')
const route = require('./routes/route')
require("dotenv").config()




const app = express()
const cors = require('cors');
app.use(cors()) 

PORT = process.env.PORT || 4001

app.use(express.json())
app.use('/api/v1', route)



app.listen(PORT, ()=>
{
    console.log("server started")
})

app.get("/", (request, response)=>
    {
        response.send(`<h1>THIS IS a HOMEPAGE</h1>`)
    })

dbConnect();

module.exports = app;
