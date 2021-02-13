const { json, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;


app.post('/https://pokeapi.co/api/v2/pokemon/ditto', function(req, res) {
        res.send()
    }, fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        try {
            throw new Error('Error! Pokemon not here!')
        } catch (error) {
            document.getElementsByTagName("img").innerHTML = err.message;
        }(console.error("error"));
    }));

fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
        method: POST,
        body: json.stringtoify(data),
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error)
    });

fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));


console.log(`Pokedex app listening at http://localhost:${port}`)


const localhost = "http://localhost:3000";