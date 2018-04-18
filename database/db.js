const { Client } = require('pg');

var config = {
  user: 'michaeldimitras', // env var: PGUSER
  database: 'michaeldimitras', // env var: PGDATABASE
  password: null, // env var: PGPASSWORD
  port: 5432, // env var: PGPORT
}

const client = new Client(config);

client.connect()

//Get all reviews for a particular product
let getReviewsByProduct = function (productId, serverRes) {
    client.query(`SELECT * FROM reviews WHERE product_id = ${productId}`, (err, dbRes) => {
      if (err) {
        throw err
      }
      serverRes.status(200).send((dbRes.rows));
    })
}

/*
 *   To-do:
 *     Get recent reviews
 *     Get top reviews
 *     Post new review
 */

module.exports.getReviewsByProduct = getReviewsByProduct;