/* eslint-disable no-console */
const { Router } = require('express')
const User = require('../models/user')

const router = Router()

router.post('/', async (req, res) => {
	const canditate = new User({
		email: req.body.email,
		password: req.body.password,
		name: req.body.name
	})

	try {
		await canditate.save()
		res.redirect('/')
	} catch (e) {
		console.log(e)
	}
})

module.exports = router