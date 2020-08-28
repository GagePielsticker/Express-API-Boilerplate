'use strict'
module.exports = client => {
  /**
   * Connects mongoose to our mongodb database defined in the api settings
   * @returns {Promise}
   */
  client.connectDatabase = () => {
    return new Promise(async (resolve, reject) => {
      const { host, port, database, username, password } = client.apiSettings.mongodb
      await client.mongoose.connect(`mongodb://${username ? `${username}:${password}@` : ''}${host}:${port}/${database}`, {
        useNewUrlParser: true
      })
        .then(resolve)
        .catch(reject)
    })
  }
}
