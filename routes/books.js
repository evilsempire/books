const books = (app, fs) => {
    const data = './data/books.json';

    // READ
    app.get('/books', (req, res) => {
        fs.readFile(data, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send({
                status: "success",
                data: JSON.parse(data)
            });
        });
    });
}

module.exports = books;