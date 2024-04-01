const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, default: '' },
    price: { type: String },
    image: { type: String, minlength: 255},
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Product', Product);