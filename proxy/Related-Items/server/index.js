const express = require('express');
const path = require('path');
const cors = require('cors');
const Product = require('./db/Product');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.set('port', process.env.PORT || 9001);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/products/:id/related', (req, res) => {
  const id = Number(req.params.id);
  Product.findOne({ id }).then((result, err) => {
    const category = result.category;
    Product.find({ category, id: { $ne: id, $gt: id} }).then((results) => {
      if (results.length < 10) {
        Product.find({ category, id: { $ne: id, $lt: id }}).then((moreResults) => {
          res.json(results.concat(moreResults));
        });
      } else {
        res.json(results);
      }
    });
  }).catch((err) => {
    console.log(err);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server running on ${app.get('port')}`);
});