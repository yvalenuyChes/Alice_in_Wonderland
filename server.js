/* eslint-disable global-require */
/* eslint-disable no-console */
const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const session = require('express-session')
const { MONGODB_URI, SESSION_SECRET } = require('./keys/keys')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'


const app = next({ dev })
const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const server = express()

		const registrationRoute = require('./server/routs/registrationRoute')
		const authRoute = require('./server/routs/authRoute')
		const orderBusTicketRoute = require('./server/routs/orderBusTicketRoute')
		const orderTrainTicketRoute = require('./server/routs/orderTrainTicketRoute')
		const orderPlaneTicketRoute = require('./server/routs/orderPlaneTicketRoute')
		const middleware = require('./server/middleware/sessionVariables')


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
		server.use(session({
			secret: SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			isAuthenticated: false
		}))

		server.use(middleware)

		server.use('/add', registrationRoute)
		server.use('/login', authRoute)
		server.use('/order_bus_ticket', orderBusTicketRoute)
		server.use('/order_train_ticket', orderTrainTicketRoute)
		server.use('/order_plane_ticket', orderPlaneTicketRoute)

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

