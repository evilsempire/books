const uuid4 = require("uuid");
const { readFile, writeFile } = require("../datalayer");
//find the books/ specific book

createNewBook = ({ name, auther, content }, callback) => {
  try {
    readFile(data => {
      const id = uuid4();
      // now create on object
      const book = {
        id,
        name,
        auther,
        content
      };
      // Now spread
      const books = [...data, book];
      writeFile(JSON.stringify(books), () => {
        callback({
          status: 200,
          message: "Added Successfully"
        });
      });
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

//find the books/ specific book
findAllBooks = (id, callback) => {
  try {
    readFile(books => {
      let data = books;
      let error;
      if (id) {
        data = books.filter(item => item.id === id);

        if (data.length === 0) {
          callback({
            status: 400,
            message: "ID not present"
          });
        }
      }

      callback({
        status: 400,
        message: data
      });
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

//delete the book
deleteTheBook = (id, callback) => {
  readFile(data => {
    // delete books now
    const books = data.filter(item => item.id !== id);

    if (books.length === data.length) {
      let err = {
        status: 200,
        message: "ID not present "
      };
      callback(err);
    } else {
      writeFile(JSON.stringify(books), () => {
        callback({
          status: 200,
          message: "Successfully Deleted"
        });
      });
    }
  });
};

module.exports = {
  createNewBook,
  findAllBooks,
  deleteTheBook
};
