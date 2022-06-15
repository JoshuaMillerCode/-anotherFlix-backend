require("dotenv").config()
const express = require("express")
const app = express()
require('./config/database')

// Middleware
app.use(express.json())

// Movies 
app.use('/api/v1/movies', require('./routes/api/movies.js'))



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Just building this to watch Stranger Things :)")
})