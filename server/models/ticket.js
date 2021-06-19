/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const { Schema, model } = require('mongoose')

const ticketSchema = new Schema({
	// departure_vehicle: {
	// 	type: String,
	// 	required: true
	// },
	departure_point: {
		type: String,
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	departure_date: {
		type: Date,
		required: true
	},
	return_date: {
		type: Date,
		required: true
	},
	adult_count: {
		type: Number,
		required: true
	},
	children_count: {
		type: Number,
		required: true
	},
	// price: {
	// 	type: Number,
	// 	required: true
	// },
})

module.exports = model('Ticket', ticketSchema)