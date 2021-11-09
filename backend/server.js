const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// routes

// const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')


// app

const app = express()


// cors
if (process.env.NODE_ENV == 'development') {
   app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}


// db

mongoose
   .connect(process.env.MONGO_DB_ULR)
   .then(() => {
      console.log('database connected');
   })

// middlewares

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))
app.use(cookieParser())


// routs middlevare
app.use('/api', authRoutes)




// routes


// port 
const port = process.env.PORT || 8000
app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
})
