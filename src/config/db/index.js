const mongoose = require('mongoose');

   async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tinh_product_dev');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('lỗi rồi')
    }
}

module.exports = { connect };