const { Router } = require('express')

const router = Router()

router.post('/', async (req, res, next) => {
	req.session.isAuthenticated = true
	console.log(req.session.isAuthenticated)
	res.redirect('/kanada')
	next()
})



module.exports = router