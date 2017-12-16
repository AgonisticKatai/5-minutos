const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const { captureAddPostParams, addPost, addPostResultOk } = require('../private/handlers/addPost')
const { getPosts } = require('../private/handlers/getPosts')

router.use(passport.authenticate('jwt', { session: false }))

router.put('/post', captureAddPostParams, addPost, addPostResultOk)
router.get('/posts', getPosts)

module.exports = router
