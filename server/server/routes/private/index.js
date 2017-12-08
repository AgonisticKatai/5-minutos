const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getPosts = require('../private/handlers/getPosts')

router.use(passport.authenticate('jwt', { session: false }))

router.get('/posts', getPosts)

module.exports = router
