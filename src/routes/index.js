
/**
 * Dependencies
 */
const express = require('express')
const router = express.Router()
const xss = require('xss')
const { body, validationResult } = require('express-validator')

module.exports = client => { // The reason we pass client is to access engine functionality and methods
  router.get('/', [

    // body('username').isEmail(), example payload validation
    // body('password').isLength({ min: 5 })

  ], (req, res) => {
    // xss(req.param) example xss filter

    /*
    If payload validation fails or errors, the server will respond

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    */

    res.send('Welcome to the api.')
  })

  router.get('*', (req, res) => {
    res.status(404).send('404 Route not found.')
  })

  return router
}
