'use strict'
module.exports = client => {
  const Schema = client.mongoose.Schema

  const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
  })

  client.mongoose.model('Users', userSchema)
}
