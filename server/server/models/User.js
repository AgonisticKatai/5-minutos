const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'users'

const PostSchema = new Schema({
  title: String,
  content: String,
  createdAt: {type: Date, default: Date.now}
})

const UserSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  profileImg: String,
  occupation: String,
  posts: [ PostSchema ]
}, { collection })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
