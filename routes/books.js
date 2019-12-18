const express = require("express");
const methods = require("../method");
//require controller
const { getBooks, addBook, deleteBook } = require("../controllers");

//require router
const router = express.Router();
//submit the routes
router
  .get("/:id?", getBooks)
  .post("/", addBook)
  .delete("/:id", deleteBook)
  .all("/", methods());

//export the router
module.exports = router;
