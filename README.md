# Hệ thống Website Thương mại điện tử

## 1. Giới thiệu dự án

Đây là dự án Website Thương mại điện tử được xây dựng nhằm phục vụ việc mua bán sản phẩm trực tuyến. Hệ thống cho phép người dùng tìm kiếm, xem chi tiết sản phẩm, thêm sản phẩm vào giỏ hàng và thực hiện đặt hàng. Ngoài ra, hệ thống còn cung cấp chức năng đánh giá sản phẩm và gửi phản hồi cho cửa hàng.

Bên cạnh các chức năng dành cho người dùng, hệ thống còn có trang quản trị giúp quản lý sản phẩm, đơn hàng, người dùng và các đánh giá của khách hàng.

Dự án được xây dựng theo mô hình Monorepo, bao gồm hai phần chính:

* Backend: Xây dựng bằng Node.js và Express, sử dụng MongoDB làm cơ sở dữ liệu.
* Frontend: Xây dựng bằng React (Vite) để phát triển giao diện người dùng.

Kiến trúc backend tuân theo mô hình Layered Architecture kết hợp với các nguyên tắc SOLID và lập trình hướng đối tượng (OOP) nhằm đảm bảo hệ thống dễ bảo trì, dễ mở rộng và rõ ràng trong việc phân tách trách nhiệm giữa các thành phần.

---

## 2. Chức năng chính của hệ thống

### 2.1 Chức năng dành cho người dùng

Hệ thống cung cấp các chức năng cơ bản sau:

* Đăng ký tài khoản
* Đăng nhập và đăng xuất
* Xem danh sách sản phẩm
* Tìm kiếm sản phẩm theo từ khóa
* Lọc sản phẩm theo danh mục hoặc khoảng giá
* Sắp xếp sản phẩm theo tiêu chí khác nhau
* Xem chi tiết thông tin sản phẩm
* Thêm sản phẩm vào giỏ hàng
* Quản lý giỏ hàng
* Thanh toán và tạo đơn hàng
* Đánh giá và bình luận sản phẩm
* Gửi phản hồi hoặc liên hệ với cửa hàng
* Xem thông tin chính sách đổi trả, bảo hành và vận chuyển

### 2.2 Chức năng liên quan đến sản phẩm

Mỗi sản phẩm trong hệ thống bao gồm các thông tin sau:

* Tên sản phẩm
* Mô tả sản phẩm
* Hình ảnh sản phẩm
* Giá hiện tại
* Giá cũ (nếu có khuyến mại)
* Thông tin khuyến mại
* Danh mục sản phẩm
* Số lượng tồn kho
* Điểm đánh giá
* Bình luận từ người dùng

### 2.3 Quản lý đơn hàng

Hệ thống hỗ trợ các chức năng liên quan đến đơn hàng:

* Thêm sản phẩm vào giỏ hàng
* Tính tổng tiền của đơn hàng
* Tạo đơn hàng từ giỏ hàng
* Theo dõi trạng thái đơn hàng

### 2.4 Các chức năng bổ sung

Ngoài các chức năng chính, hệ thống còn hỗ trợ:

* Hiển thị vị trí cửa hàng thông qua Google Maps
* Giao diện tương thích với nhiều kích thước màn hình (responsive)

### 2.5 Trang quản trị hệ thống

Trang quản trị được xây dựng để phục vụ việc quản lý hệ thống, bao gồm các chức năng:

* Quản lý sản phẩm (thêm, sửa, xóa)
* Quản lý đơn hàng
* Quản lý người dùng
* Quản lý đánh giá và bình luận sản phẩm

---

## 3. Kiến trúc hệ thống

Backend của hệ thống được xây dựng theo mô hình Layered Architecture nhằm phân tách rõ ràng các tầng xử lý trong hệ thống.

Các tầng chính bao gồm:

* Controller: Xử lý request từ client và trả về response.
* Service: Chứa logic nghiệp vụ của hệ thống.
* Repository: Thực hiện truy vấn và thao tác với cơ sở dữ liệu.
* Model: Định nghĩa cấu trúc dữ liệu sử dụng trong MongoDB thông qua Mongoose.

