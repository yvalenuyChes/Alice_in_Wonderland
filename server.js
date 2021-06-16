/* eslint-disable no-console */
const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const { MONGODB_URI } = require('./keys/keys')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'


const app = next({ dev })
const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const server = express()

		async function start() {
			await mongoose.connect(MONGODB_URI, {
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true
			})
		}
		start()
		server.set('views', 'pages')
		server.use(express.urlencoded({ extended: true }))

		server.all('*', (req, res) => handle(req, res))

		server.listen(PORT, err => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${PORT}`)
		})
	})
	.catch(ex => {
		console.error(ex.stack)
		process.exit(1)
	})

