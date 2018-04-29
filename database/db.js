const { Pool } = require('pg');

const config = {
  user: 'shamazon', // env var: PGUSER
  database: 'shamazondb', // env var: PGDATABASE
  password: null, // env var: PGPASSWORD
  port: 5432, // env var: PGPORT
};

const pool = new Pool(config);

const getReviewsByProduct = (productId, serverRes) => {
  pool.query(`SELECT * FROM reviews WHERE product_id = ${productId} ORDER BY date DESC LIMIT 10`, (err, recentReviewsRes) => {
    if (err) {
      throw err;
    }
    pool.query(`SELECT * FROM reviews WHERE product_id = ${productId} ORDER BY (helpful - unhelpful) DESC LIMIT 8`, (err, topReviewsRes) => {
      if (err) {
        throw err;
      }
      pool.query(`SELECT COUNT(id) FROM reviews WHERE product_id = ${productId}`, (err, countRes) => {
        if (err) {
          throw err;
        }
        serverRes.status(200)
          .send({
            recent: recentReviewsRes.rows,
            top: topReviewsRes.rows,
            count: countRes.rows[0].count,
          });
      });
    });
  });
};

module.exports.getReviewsByProduct = getReviewsByProduct;
