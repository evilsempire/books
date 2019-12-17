const books = app => {
  const books = require('../controllers')
  // READ ALL BOOKS
  app.get('/books', books.getBooks)

  // GET ONLY ONE SINGLE BOOK
  app.get('/book/:id?', books.getBook)

  // add book
  app.post('/post', books.addBook)

  app.delete('/delete/:id?', books.deleteBook)
}

module.exports = books
