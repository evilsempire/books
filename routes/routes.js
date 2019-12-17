const books = require('./books');
const router = (app) => {

    app.get('/', (req, res) => {
        res.send('welcome');
    });

    books(app);
    
}

module.exports = router;