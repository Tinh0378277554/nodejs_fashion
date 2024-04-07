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

     // [Get] /products/create
     create(req, res, next) {
        res.render('products/create');
    }
     // [POST] /products/store  (cái nách là tách ra từ thằng products/create, nhằm mục đích lưu trữ dữ liệu từ form)
     store(req, res, next) {
        const { name, image, videoId, price } = req.body

        const product = new Product({ name, image, videoId, price })
        product.save()
            .then(() => res.redirect('/'))
            .catch(err => {})
    }

     // [Get] /products/:id/edit
     edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('products/edit', {
                product: mongooseToObject(product)
            }))
            .catch(next)
    }

    // [PUT] /products/:id
    update(req, res, next) {
        Product.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next)
    }   
}

module.exports = new ProductController;