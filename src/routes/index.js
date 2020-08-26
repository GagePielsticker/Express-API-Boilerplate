
/**
 * Dependencies
 */
const express = require('express')
const router = express.Router()

module.exports = client => { // The reason we pass client is to access engine functionality and methods
  router.get('/', async (req, res) => {
    res.send('Welcome to the api.')
  })

  return router
}
