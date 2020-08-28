'use strict'

const client = {
  mongoose: require('mongoose'),
  apiSettings: require('../src/settings/api_settings.json')
}

beforeAll(async () => {
  /* Get our functionality engine */
  require('../src/library/engine.js')(client)

  /* Connect our database */
  require('../src/library/database')(client)

  /* Import our models */
  require('../src/models/user.model.js')(client)

  /* Connect database */
  await client.connectDatabase()
    .then(() => console.log('Database connected.'))
    .catch(e => { throw new Error('Could not connect to database') })
}, 10000) // 10 second timeout connecting to db

afterAll(async () => {
  await client.mongoose.connection.close()
    .then(console.log('Connection closed successfully.'))
})

/* Begin unit testing */
test('adds 1 + 2 to equal 3', () => {
  expect(client.sum(1, 2)).toBe(3)
})
