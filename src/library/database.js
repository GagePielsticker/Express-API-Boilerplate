'use strict'
module.exports = client => {
  /**
   * Connects mongoose to our mongodb database defined in the api settings
   * @returns {Promise}
   */
  client.connectDatabase = () => {
    return new Promise((resolve, reject) => {
      const { host, port, database, username, password } = client.apiSettings.mongodb
      return client.mongoose.connect(`mongodb://${username ? `${username}:${password}@` : ''}${host}:${port}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    })
  }
}
