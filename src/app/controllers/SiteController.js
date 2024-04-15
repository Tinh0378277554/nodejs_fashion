const Product = require('../models/Product');
const { mutipleMongooToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    home(req, res, next) {

        // viết theo kiểu promise
        Product.find({})
            .then(products => {
                res.render('home', { 
                    products: mutipleMongooToObject(products)
                })
            })
            .catch(next)

        
        
        // const products = await Product.find({})
        // res.json(products)

        // res.render('home')
    }

    // [Get] /search
    search(req, res) {
        res.render('search')
    }

    
}


module.exports = new SiteController;