const express = require('express')
const app = express()
const port = 3000


fetch("https://pokeapi.co/api/v2")
    .then(response => response.json())
    .then(document => {
        return render(document)
            .then(rendered => {
                cacheInDatabase(rendered);
            })
            .catch(error => handle(error));

    });
app.listen(port, () => {
    console.log(`Pokedex app listening at http://localhost:${port}`)
});

const localhost = "http://localhost:3000";