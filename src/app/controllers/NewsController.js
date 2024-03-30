
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [Get] /news/:slug
    show(req, res) {
        res.send('trang chi tiết tin tức')
    }
}


module.exports = new NewsController;