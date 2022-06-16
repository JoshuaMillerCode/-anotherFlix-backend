require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.get('Authorization').split(' ')[1]
  if (token) {

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        req.user = null
      }else {
        req.user = decoded
      }
    })

    
  }
  next()
}