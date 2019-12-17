const fs = require('fs')
// readfile
const readFile = (
  callback,
  returnJson = false,
  next,
  filepath = './data/books.json',
  encoding = 'utf8'
) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) {
      console.log(err)
      return next(err)
    }

    callback(returnJson ? JSON.parse(data) : data)
  })
}

// writefile
const writeFile = (
  fileData,
  callback,
  next,
  filepath = './data/books.json',
  encoding = 'utf8'
) => {
  fs.writeFile(filepath, fileData, encoding, err => {
    if (err) {
      console.log(err)
      return next(err)
    }

    callback()
  })
}

module.exports = { readFile, writeFile }
