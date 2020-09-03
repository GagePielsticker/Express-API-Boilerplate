'use strict'

const express = require('express')
const app = express()
const helmet = require('helmet')
const safeCompare = require('safe-compare')
const xss = require('xss-clean')
const morgan = require('morgan')
const bodyParser = require('body-parser')

/* Configure our rest client */
const client = {
  mongoose: require('mongoose'),
  apiSettings: require('./settings/api_settings.json'),
  appid: process.env.APPID
}

app.use(helmet())
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(xss())
app.set('trust proxy', 1)

/* Custom middleware to check if a secretKey exist and if so make sure header has it to proceed */
app.use('/', (req, res, next) => {
  if (client.apiSettings.api.secretKey !== '') {
    if (safeCompare(req.header('secretKey'), client.apiSettings.api.secretKey)) next()
    else return res.status(403).send('You are unable to access this api.')
  } else next()
})

/* Require our engines/libs and pass our client */
require('./library/database.js')(client)
require('./library/engine.js')(client)

/* Require our models */
require('./models/user.model.js')(client)

/* Routing */
app.use('/', require('./routes/index.js')(client))

/* Listen on http */
app.listen(client.apiSettings.api.port, () => {
  console.log(`API ${client.appid} listening on port ${client.apiSettings.api.port}!`)
  client.connectDatabase()
    .then(() => console.log('Connected database.'))
    .catch(e => console.log(`Could not connect database: ${e}`))
})
