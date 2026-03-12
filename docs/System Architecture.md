## System Architecture

Hệ thống được xây dựng theo kiến trúc **Client – Server** và áp dụng mô hình **Layered Architecture** nhằm tách biệt rõ ràng các thành phần trong hệ thống.

Kiến trúc này giúp hệ thống:
- Dễ bảo trì
- Dễ mở rộng
- Tách biệt business logic và dữ liệu
- Tăng khả năng tái sử dụng code

---

## Tổng quan kiến trúc

Hệ thống bao gồm 3 thành phần chính:

Frontend (Client)  
Backend (API Server)  
Database

Luồng hoạt động cơ bản:

Client (React)
↓
HTTP Request
↓
Backend API (Node.js + Express)
↓
Business Logic (Service Layer)
↓
Data Access Layer (Repository)
↓
Database (MongoDB)

---

## Backend Layered Architecture

Backend được chia thành nhiều layer khác nhau để đảm bảo mỗi layer chỉ thực hiện một trách nhiệm cụ thể.

### 1. Controller Layer

Controller là nơi tiếp nhận request từ client.

Nhiệm vụ của controller:

- Nhận HTTP request từ frontend
- Kiểm tra dữ liệu đầu vào
- Gọi service tương ứng để xử lý logic
- Trả response về cho client

Ví dụ:

ProductController  
AuthController  
OrderController

Controller **không chứa business logic phức tạp**.

---

### 2. Service Layer

Service là nơi chứa **business logic của hệ thống**.

Nhiệm vụ của service:

- Xử lý logic nghiệp vụ
- Kết hợp nhiều repository khi cần
- Kiểm tra điều kiện nghiệp vụ
- Chuẩn bị dữ liệu trước khi trả về controller

Ví dụ:

ProductService  
AuthService  
OrderService  
CartService

Service đóng vai trò **trung gian giữa Controller và Repository**.

---

### 3. Repository Layer

Repository chịu trách nhiệm **truy cập dữ liệu từ database**.

Nhiệm vụ:

- Thực hiện các truy vấn database
- Lưu dữ liệu
- Cập nhật dữ liệu
- Xóa dữ liệu

Repository không chứa business logic.

Ví dụ:

ProductRepository  
UserRepository  
OrderRepository

---

### 4. Model Layer

Model định nghĩa cấu trúc dữ liệu của hệ thống.

Bao gồm:

- Schema database
- Kiểu dữ liệu của từng entity

Ví dụ:

User  
Product  
Order  
Review  
Cart

---

## Frontend Architecture

Frontend được xây dựng bằng React và tổ chức theo cấu trúc component.

Các thành phần chính bao gồm:

pages  
components  
services  
hooks (nếu có)

### Pages

Chứa các trang chính của website.

Ví dụ:

HomePage  
ProductPage  
ProductDetailPage  
CartPage  
CheckoutPage  
LoginPage  
RegisterPage

---

### Components

Chứa các UI component có thể tái sử dụng.

Ví dụ:

ProductCard  
Navbar  
Footer  
SearchBar  
ProductFilter

---

### Services

Services chịu trách nhiệm gọi API từ backend.

Ví dụ:

authService  
productService  
orderService  
cartService

---

## Database Design Overview

Hệ thống sử dụng MongoDB để lưu trữ dữ liệu.

Các collection chính bao gồm:

users  
products  
orders  
reviews  
contacts

---

## Request Flow Example

Ví dụ luồng khi người dùng xem danh sách sản phẩm:

1. Người dùng mở trang danh sách sản phẩm trên frontend.
2. Frontend gửi request GET /api/products đến backend.
3. ProductController nhận request.
4. ProductController gọi ProductService.
5. ProductService gọi ProductRepository để truy vấn database.
6. Repository lấy dữ liệu từ MongoDB.
7. Kết quả được trả về cho Service → Controller → Client.

---

## Benefits of This Architecture

Kiến trúc này mang lại các lợi ích sau:

- Tách biệt rõ ràng trách nhiệm giữa các layer
- Dễ kiểm thử từng thành phần
- Dễ mở rộng thêm module mới
- Code dễ đọc và dễ bảo trì
