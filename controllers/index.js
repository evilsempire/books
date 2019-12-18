const { check, validationResult } = require("express-validator");
const { createNewBook, findAllBooks, deleteTheBook } = require("../services");

// get all the books
const getBooks = (req, res, next) => {
  const { id } = req.params;
  //find the all books or if id is present then find only one book
  findAllBooks(id, function(data) {
    res.send(data);
  });
};

// add the book
const addBook = (req, res, next) => {
  const { name, content, auther } = req.body;

  createNewBook({ name, content, auther }, function(data) {
    res.send(data);
  });
};
// delete the book
const deleteBook = (req, res, next) => {
  const { id } = req.params;
  deleteTheBook(id, function(data) {
    res.send(data);
  });
};

module.exports = {
  getBooks,
  addBook,
  deleteBook
};
