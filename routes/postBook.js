const post = (app, fs) => {
    const data = './data/books.json';

    // READ
    app.post('/post', (req, res) => {
        fs.readFile(data, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }


            //id
            const id = JSON.parse(data).length + 1;

            //now create on object
            const book = {
                id,
                name: req.body.name,
                auther: req.body.auther,
                content: req.body.content
            };

            //Now spread
            const books = [...JSON.parse(data), book]


            fs.writeFile("./data/books.json", JSON.stringify(books), function (err) {

                if (err) throw err;
                // if no error
                res.send({
                    status: "success",
                    data: []
                });
            })


        });
    });
}

module.exports = post;