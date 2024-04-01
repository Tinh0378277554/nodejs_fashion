module.exports = {

    // Hàm này có tác dụng là nó map và nó toObject từng phần tử bên trong
    mutipleMongooToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    }, 

    // hàm này dùng trong trang chi tiết
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }

}