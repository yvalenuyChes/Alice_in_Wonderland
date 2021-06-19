const { Router } = require('express')

const router = Router()

router.post('/', async (req, res) => {
	req.session.isAuthenticated = true
	console.log(req.session.isAuthenticated)
	res.redirect('/kanada')
})

module.exports = router