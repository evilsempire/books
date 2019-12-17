const uuid4 = require('uuid')
const { readFile, writeFile } = require('../datalayer')

const books = app => {
  // READ ALL BOOKS
  app.get('/books', (req, res, next) => {
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
  })

  // GET ONLY ONE SINGLE BOOK
  app.get('/book/:id?', (req, res, next) => {
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
          res.status(400).send({
            status: 400,
            data: null,
            message: 'ID is required'
          })
        }
      },
      true,
      next
    )
  })

  // add book
  app.post('/post', (req, res, next) => {
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
  })

  app.delete('/delete/:id?', (req, res, next) => {
    readFile(data => {
      const id = req.body.id

      if (typeof id !== 'undefined') {
        // delete books now
        const books = data.filter(item => item.id !== id)

        if (books.length === data.length) {
          res.status(400).send({
            status: 400,
            message: 'ID is not present in data',
            data: []
          })
          res.end()
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
        res.status(404).send({
          message: 'No id specified',
          data: [],
          status: 400
        })
      }
    }, true)
  })
}

module.exports = books
