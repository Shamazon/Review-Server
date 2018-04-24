const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const path = require('path');
const cors = require('cors');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/reviews/:productId', (req, res) => {
  db.getReviewsByProduct(req.params.productId, res);
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port = 3000;

app.listen(port);
