const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {console.log(`Listening to port ${port}...`)});