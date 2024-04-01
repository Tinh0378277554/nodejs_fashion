
const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// này là hiển thị ra cái log theo kiểu tiêu chuẩn
app.use(morgan('combined'))

// template engine: sử dụng handlebars
app.engine('hbs', engine({
  extname : ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// phần khởi tạo về tuyến đường
route(app)

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})
