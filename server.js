require("dotenv").config()
const express = require("express")
const app = express()
require('./config/database')

// Middleware
app.use(express.json())
app.use(require('./config/checkToken'))

const ensureLoggedIn = require('./config/ensureLoggedIn')

// Movies 
app.use('/api/v1/movies', ensureLoggedIn ,require('./routes/api/movies.js'))
// User
app.use('/api/v1/users' ,require('./routes/api/users.js'))


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Just building this to watch Stranger Things :)")
}) 