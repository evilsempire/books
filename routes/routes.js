const books = require('./books');
const book = require('./book');
const postBook = require('./postBook');
const deleteBook = require('./deleteBook');
const router = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('welcome');
    });

    books(app, fs);
    book(app, fs);
    postBook(app, fs);
    deleteBook(app, fs);
}

module.exports = router;