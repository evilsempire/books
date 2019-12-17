const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express() // express app
const PORT = 3000 // port
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes/routes.js')(app)

// invalid route error throw
app.use('*', function (req, res) {
  res.status(404).send({
    message: 'Invalid Route',
    status: 404
  })
})

app.use(function (err, req, res, next) {
  // formulate an error response here
  let statusToSend = err.status
  if (!statusToSend) {
    statusToSend = 500
  }
  res.status(statusToSend).json(err)
})

app.listen(PORT, () => {
  console.log('listening...')
})
