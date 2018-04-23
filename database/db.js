const { Pool } = require('pg');

const config = {
  user: 'michaeldimitras', // env var: PGUSER
  database: 'michaeldimitras', // env var: PGDATABASE
  password: null, // env var: PGPASSWORD
  port: 5432, // env var: PGPORT
};

const pool = new Pool(config);

pool.connect();

// Get all reviews for a particular product
const getReviewsByProduct = (productId, serverRes) => {
  pool.query(`SELECT * FROM reviews WHERE product_id = ${productId}`, (err, dbRes) => {
    if (err) {
      throw err;
    }
    serverRes.status(200).send((dbRes.rows));
  });
};

/*
 *   To-do:
 *     Get recent reviews
 *     Get top reviews
 *     Post new review
 */

module.exports.getReviewsByProduct = getReviewsByProduct;
