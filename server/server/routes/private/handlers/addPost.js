const User = require('../../../models/User.js')

function captureAddPostParams (req, res, next) {
  const { _id } = req.user
  const { title, content } = req.body
  req.data = { _id, title, content }
  next()
}

async function addPost (req, res, next) {
  const { _id, title, content } = req.data
  try {
    await User.findByIdAndUpdate(_id, {
      $push: { 'posts': { title: title, content: content } }
    }, { 'new': true })
    next()
  } catch (error) {
    const msg = 'problems in addPost...'
    res.status(500).json({ error, msg })
  }
}

async function addPostResultOk (req, res) {
  res.status(200).json({ msg: 'post added properly...' })
}

module.exports = { captureAddPostParams, addPost, addPostResultOk }
