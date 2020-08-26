const express = require('express')
const https = require('https')
const app = express()
const fs = require('fs')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

/* Configure our rest client */
const client = {
  mongoose: require('mongoose'),
  apiSettings: require('./settings/api_settings.json')
}
app.use(rateLimit(client.apiSettings.rate_limiter)) // appies to all request
app.use(helmet())
app.set('trust proxy', 1)

/* Custom middleware to check if a secretKey exist and if so make sure header has it to proceed */
app.use('/', (req, res, next) => {
  if (client.apiSettings.api.secretKey !== '' && req.header('secretKey') !== client.apiSettings.api.secretKey) {
    return res.send('Invalid api authentication key.')
  } else {
    next()
  }
})

/* Require our engines/libs and pass our client */
require('./library/engine.js')(client)

/* Routing */
app.use('/', require('./routes/index.js'))

/* Listen on https only */
https.createServer({
  key: fs.readFileSync('./settings/server.key', 'utf8'),
  cert: fs.readFileSync('./settings/server.cert', 'utf8')
}, app)
  .listen(client.apiSettings.api.port, function () {
    console.log(`Converse API listening on port ${client.apiSettings.api.port}!`)
  })
