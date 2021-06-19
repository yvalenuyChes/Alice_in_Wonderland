/* eslint-disable no-console */
const { Router } = require('express')
const Ticket = require('../models/ticket')

const router = Router()

router.post('/', async (req, res) => {
	const ticket = new Ticket({
		departure_point: req.body.departure_point_train,
		departure_date: req.body.departure_date_train,
		return_date: req.body.return_date_train,
		adult_count: req.body.adult_count_train,
		children_count: req.body.children_count_train
	})

	try {
		await ticket.save()
		res.redirect('/')
	} catch (e) {
		console.log()
	}
})


module.exports = router