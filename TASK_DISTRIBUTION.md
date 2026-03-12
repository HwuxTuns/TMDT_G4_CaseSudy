# 📋 Phân Công Công Việc - Team TMDT G4

**Quy Mô**: 5 Thành Viên (3 Backend + 2 Frontend)  
**Mô Hình**: Song Song (Parallel Development)  
**Duration**: 4 Tuần (mỗi tuần = 1 module)

---

## 🎯 Chiến Lược Phân Công

### Nguyên Tắc Chính
1. **Độc Lập**: Mỗi thành viên làm trên module riêng, không chặn nhau
2. **API Contract**: Tất cả dùng chung API contract (interface) từ đầu
3. **Mock Data**: Nếu API chưa sẵn, dùng mock data để phát triển UI
4. **Parallel**: Các tasks hoạt động song song, không cần chờ

---

## 👥 Phân Công Chi Tiết

### **BACKEND DEVELOPERS (3 người)**

---

#### **BE1: Nguyễn Văn A - Authentication & User Management**

**Phạm Vi Trách Nhiệm:**
- Quản lý người dùng (User Management)
- Đăng ký / Đăng nhập / Đăng xuất
- JWT Token & Authorization
- User Profile Management
- Password Reset

**Technical Stack:**
- Framework: Express.js
- Database: MongoDB
- Authentication: JWT + bcrypt
- Validation: Joi/Yup

**Deliverables:**
```
backend/src/
├── models/User.js                 # User Schema
├── repositories/UserRepository.js # User CRUD
├── services/AuthService.js        # Auth Logic (Interface + Implementation)
├── controllers/AuthController.js  # Auth Endpoints
├── routes/authRoutes.js           # Router Setup
├── middleware/authMiddleware.js   # JWT Verification
└── config/auth.config.js          # JWT Config
```

**API Endpoints to Create:**
```
POST   /api/auth/register           # Register
POST   /api/auth/login              # Login
POST   /api/auth/logout             # Logout
GET    /api/auth/me                 # Get Current User
PUT    /api/users/:id               # Update Profile
GET    /api/users                   # Get All Users (Admin)
```

**Dependencies:** NONE (độc lập)  
**Estimated Time:** 1 Week  
**Status:** Ready to Start

---

#### **BE2: Trần Thị B - Product Management & Search/Filter/Sort**

**Phạm Vi Trách Nhiệm:**
- Quản lý sản phẩm (Product CRUD)
- Lọc sản phẩm (Filter by category, price, status)
- Tìm kiếm sản phẩm (Search by name/keyword)
- Sắp xếp sản phẩm (Sort by price, date, popularity)
- Hiển thị ảnh sản phẩm
- Quản lý danh mục sản phẩm

**Technical Stack:**
- Framework: Express.js
- Database: MongoDB
- Search: MongoDB Aggregation / Elasticsearch (optional)
- File Upload: Multer (for product images)

**Deliverables:**
```
backend/src/
├── models/Product.js                   # Product Schema
├── models/Category.js                  # Category Schema
├── repositories/ProductRepository.js   # Product CRUD + Query
├── services/ProductService.js          # Product Logic
├── controllers/ProductController.js    # Product Endpoints
├── routes/productRoutes.js             # Router
├── middleware/fileUpload.js            # File Upload Middleware
└── utils/searchUtils.js                # Search Helper Functions
```

**API Endpoints to Create:**
```
GET    /api/products                    # Get All (with filter/sort)
GET    /api/products/:id                # Get By ID
POST   /api/products                    # Create (Admin)
PUT    /api/products/:id                # Update (Admin)
DELETE /api/products/:id                # Delete (Admin)
GET    /api/categories                  # Get Categories
POST   /api/products/search             # Search Products
```

**Query Parameters Support:**
```
/api/products?category=electronics&priceMin=100&priceMax=1000&sort=-price&search=phone
```

**Dependencies:** NONE (độc lập)  
**Estimated Time:** 1 Week  
**Status:** Ready to Start

---

#### **BE3: Lê Minh C - Cart, Order, Review & Checkout**

**Phạm Vi Trách Nhiệm:**
- Quản lý giỏ hàng (Cart Management)
- Thanh toán / Tạo đơn hàng (Checkout)
- Quản lý đơn hàng (Order Management)
- Đánh giá sản phẩm (Product Reviews)
- Bình luận sản phẩm (Product Comments)
- Khuyến mại / Giá cũ - giá mới

**Technical Stack:**
- Framework: Express.js
- Database: MongoDB
- Payment: PayPal/Stripe API (integration)

