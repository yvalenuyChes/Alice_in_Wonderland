/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const { Schema, model } = require('mongoose')

const ticketSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	img: String,
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

module.exports = model('Course', ticketSchema)