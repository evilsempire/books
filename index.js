const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');



const app = express();  //express app
const PORT = 3000 //port
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

app.listen(PORT, () => {
    console.log("listening...")
})