**Deliverables:**
```
backend/src/
├── models/Cart.js                   # Cart Schema (Session-based or User-based)
├── models/Order.js                  # Order Schema
├── models/Review.js                 # Review Schema
├── models/Promotion.js              # Promotion/Discount Schema
├── repositories/CartRepository.js   # Cart CRUD
├── repositories/OrderRepository.js  # Order CRUD
├── repositories/ReviewRepository.js # Review CRUD
├── services/CartService.js          # Cart Logic
├── services/OrderService.js         # Order Logic (Checkout, Calculate Total)
├── services/ReviewService.js        # Review Logic
├── services/PromotionService.js     # Promotion Logic
├── controllers/CartController.js    # Cart Endpoints
├── controllers/OrderController.js   # Order Endpoints
├── controllers/ReviewController.js  # Review Endpoints
├── routes/cartRoutes.js
├── routes/orderRoutes.js
└── routes/reviewRoutes.js
```

**API Endpoints to Create:**
```
# Cart
POST   /api/cart                     # Add to Cart
GET    /api/cart                     # Get Cart
PUT    /api/cart/:itemId             # Update Cart Item
DELETE /api/cart/:itemId             # Remove from Cart
DELETE /api/cart                     # Clear Cart

# Order
POST   /api/orders                   # Create Order (Checkout)
GET    /api/orders                   # Get User Orders
GET    /api/orders/:id               # Get Order Details
PUT    /api/orders/:id               # Update Order Status (Admin)

# Review
POST   /api/products/:id/reviews     # Add Review
GET    /api/products/:id/reviews     # Get Reviews
DELETE /api/reviews/:id              # Delete Review
```

**Dependencies:** BE1 (Auth), BE2 (Products) - nhưng có thể mock  
**Estimated Time:** 1.5 Week  
**Status:** Ready to Start (mock BE1 & BE2 initially)

---

### **FRONTEND DEVELOPERS (2 người)**

---

#### **FE1: Phạm Thu D - Layout, Navigation & Product Listing**

**Phạm Vi Trách Nhiệm:**
- Tạo Layout chính (Header, Sidebar, Footer)
- Navigation Menu
- HomePage
- Product List Page
- Filter & Search UI
- Sort Controls
- Responsive Design (Mobile/Tablet/Desktop)
- Global Styles, Theme

**Technical Stack:**
- Framework: React 18 + Vite
- Styling: Tailwind CSS / CSS Modules
- State Management: Context API / Zustand (lightweight)
- HTTP Client: Axios

**Deliverables:**
```
frontend/src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── MainLayout.jsx
│   ├── Navigation/
│   │   ├── NavMenu.jsx
│   │   └── Breadcrumb.jsx
│   ├── ProductCard.jsx
│   ├── FilterBar.jsx              # Category, Price Range Filter
│   └── SortDropdown.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProductListPage.jsx
│   └── NotFoundPage.jsx
├── services/
│   └── productService.js         # API calls (mock initially)
├── context/
│   └── ProductContext.js          # Shared state for filters
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── responsive.css
└── utils/
    └── constants.js               # Constants, URLs
```

**UI Pages to Build:**
1. **HomePage** - Product showcase, featured products
2. **ProductListPage** - List with filter/sort
3. **Header/Navigation** - Logo, search, menu
4. **Footer** - Links, info

**Mock API Integration:**
- Use mock data (JSON) for products initially
- Replace with real API when BE2 is ready

**Dependencies:** NONE (độc lập, sử dụng mock data)  
**Estimated Time:** 1 Week  
**Status:** Ready to Start

---

#### **FE2: Võ Quốc E - Product Detail, Cart, Checkout & Auth Pages**

**Phạm Vi Trách Nhiệm:**
- Product Detail Page
- Shopping Cart Page
- Checkout Process (multi-step form)
- Order Confirmation
- Login / Register Pages
- User Profile Page
- Product Reviews & Comments Display
- Promotion Display (old price, discount %)
- Google Maps Integration (Contact page)
- Policies Pages (Return, Warranty, Shipping)

**Technical Stack:**
- Framework: React 18 + Vite
- Styling: Tailwind CSS / CSS Modules
- State Management: Context API / Zustand
- Form Handling: React Hook Form / Formik
- Maps: Google Maps API
- HTTP Client: Axios

**Deliverables:**
```
frontend/src/
├── pages/
│   ├── Auth/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── ForgotPasswordPage.jsx
│   ├── ProductDetailPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── OrderConfirmationPage.jsx
│   ├── UserProfilePage.jsx
│   ├── ContactPage.jsx              # With Google Maps
│   ├── ReviewPage.jsx               # Product reviews display
│   └── PoliciesPage.jsx
├── components/
│   ├── Auth/
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── ProductDetail/
│   │   ├── ProductImages.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── ReviewSection.jsx
│   │   └── RelatedProducts.jsx
│   ├── Cart/
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   └── EmptyCart.jsx
│   ├── CheckoutForm/
│   │   ├── ShippingForm.jsx
│   │   ├── PaymentForm.jsx
│   │   └── OrderReview.jsx
│   ├── Maps/
│   │   └── GoogleMapComponent.jsx
│   └── ReviewForm.jsx
├── services/
│   ├── authService.js              # Auth API calls
│   ├── orderService.js             # Order API calls
│   ├── reviewService.js            # Review API calls
│   └── cartService.js              # Cart API calls
├── context/
│   ├── AuthContext.js              # User auth state
│   ├── CartContext.js              # Cart state
│   └── CheckoutContext.js          # Checkout state
└── hooks/
    ├── useAuth.js
    ├── useCart.js
    └── useCheckout.js
```

