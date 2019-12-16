const express = require('express');
const axios = require('axios');  //axios
const app = express();  //express app
const PORT = 3000 //port

app.get('/', async (req, res) => {
    const books = await axios.get('https://jsonplaceholder.typicode.com/users')
                        .then(results =>{
                            console.log("results", results);
                            return results;
                        }).catch(error => {
                            console.log(error)
                        });

    res.json(
        {books: (books.data)}
        )
})

app.listen(PORT, () => {
    console.log("listening...")
})
