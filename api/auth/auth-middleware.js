const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../secret')

// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    next({ status: 401, message: 'You shall not pass!' })
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        next({ status: 401, message: `Your token sucks: ${err.message}` })
      } else {
        req.decodedJwt = decoded
        next()
      }
    })
  }
}

// AUTHORIZATION
const checkRole = role => (req, res, next) => {
  if (req.decodedJwt.role === role) {
    next()
  } else {
    next({ status: 403, message: 'you have no power here!' })
  }
}

module.exports = {
  restricted,
  checkRole,
}
