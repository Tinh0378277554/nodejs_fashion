const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {

    // [Get] /products/:slug
    show(req, res, next) {

        Product.findOne({ slug: req.params.slug})
            .then(product => {
                res.render('./products/showdetail', { product: mongooseToObject(product) });
            }) 
            .catch(next)
       
    }
}

module.exports = new ProductController;