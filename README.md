# Hệ thống Website Thương mại điện tử

## 1. Giới thiệu dự án

Đây là dự án xây dựng hệ thống Website Thương mại điện tử nhằm phục vụ việc mua bán sản phẩm trực tuyến. Hệ thống cho phép người dùng tìm kiếm sản phẩm, xem chi tiết thông tin, thêm sản phẩm vào giỏ hàng và thực hiện đặt hàng.

Ngoài các chức năng dành cho người dùng, hệ thống còn cung cấp trang quản trị để quản lý sản phẩm, đơn hàng, người dùng và các đánh giá của khách hàng.

Dự án được xây dựng theo mô hình Monorepo, bao gồm hai phần chính:

* Backend: xây dựng bằng Node.js và Express, sử dụng MongoDB làm cơ sở dữ liệu.
* Frontend: xây dựng bằng React (Vite) để phát triển giao diện người dùng.

Kiến trúc backend được thiết kế theo mô hình Layered Architecture kết hợp với các nguyên tắc SOLID và lập trình hướng đối tượng (OOP) nhằm đảm bảo hệ thống dễ bảo trì, dễ mở rộng và rõ ràng trong việc phân tách trách nhiệm giữa các thành phần.

---

# 2. Mục tiêu của dự án

Mục tiêu của dự án:

* Xây dựng một hệ thống thương mại điện tử cơ bản.
* Áp dụng kiến trúc nhiều tầng (Layered Architecture).
* Áp dụng các nguyên tắc thiết kế phần mềm SOLID.
* Tổ chức code theo hướng dễ bảo trì và dễ mở rộng.
* Phát triển giao diện web hiện đại và responsive.

---

# 3. Chức năng chính của hệ thống

## 3.1 Chức năng dành cho người dùng

* Đăng ký tài khoản
* Đăng nhập / đăng xuất
* Tìm kiếm sản phẩm
* Lọc sản phẩm
* Sắp xếp sản phẩm
* Xem chi tiết sản phẩm
* Thêm sản phẩm vào giỏ hàng
* Thanh toán
* Đánh giá và bình luận sản phẩm
* Gửi liên hệ / phản hồi
* Xem chính sách đổi trả, bảo hành, vận chuyển

## 3.2 Chức năng quản lý sản phẩm

Thông tin mỗi sản phẩm bao gồm:

* Tên sản phẩm
* Mô tả
* Hình ảnh sản phẩm
* Giá hiện tại
* Giá cũ
* Khuyến mại
* Danh mục
* Số lượng tồn kho
* Đánh giá
* Bình luận

## 3.3 Quản lý đơn hàng

* Thêm sản phẩm vào giỏ hàng
* Tính tổng tiền
* Tạo đơn hàng
* Theo dõi trạng thái đơn hàng

## 3.4 Chức năng bổ sung

* Google Maps hiển thị vị trí cửa hàng
* Giao diện responsive cho nhiều thiết bị

## 3.5 Trang quản trị

* Quản lý sản phẩm
* Quản lý đơn hàng
* Quản lý người dùng
* Quản lý đánh giá

---

# 4. Kiến trúc hệ thống

Backend được xây dựng theo mô hình **Layered Architecture** gồm các tầng:

* **Controller**: Nhận request từ client và trả response.
* **Service**: Xử lý logic nghiệp vụ.
* **Repository**: Tương tác với cơ sở dữ liệu.
* **Model**: Định nghĩa schema MongoDB.

Luồng xử lý cơ bản:

```
Client → Controller → Service → Repository → Database
```

Kiến trúc này giúp:

* Phân tách trách nhiệm rõ ràng
* Dễ kiểm thử
* Dễ mở rộng hệ thống

---

# 5. Cấu trúc thư mục dự án (kèm chú thích chức năng)

