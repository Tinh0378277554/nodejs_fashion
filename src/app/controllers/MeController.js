const Product = require('../models/Product');
const { mutipleMongooToObject } = require('../../util/mongoose');

class MeController {

    // [Get]  /me/stored/products
    storedProducts(req, res, next) {
        Product.find({})
            .then(products => res.render('./me/stored-products', {
                products: mutipleMongooToObject(products)
            }))
            .catch(next)
    }   
}


module.exports = new MeController;