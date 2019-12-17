const book = (app, fs) => {
    const data = './data/books.json';

    // READ
    app.get('/book/:id', (req, res) => {
        fs.readFile(data, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            //now get the id
            const id = req.params.id;
            let book;
            if (id) {

                book = JSON.parse(data).filter(item => item.id === Number(id))
                res.send({
                    status: book.length ? "success" : "fail",
                    data: book
                });
            } else {
                res.send({
                    status: "fail",
                    data: []
                });
            }

        });
    });
}

module.exports = book;