```
TMDT_G4_CaseStudy
│
├── backend
│   │
│   ├── src
│   │
│   │   ├── controllers
│   │   │   AuthController.js
│   │   │   ProductController.js
│   │   │   CartController.js
│   │   │   OrderController.js
│   │   │   ReviewController.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Nhận request từ frontend
│   │   │   - Gọi Service để xử lý logic
│   │   │   - Trả response JSON cho client
│   │   │
│   │
│   │   ├── services
│   │   │
│   │   │   interfaces
│   │   │       IAuthService.js
│   │   │       IProductService.js
│   │   │       IOrderService.js
│   │   │
│   │   │   AuthService.js
│   │   │   ProductService.js
│   │   │   CartService.js
│   │   │   OrderService.js
│   │   │   ReviewService.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Chứa toàn bộ business logic
│   │   │   - Xử lý lọc, tìm kiếm, sắp xếp sản phẩm
│   │   │   - Xử lý logic giỏ hàng
│   │   │   - Tính tổng tiền đơn hàng
│   │   │   - Xử lý đánh giá sản phẩm
│   │   │
│   │
│   │   ├── repositories
│   │   │
│   │   │   UserRepository.js
│   │   │   ProductRepository.js
│   │   │   OrderRepository.js
│   │   │   ReviewRepository.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Tương tác trực tiếp với MongoDB
│   │   │   - Thực hiện các thao tác CRUD
│   │   │   - Không chứa business logic
│   │   │
│   │
│   │   ├── models
│   │   │
│   │   │   User.js
│   │   │   Product.js
│   │   │   Order.js
│   │   │   Review.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Định nghĩa schema MongoDB
│   │   │   - Mô tả cấu trúc dữ liệu
│   │   │
│   │
│   │   ├── routes
│   │   │
│   │   │   authRoutes.js
│   │   │   productRoutes.js
│   │   │   cartRoutes.js
│   │   │   orderRoutes.js
│   │   │   reviewRoutes.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Định nghĩa API endpoint
│   │   │   - Mapping route → controller
│   │   │
│   │
│   │   ├── middleware
│   │   │
│   │   │   authMiddleware.js
│   │   │   errorHandler.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Kiểm tra JWT token
│   │   │   - Xử lý lỗi chung cho hệ thống
│   │   │
│   │
│   │   ├── config
│   │   │
│   │   │   db.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Kết nối MongoDB
│   │   │
│   │
│   │   └── app.js
│   │
│   │       # Chức năng:
│   │       - Khởi tạo Express server
│   │       - Load middleware
│   │       - Load routes
│
│
├── frontend
│   │
│   ├── src
│   │
│   │   ├── features
│   │   │
│   │   │   auth
│   │   │       LoginPage.jsx
│   │   │       RegisterPage.jsx
│   │   │
│   │   │       # Chức năng:
│   │   │       - Giao diện đăng nhập / đăng ký
│   │   │
│   │   │
│   │   │   product
│   │   │       ProductList.jsx
│   │   │       ProductDetail.jsx
│   │   │       FilterBar.jsx
│   │   │
│   │   │       # Chức năng:
│   │   │       - Hiển thị danh sách sản phẩm
│   │   │       - Lọc và tìm kiếm sản phẩm
│   │   │       - Sắp xếp sản phẩm
│   │   │
│   │   │
│   │   │   cart
│   │   │       CartPage.jsx
│   │   │
│   │   │       # Chức năng:
│   │   │       - Hiển thị giỏ hàng
│   │   │       - Cập nhật số lượng
│   │   │
│   │   │
│   │   │   review
│   │   │       ReviewSection.jsx
│   │   │
│   │   │       # Chức năng:
│   │   │       - Hiển thị đánh giá sản phẩm
│   │   │       - Cho phép bình luận
│   │   │
│   │   │
│   │   │   admin
│   │   │       AdminDashboard.jsx
│   │   │
│   │   │       # Chức năng:
│   │   │       - Quản lý sản phẩm
│   │   │       - Quản lý đơn hàng
│   │   │       - Quản lý người dùng
│   │
│   │
│   │   ├── components
│   │   │
│   │   │   Navbar.jsx
│   │   │   Footer.jsx
│   │   │   ProductCard.jsx
│   │   │
│   │   │   # Chức năng:
│   │   │   - Các UI component dùng chung
│   │   │
│   │
│   │   ├── api
│   │   │
│   │   │   axiosInstance.js
│   │   │
│   │   │   # Chức năng:
│   │   │   - Cấu hình axios
│   │   │   - Gửi request đến backend
│   │   │
│   │
│   │   └── routes
│   │
│   │       PrivateRoute.jsx
│   │
│   │       # Chức năng:
│   │       - Kiểm tra đăng nhập
│   │       - Bảo vệ route
│
│
├── docker-compose.yml
│
│   # Chức năng:
│   # Chạy MongoDB bằng Docker
│
│
└── README.md
```

---

# 6. Hướng dẫn chạy dự án

### Bước 1: Clone repository

```
git clone <repository-url>
cd TMDT_G4_CaseStudy
```

### Bước 2: Chạy MongoDB

```
docker-compose up -d
```

### Bước 3: Chạy backend

```
cd backend
npm install
npm run dev
```

### Bước 4: Chạy frontend

```
cd frontend
npm install
npm run dev
```

---

# 7. Chuẩn API Response

```
{
  "success": true,
  "data": {},
  "message": "Success"
}
```

---

# 8. Quy tắc làm việc nhóm

* Không push trực tiếp vào main.
* Mỗi thành viên làm việc trên một branch riêng.
* Tạo Pull Request trước khi merge.

Ví dụ:

```
feat/auth
feat/product
feat/cart
feat/order
```

---

# 9. Công nghệ sử dụng

Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

Frontend:

* React
* Vite
* Axios
* React Router

Công cụ:

* Docker
* Git
* GitHub

---

# 10. Mục đích dự án

Dự án được thực hiện nhằm mục đích học tập và nghiên cứu về phát triển hệ thống web hiện đại, áp dụng các nguyên tắc thiết kế phần mềm và kiến trúc hệ thống.
