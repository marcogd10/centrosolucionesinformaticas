
const express = require('express')
const hbs = require ('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');

//Servir contenido estatico
app.use( express.static('public') ); 

app.get('/', (req, res) => {
    res.render('home');
});
  
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Escuchando de http://localhost:${port}`)
})


