Install ExpressJ

 : search google: nodejs {tìm hiểu về nodejs}
-> Lý thuyết: 
- Node.js là môi trường thời gian chạy JavaScript mã nguồn mở và đa nền tảng. Nó là một công cụ phổ biến cho hầu hết mọi loại dự án!
- Node.js chạy công cụ JavaScript V8 engine, cốt lõi của Google Chrome, bên ngoài trình duyệt. Điều này cho phép Node.js hoạt động rất hiệu quả.



- 2p20`
Khởi động một  dự án Nodejs
Bước 1: gõ lệnh ở terminal là node -v {kiểm tra xem đã cày hay chưa}
Bước 2: gõ lệnh npm -v {kiểm tra xem đã cài thằng quản lí thư viện nodejs hay chưa}
Bước 3: gõ lệnh npm init {để khởi tạo một dự án}
	Giải thích:
	Description: muốn viết gì vào cũng được
	Entry point: {mặc dịnh là file index.js | muốn đổi cũng được}
- Sau khi xong mấy bước trên project sẽ tự tạo ra file package.json  -> tiếp đến là ta tạo ra file index.js
 search google: npm expressjs {để xem lệnh cài đặt expressjs}
+ gõ lệnh: npm install express -> trong file package.json sẽ xuất hiện dependencies(là cái phụ thuộc, tức là dự án chúng ta đã cài nó là phụ thuộc)
- file package.json là quản lý sự phụ thuộc của dự án
- file package-lock.json là quản lý sự phụ thuộc của sự phụ thuộc
- 10p30` search google: expressjs {để vào trang chủ -> vào Getting started -> vào Hello world}
Copy cái đoạn mã bên dưới đây vào file index.js


- Đứng tại file index.js gõ lệnh node index.js -> tức là nó đang lắng nghe cái port và hiển thị lên trình duyệt


 Install Nodemon & inspector
- Cộng dụng của Nodemon: là lắng nghe các thay đổi của những file trong sourcecode ( tức là tự nó reload lại cái dự án, k cần phải ctr +c để thoát r chạy lại , tức là nó chạy dòng lệnh nodemon index.js luôn rồi)
 search google:  npm nodemon { để cài đặt và đọc cách sử dụng}
	Gõ lệnh npm  install  nodemon  --save-dev
	Sau khi cài xong nó sẽ hiện trong file package.json ở phần dependencies
	-> tiếp đến là vào file package.json -> kiếm phần scripts -> tạo ra phần “start”: “nodemon   --ínspect  index.js”  -> tiếp đến là chèn thằng  --inspect ( công dụng là debug lỗi )  vào giữa nodemon và index.js

 Install Morgan
- search google: npm morgan { để cài đặt ( công dụng là nó hiện cho ta thấy những cái log ) }
Gõ lệnh : npm  I  morgan  --save-dev  để cài đặt

	Vào file index.js  -> import nó vào  const morgan = require('morgan')
->  tiếp đến là cài đặt cái log theo kiểu tiêu chuẩn app.use(morgan('combined'))

- Cộng dụng của thằng morgan này giup ta nhận biết được là có lỗi gì hay không, và cái request có gửa lên tới server hay chưa
 
 Template engine ( handlebars )
 - Template engine: giúp ta tạo giao diện động, tăng khả năng tái sử dụng của html, linh hoạt dễ quản lý.
- 3p34`  search google: express handlebars  {xem cách cài và cách sử dụng}
- 7p10` cấu trúc lại file:  tạo ra folder src  ->  ném thằng index.js vào đó  -> sau đó vào file package.json tìm đến main sửa lại thành src/index.js, sửa luôn thằng ở scripts -> từ folder src tạo folder là resourcecs -> từ resuorces tạo 2 folder là scss và views
- Tới bước này là đang sai cấu trúc nên từ thằng views -> search google: express handlebars set views folder
 ở phút 14 có giải thích đoạn path.join 
Nhớ thêm resources/ trước views
- Bước tiếp theo là từ folder views -> tạo ra folder layouts  -> main.handlebars 
-  search google : express handlebars -> bấm ctrl + f để tìm đến example  -> kiếm thằng advanced usage
- cái thằng layout là những cái chung
- Đọc DOC express handlebars -> ctrl + f -> tìm api đến config 
- tạo partials để tách từng phần , cú pháp nạp là {{> cái tên file  }}
 STATIC FILE & SCSS
- Từ folder src -> tạo ra folder public -> tạo folder img 


Là nó sẽ từ thằng public trở đi -> và nó sẽ đi tìm tiếp các file tĩnh

- 4p4`  search google: npm node --sass {để xem cách cài}
Gõ lệnh npm I node --sass --save-dev
- dọc cách sử dụng : ctrl + F  -> usage -> tìm đến cái command line (để lắng nghe sự thay đổi file css)
- vào file package.json -> tìm đến thằng scripts 

- ngang cấp với package.json -> tạo ra file nodemon.json -> điền vào những cái đuôi cần lắng nghe

 Basic routing
1p5`  search google: expressjs.com  -> getting started  -> basic routing

 [MVC] Router & Controller
là nói về lý thuyết ( Mô hình MVC )
- Từ src -> tao folder routes  |  Từ src tạo ra folder app/controllers
- từ router -> tạo file news.js để quản lý cái router liên quan đến thằng news
- Thứ tự luồng : đầu tiên vào file NewsController để tạo ra class |  từ routes ->  tạo ra index.js (mục đích là chứa mấy cái định tuyến với cái function để cho thằng index ở ngoài khỏi vướn) | từ thằng index.routes tạo ra một cái function
  search google: expressjs.com -> api -> 4X  ->  router  -> trong file news.js ở trong router nạp vào 



 [MVC] Model
