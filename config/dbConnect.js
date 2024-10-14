const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = ()=>
{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(()=>console.log("App connect with DB"))
    .catch((err)=>{
        console.log(`some error in connecton with DB ${err}`)
    })
}

module.exports = dbConnect;