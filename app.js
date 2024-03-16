require("dotenv").config()
const express = require('express')
const app = express()
const router = require("./routes")
const port = 3000
// middleware error handler
const errorHandler = require("./middlewares/errorhandler.js")




// middleware pasrsing to json
app.use(express.json());
app.use(express.urlencoded({extended: false}))



app.use(router)
app.use(errorHandler)


app.listen (port,()=>{
  console.log(`Connected to ${port}`)
})