const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');
const fetch = require('node-fetch'); //does fetch on server side

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/dataPrices', (req, res) => { //can try the npm package request next! Can also do this client side but that's bad practice bc on the server side you can do cacheing/data manipulation
  fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-11-01&end=2018-11-30')
  .then((response) => response.json())
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.listen(port, () => {console.log(`Listening on port ${port}...`)})