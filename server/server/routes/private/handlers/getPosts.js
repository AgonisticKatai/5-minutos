const User = require('../../../models/User.js')

async function getPosts (req, res) {
  const { _id } = req.user
  const posts = await User.findById(_id, 'posts', (err, posts) => {
    if (err) return err
    return posts
  })
  res.json(posts)
}

module.exports = { getPosts }
