const mongoose = require('mongoose');
const db = require('./index.js');

const fs = require('fs');

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  id: Number,
  imageUrls: Array,
  name: String,
  rating: Number,
  price: String,
  description: String,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


