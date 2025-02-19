'use strict'

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('dotenv').config()
}

// Modules
const express = require('express')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')
const mongooseConnection = require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

// Connection to MongoDB via mongoose
mongooseConnection()

// Initial middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Load cors
app.use(cors())

// Load router module on the app.js
app.use('/', router)

// Error handler
app.use(errorHandler)

// Start the server
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

module.exports = app
