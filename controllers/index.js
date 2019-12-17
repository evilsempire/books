const uuid4 = require('uuid')
const { readFile, writeFile } = require('../datalayer')

// get all the books
const getBooks = (req, res, next) => {
  readFile(
    data => {
      res
        .status(200) // 200 success error
        .send({
          data,
          status: 200,
          message: null
        })
    },
    true,
    next
  )
}

// get the book
const getBook = (req, res, next) => {
  readFile(
    data => {
      // now get the id
      const id = req.params.id
      let book
      if (id) {
        book = data.filter(item => item.id === id)
        res.status(200).send({
          status: 200,
          data: book,
          message: null
        })
      } else {
        next({ status: 400, message: 'ID required' })
      }
    },
    true,
    next
  )
}

// add the book
const addBook = (req, res, next) => {
  // id
  readFile(
    data => {
      const id = uuid4()

      // now create on object
      const book = {
        id,
        name: req.body.name,
        auther: req.body.auther,
        content: req.body.content
      }

      // Now spread
      const books = [...data, book]

      writeFile(JSON.stringify(books), data => {
        res.status(201).send({
          status: 201,
          message: 'Created Successfully'
        })
      })
    },
    true,
    next
  )
}
// delete the book
const deleteBook = (req, res, next) => {
  readFile(data => {
    const id = req.body.id

    if (typeof id !== 'undefined') {
      // delete books now
      const books = data.filter(item => item.id !== id)

      if (books.length === data.length) {
        let err = {
          status: 400,
          message: 'ID not present '
        }
        next(err)
      } else {
        writeFile(
          JSON.stringify(books),
          () => {
            res.status(200).send({
              status: 200,
              message: 'successfully deleted',
              data: []
            })
          },
          next
        )
      }
    } else {
      let err = {
        status: 400,
        message: 'ID not present'
      }
      next(err)
    }
  }, true)
}

module.exports = {
  getBooks,
  getBook,
  addBook,
  deleteBook
}
