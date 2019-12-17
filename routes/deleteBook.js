const deleteBook = (app, fs) => {
    const data = './data/books.json';

    // READ:i
    app.post('/delete/:id?', (req, res) => {
        fs.readFile(data, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }


            //id
            const id = req.body.id;

            if(typeof id !== "undefined"){
                //delete books now
                const books = JSON.parse(data).filter(item => item.id !== Number(id));

                fs.writeFile("./data/books.json", JSON.stringify(books), function (err) {

                    if (err) throw err;
                    // if no error
                    res.send({
                        status: books.length !== JSON.parse(data).length ? "success": "failed",
                        data: []
                    });
                })
            }else{
                res.send({
                    status: "No id specified",
                    data: []
                });
            }


        });
    });
}

module.exports = deleteBook;