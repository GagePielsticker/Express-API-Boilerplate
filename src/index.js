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

/* Require our engines and pass our client */
require('./library/database.js')(client)
require('./library/engine.js')(client)

/* Require our models */
require('./models/user.model.js')(client)

/* Routing */
app.use('/', (req, res, next) => {
  if (client.apiSettings.api.key !== '' && req.header('key') !== client.apiSettings.api.key) {
    return res.send('Invalid api authentication key.')
  } else {
    next()
  }
})
app.use('/', require('./routes/index.js'))

/* Listen on https only */
https.createServer({
  key: fs.readFileSync('./settings/server.key', 'utf8'),
  cert: fs.readFileSync('./settings/server.cert', 'utf8')
}, app)
  .listen(client.apiSettings.api.port, function () {
    console.log(`Converse API listening on port ${client.apiSettings.api.port}!`)
  })
