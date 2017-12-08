async function getPosts (req, res) {
  const user = req.user
  await res.status(200).json(user)
}

module.exports = getPosts
