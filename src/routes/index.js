
/**
 * Dependencies
 */
const express = require('express')
const router = express.Router()

module.exports = client => {
  router.get('/', async (req, res) => {
    res.send('Welcome to the api.')
  })

  return router
}