Mô hình này giúp hệ thống dễ bảo trì, dễ kiểm thử và thuận tiện cho việc mở rộng chức năng trong tương lai.

---

## 4. Cấu trúc thư mục dự án

Cấu trúc tổng thể của dự án được tổ chức như sau:

```
ecommerce-project
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   │   └── interfaces
│   │   ├── repositories
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── config
│   │   └── app.js
│
├── frontend
│   ├── src
│   │   ├── features
│   │   │   ├── auth
│   │   │   ├── product
│   │   │   ├── cart
│   │   │   ├── review
│   │   │   └── admin
│   │   ├── components
│   │   ├── api
│   │   └── routes
│
├── docker-compose.yml
│
└── README.md
```

Backend chứa toàn bộ logic xử lý, API và kết nối cơ sở dữ liệu.
Frontend chứa giao diện người dùng và logic tương tác với API.

---

## 5. Yêu cầu môi trường

Trước khi chạy dự án, cần cài đặt các công cụ sau:

1. Node.js (khuyến nghị phiên bản 18 trở lên)

Kiểm tra:

```
node -v
npm -v
```

2. Docker

Docker được sử dụng để chạy MongoDB.

Kiểm tra:

```
docker -v
docker compose version
```

3. Git

Dùng để clone và quản lý mã nguồn.

Kiểm tra:

```
git --version
```

---

## 6. Hướng dẫn chạy dự án

### Bước 1: Clone repository

```
git clone <repository-url>
```

```
cd ecommerce-project
```

### Bước 2: Khởi chạy MongoDB bằng Docker

```
docker-compose up -d
```

Sau khi chạy thành công, MongoDB sẽ hoạt động trên cổng mặc định.

---

### Bước 3: Chạy Backend

Di chuyển vào thư mục backend:

```
cd backend
```

Cài đặt các thư viện cần thiết:

```
npm install
```

Chạy server:

```
npm run dev
```

Backend sẽ chạy tại địa chỉ:

```
http://localhost:5000
```

---

### Bước 4: Chạy Frontend

Mở một terminal mới và di chuyển vào thư mục frontend:

```
cd frontend
```

Cài đặt các thư viện:

```
npm install
```

Chạy ứng dụng React:

```
npm run dev
```

Frontend sẽ chạy tại:

```
http://localhost:5173
```

---

## 7. Biến môi trường

Trong thư mục backend, tạo file `.env` với nội dung ví dụ:

```
PORT=5000
MONGO_URI=mongodb://admin:admin123@localhost:27017
JWT_SECRET=your_secret_key
```

Các biến môi trường này được sử dụng để cấu hình cổng server, kết nối cơ sở dữ liệu và bảo mật xác thực người dùng.

---

## 8. Chuẩn phản hồi API

Tất cả API trong hệ thống nên trả về dữ liệu theo cấu trúc thống nhất:

```
{
  "success": true,
  "data": {},
  "message": "Success"
}
```

Việc thống nhất cấu trúc phản hồi giúp frontend dễ dàng xử lý dữ liệu và đảm bảo tính nhất quán trong toàn bộ hệ thống.

---

## 9. Quy tắc làm việc nhóm

Để đảm bảo quá trình phát triển được đồng bộ, nhóm cần tuân thủ các quy tắc sau:

* Không push trực tiếp vào nhánh `main`.
* Mỗi thành viên làm việc trên một nhánh riêng.
* Sau khi hoàn thành chức năng, tạo Pull Request để được review trước khi merge.

Ví dụ đặt tên nhánh:

```
feat/auth
feat/product
feat/cart
feat/order
```

---

## 10. Công nghệ sử dụng

Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)

Frontend:

* React
* Vite
* Axios
* React Router

Công cụ hỗ trợ:

* Docker
* Git
* GitHub

---

## 11. Mục đích dự án

Dự án được thực hiện nhằm mục đích học tập và nghiên cứu trong quá trình phát triển phần mềm, đặc biệt là việc áp dụng các nguyên tắc thiết kế phần mềm như SOLID, kiến trúc nhiều tầng và phát triển ứng dụng web hiện đại.
