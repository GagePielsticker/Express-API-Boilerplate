
'use strict'

/**
 * Dependencies
 */
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
var filterXSS = require('xss-clean/lib/xss').clean

module.exports = client => { // The reason we pass client is to access engine functionality and methods
  router.get('/', [

    // body('username').isEmail(), example payload validation
    // body('password').isLength({ min: 5 })

  ], (req, res) => {
    // filterXSS('string')  manual xss filtering

    /*
    If payload validation fails or errors, the server will respond

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    */

    res.send('Welcome to the api.')
  })

  return router
}
