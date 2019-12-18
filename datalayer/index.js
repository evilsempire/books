const fs = require("fs");
// readfile
const readFile = (
  callback,
  filepath = "./data/books.json",
  encoding = "utf8"
) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) {
      console.log(err);
      return err;
    }

    callback(JSON.parse(data));
  });
};

// writefile
const writeFile = (
  fileData,
  callback,
  filepath = "./data/books.json",
  encoding = "utf8"
) => {
  fs.writeFile(filepath, fileData, encoding, err => {
    if (err) {
      return err;
    }

    callback();
  });
};

module.exports = { readFile, writeFile };
