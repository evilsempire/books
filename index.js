const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express() // express app
const PORT = 3000 // port
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes/routes.js')(app)

// invalid route error throw
app.all('*', function (req, res) {
  res.status(404).send({
    message: 'Invalid Route',
    status: 404
  })
})

app.use(function (err, req, res, next) {
  // formulate an error response here
  res.status(500).send({
    error: err
  })
})

app.listen(PORT, () => {
  console.log('listening...')
})
