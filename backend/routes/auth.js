const express = require('express')
const router = express.Router()
const { signup, signin, signout, requireSignin } = require('../controllers/auth')

// validates

const { runValidation } = require('../validators/index')
const { userSingupValidator, userSinginValidator } = require('../validators/auth')

router.post('/signup', userSingupValidator, runValidation, signup)
router.post('/', userSinginValidator, runValidation, signin)
router.get('/signout', signout)

module.exports = router