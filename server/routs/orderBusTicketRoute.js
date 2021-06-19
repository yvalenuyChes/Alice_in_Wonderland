/* eslint-disable no-console */
const { Router } = require('express')
const Ticket = require('../models/ticket')

const router = Router()

router.post('/', async (req, res) => {
	// const ticket = new Ticket({
	// 	departure_point: req.body.departure_point_bus,
	// 	departure_date: req.body.departure_date_bus,
	// 	return_date: req.body.return_date_bus,
	// 	adult_count: req.body.adult_count_bus,
	// 	children_count: req.body.children_count_bus
	// })

	// try {
	// 	await ticket.save()
	// 	res.redirect('/')
	// } catch (e) {
	// 	console.log()
	// }
})


module.exports = router