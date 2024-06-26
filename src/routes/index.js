const newsRouter = require('./news');
const meRouter = require('./me');
const productsRouter = require('./products');
const siteRouter = require('./site');

function router(app) {
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/products', productsRouter)
    
    app.use('/', siteRouter)

    
}

module.exports = router;