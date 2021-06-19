/* eslint-disable no-console */
const { Router } = require('express')
const Ticket = require('../models/ticket')

const router = Router()

router.post('/', async (req, res) => {
	const ticket = new Ticket({
		departure_point: req.body.departure_point_plane,
		departure_date: req.body.departure_date_plane,
		return_date: req.body.return_date_plane,
		adult_count: req.body.adult_count_plane,
		children_count: req.body.children_count_plane
	})

	try {
		await ticket.save()
		res.redirect('/')
	} catch (e) {
		console.log()
	}
})


module.exports = router