const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('../database/db.js');

app.use(express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/reviews/:productId', (req, res) => {
  db.getReviewsByProduct(req.params.productId, res);
});

const port = 3000;

app.listen(port);
