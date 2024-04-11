const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, default: '' },
    price: { type: String },
    image: { type: String, minlength: 255},
    videoId: { type: String},
    slug: { type: String, slug: 'name', unique: true},
  }, {timestamps: true});

  module.exports = mongoose.model('Product', Product);