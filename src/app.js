const sync= require('./database/pgservice')
const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require('./routes/todoRoutes')

app= express()
  
sync()
   
app.use(express.json());
app.use('/api', todoRoutes)

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); 
PORT=3000
app.listen(PORT,()=>{
    console.log( `app is running on http://localhost:${PORT}`) 
}) 