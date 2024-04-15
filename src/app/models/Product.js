const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, maxlength: 255, required: true},
    price: { type: String, maxlength: 255},
    image: { type: String, maxlength: 255},
    videoId: { type: String},
    slug: { type: String, slug: "name", unique: true},
  }, {timestamps: true});

  module.exports = mongoose.model('Product', Product);