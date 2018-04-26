const mongoose = require('mongoose');

// const mongoUri = 'mongodb://localhost/shamazon-products';
const mongoUri = 'mongodb://localhost/Shamazon';
const db = mongoose.connect(mongoUri);

module.exports = db;