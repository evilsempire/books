require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//const routes
const routes = require("./routes/books");
const app = express(); // express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", routes); //use the routes

// invalid route error throw
app.use("*", function(req, res) {
  res.status(404).json({
    message: "Invalid Route",
    status: 404
  });
});

app.use(function(err, req, res, next) {
  // formulate an error response here
  let statusToSend = err.status;
  if (!statusToSend) {
    statusToSend = 500;
  }
  res.status(statusToSend).json(err);
});

module.exports = app;