**Pages to Build:**
1. **LoginPage** - Login form
2. **RegisterPage** - Signup form
3. **ProductDetailPage** - Product info, images, reviews
4. **CartPage** - Shopping cart items
5. **CheckoutPage** - Multi-step form (shipping, payment)
6. **OrderConfirmationPage** - Order success page
7. **ContactPage** - Google Maps + Contact form
8. **PoliciesPage** - Return, warranty, shipping policies

**Mock API Integration:**
- Initial mock data for auth, products, orders
- Replace with real API when backend is ready

**Dependencies:** BE1 (Auth), BE2 (Products), BE3 (Cart/Order)  
**Workaround:** Mock data until backends are ready  
**Estimated Time:** 1.5 Week  
**Status:** Ready to Start (with mocks)

---

## 📅 Timeline

### Week 1
- **BE1**: Auth system fully implemented
- **BE2**: Product CRUD + Search/Filter/Sort implemented
- **FE1**: Layout, HomePage, ProductListPage with mocks
- **FE2**: Auth pages, ProductDetailPage (with mocks)

### Week 2
- **BE3**: Cart + Order system implemented
- **FE1**: Integration with real BE2 API
- **FE2**: Cart & Checkout pages, real auth integration

### Week 3
- **BE3**: Reviews, Promotions fully working
- **FE2**: Order confirmation, Contact page with Maps
- **FE1**: Refinement, responsive testing

### Week 4
- **Admin Dashboard** (if needed)
- Testing & Bug Fixes
- Deployment prep

---

## 🔗 Integration Points (API Contract)

### User Service (BE1)
```javascript
// Public endpoints (no auth required)
POST /api/auth/register       // { email, password, name } → { user, token }
POST /api/auth/login          // { email, password } → { user, token }
GET  /api/auth/me             // (require token) → { user }
POST /api/auth/logout         // (require token) → { success }

// Protected endpoints (require token)
PUT  /api/users/:id           // { name, phone, address } → { user }
GET  /api/users               // (admin only) → { users[] }
```

### Product Service (BE2)
```javascript
// Public endpoints
GET  /api/products                    // query: ?search=&category=&sort=-price
GET  /api/products/:id                // → { product, reviews[] }
GET  /api/categories                  // → { categories[] }

// Admin endpoints (require admin role)
POST /api/products                    // { name, price, description, images, category }
PUT  /api/products/:id                // { ...update fields }
DELETE /api/products/:id              // → { success }
```

### Cart & Order Service (BE3)
```javascript
// User cart (require token)
GET  /api/cart                        // → { items[], total }
POST /api/cart                        // { productId, quantity } → { items[] }
PUT  /api/cart/:itemId                // { quantity } → { items[] }
DELETE /api/cart/:itemId              // → { items[] }

// Orders (require token)
POST /api/orders                      // { shippingInfo, paymentInfo } → { order }
GET  /api/orders                      // → { orders[] }
GET  /api/orders/:id                  // → { order }

// Reviews (require token)
POST /api/products/:id/reviews        // { rating, comment } → { review }
GET  /api/products/:id/reviews        // → { reviews[] }
```

---

## ✅ Checklist: Ready to Start

- [ ] Backend env setup (Node + Express + MongoDB)
- [ ] Frontend env setup (React + Vite)
- [ ] Database schema finalized
- [ ] API contract reviewed & approved
- [ ] Mock data created
- [ ] Git repository setup with feature branches
- [ ] Code style guide agreed (ESLint, Prettier)
- [ ] Communication channel (Slack/Teams)

---

## 🚀 Getting Started

**Each developer should:**

1. Create a feature branch: `git checkout -b feature/BE1-auth` (or BE2, BE3, FE1, FE2)
2. Follow the deliverables structure
3. Implement interfaces/contracts first
4. Create mock data where dependencies exist
5. Test endpoints/components locally
6. Create Pull Request when done

---

## 📞 Communication

- **Daily Standup**: 30 mins (morning)
- **Integration Meeting**: Every 2 days
- **Code Reviews**: Before merging PRs
- **Issue Tracking**: GitHub Issues / Jira

---

## Notes

- **No Blocking**: All tasks are designed to run in parallel
- **Mock First**: Frontend can use mocks while backend is in progress
- **Clear Contracts**: Use interface/type definitions for API
- **Documentation**: Each PR must include API docs or implementation notes