- Nội dung bài học:

 search google : mongoose github  { để xem cách cài và sử dụng ( cộng dụng của mongoose là giúp cho chặt chẽ hơn, nó đứng giữa nodejs và mongodb ) }
- Mongoose là một công cụ giúp chúng ta mô hình hóa mongodb, được thiết kế để làm việc môi trường bất đồng bộ, mongoose hỗ trợ promise và callback
- tải mongoose và import vào
- từ src -> tạo file config/db/index.js  -> cần tạo ra một hàm để kết nối đến mongodb
-  tạo modal -> từ app -> tạo ra file models/product.js  -> đọc doc phần defining a modal để import cái schema vào nhớ là import thằng mongoose vào nửa 
-  module.exports = mongoose.model('product', product);

- vào thằng site.js trong controller -> phút 24  search expressjs  -> vào phần api -> 4x -> response
- Từ controller muốn tương tác với model (là những dữ trong mongoodb): tại file SiteController.js import cái thằng models vào 
 [CRUD] Read form DB
-  search google: handlebarsjs ( cách để lấy dữ liệu và render ra view )
-  từ folder src -> tạo ra folder util ( viết ra những cái hàm sẵng để khắc phục cái lỗi của handlebars ) -> tạo thư mục mongoose.js 	

 Course detail page
- tạo các slug trong Database (mongoodb) 
-  Vào view home để chuyền thẻ a vào hình ảnh và tên mô tả, để có thể điều hướng qua trang chi tiết
- chưa có cái router -> cần đi tạo nó -> vào routes -> tạo products.js 
- có 3 kiểu truyền dữ liệu { req.query.name ( dạng query parametor) }
			         { req.body.name ( dạng: post method ) }
			         { req.params.slug ( nếu k thích đặt slug thì đặt là name or gì đó cũng được ) }
- search google: mongoose.js -> tìm đến phần queries 
   tím đến thằng model.findOne

 [CRUD] Create new product

- Vào phần folder routes -> vào products.js -> tạo ra một cái router

- >  đi qua Folder controller -> tạo phương thức create ->    -> ra chạy thử xem đã vào hay chưa
->  tiếp theo là vào folder view -> vào folder products -> tạo  ra file create.hbs -> dùng bootstrap để tạo ra cái form  -> vào lại phần controller -> để ghi lại cái dòng là res.render(‘products/create’)
-> điều chỉnh hành vi mặc định của Form -> 

-  ->  vào phần controller -> thêm một cái phương thức nửa là post   ->   -> vào thằng routes -> vào products -> 
-> Tiếp thao là  -> cho nó hiện ra theo kiểu json
-  search google  mongoosejs {để đọc tài liệu -> kiếm phần modal ->  contrucsting document}
->  sau khi đọc doc ->  

- Nhớ là phải vào thằng modal để thêm những cái trường chưa có.
-   search google: expressjs { kiếm đến phần API reference  ->  responset  -> redirect (là chuyển hướng trang)  }  ->  bổ sung -> 
- > tiếp theo là cho nó tự đọng tạo slug khi ấn vào khóa học vừa mới tạo  ->  search google : mongooose slug generator { cài đặt vào và xem cách dùng }  -> mở folder models và import slug vào  và add thêm thằng  mongoose.plugin(slug);
   
-> tiếp theo là thêm  slug: { type: String, slug: "title" } ở thằng schema -> cái thằng title lấy theo name nên đổi thành name    

	 [CRUD] Update Course
 - Sửa lại code giao diện phần header đến hết phút thứ 6

- Vào routes -> tạo me.js -> 

- Tiếp theo vào Controller -> tạo MeController > 

- vào routes -> index.js để import vào > 
- tiếp theo vào view -> tạo folder me -> tạo stored-products.hbs -> vào bootstrap kiếm table -> xây dựng layout
- Tiếp theo vào MeController -> 

- vào bên view -> vào me.hbs -> 
-   Tiếp theo là phải lấy ra cái index(chỉ mục của array) -> đọc DOC ( handlebarjs ) -> tìm đến Built-in-helpers -> ctr + F -> @index ->  vào view -> 
-> Tiếp theo là đọc DOC -> vào phần introduction -> custom helpers  ( để giải quyết cái thằng index )
Kết hợp với thư viện express handlebarjs -> vào thằng src -> index.js ->
 

->   sửa lại 
-> vào view -> vào view -> sửa lại thành 
-> tiếp theo là tạo 2 cái nút xóa và sửa ->  tạo 2 thẻ a -> để đường link vào thẻ a ở nút sửa 

-> vào routes -> products -> 
-> vào Contrller sửa , vào view sửa -
 : đổ dữ liệu từ id vào các trường -> vào Controller -> product.js -> 
-> vào bên view -> 
-> từ phút 25 -> nói về vấn đề các phương thức -> tự xem tiếp video


 [CRUD] Delete Course
- Học từ phút thứ 6
-> Vào view -> me -> stored-products.hbs -> dùng bootstrap để thay đổi
-  : vào routes -=> vào products.js để thêm cái phương thức là delete ->  vào controller tạo phương thức tương ứng. 
-   : đọc DOC bootstrap -> modal  -> ctr + f -> whatever -> thêm cái data-id 

-  tiếp tục đọc DOC bootstrap về phần sử dụng js
- trở đi là sử lý sự kiện js trong file stored-products.hbs