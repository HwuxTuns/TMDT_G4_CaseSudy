# Phan Cong Cong Viec - Team TMDT G4 (8 Thanh Vien)

Quy mo: 8 thanh vien (4 Backend + 4 Frontend)  
Mo hinh: Song song, chia theo module doc lap  
Duration: 4 tuan

---

## Muc Tieu Phan Cong

1. Moi thanh vien co khoi luong tuong duong, co dau ra ro rang.
2. Han che phu thuoc cheo de team code song song.
3. Frontend duoc phep dung mock data neu backend chua xong.
4. Moi module deu co owner chinh va owner backup.

---

## Co Cau Team

Backend:
1. BE1 - Auth + User
2. BE2 - Product + Category + Search/Filter/Sort
3. BE3 - Cart + Checkout + Order
4. BE4 - Review + Promotion + DB Optimization + Logging

Frontend:
1. FE1 - Layout System + Home + Navigation
2. FE2 - Product List + Search + Filter + Sort UI
3. FE3 - Product Detail + Review UI + Related Products
4. FE4 - Auth UI + Cart + Checkout + Order History

---

## Phan Cong Chi Tiet Backend (4 Nguoi)

### BE1 - Authentication va User Management

Pham vi:
1. Dang ky, dang nhap, dang xuat, refresh token.
2. Profile user, cap nhat thong tin, doi mat khau.
3. Middleware auth va phan quyen user/admin.

Deliverables:
1. `backend/src/repositories/UserRepository.js`
2. `backend/src/services/AuthService.js`
3. `backend/src/controllers/AuthController.js`
4. Hoan thien `backend/src/routes/authRoutes.js`
5. Cap nhat `backend/src/middleware/authMiddleware.js` neu can

API phu trach:
1. `POST /api/auth/register`
2. `POST /api/auth/login`
3. `POST /api/auth/logout`
4. `GET /api/auth/me`
5. `PUT /api/users/:id`
6. `GET /api/users`

Khoi luong du kien: 20 point

### BE2 - Product, Category, Search va Sort

Pham vi:
1. CRUD san pham va danh muc.
2. Tim kiem theo tu khoa.
3. Loc theo gia, danh muc, khuyen mai.
4. Sap xep theo gia, moi nhat, pho bien.

Deliverables:
1. `backend/src/repositories/ProductRepository.js`
2. `backend/src/repositories/CategoryRepository.js`
3. `backend/src/services/ProductService.js`
4. `backend/src/controllers/ProductController.js`
5. Hoan thien `backend/src/routes/productRoutes.js`

API phu trach:
1. `GET /api/products`
2. `GET /api/products/:id`
3. `POST /api/products`
4. `PUT /api/products/:id`
5. `DELETE /api/products/:id`
6. `GET /api/categories`
7. `POST /api/products/search`

Khoi luong du kien: 20 point

### BE3 - Cart, Checkout va Order Flow

Pham vi:
1. Them, sua, xoa san pham trong gio hang.
2. Checkout va tao don hang.
3. Theo doi trang thai don hang.
4. Lich su mua hang cua user.

Deliverables:
1. `backend/src/repositories/CartRepository.js`
2. `backend/src/repositories/OrderRepository.js`
3. `backend/src/services/CartService.js`
4. `backend/src/services/OrderService.js`
5. `backend/src/controllers/CartController.js`
6. `backend/src/controllers/OrderController.js`
7. Hoan thien `backend/src/routes/cartRoutes.js`
8. Hoan thien `backend/src/routes/orderRoutes.js`

API phu trach:
1. `GET /api/cart`
2. `POST /api/cart`
3. `PUT /api/cart/:itemId`
4. `DELETE /api/cart/:itemId`
5. `DELETE /api/cart`
6. `POST /api/orders`
7. `GET /api/orders`
8. `GET /api/orders/:id`
9. `PUT /api/orders/:id`

Khoi luong du kien: 20 point

### BE4 - Review, Promotion va Database Reliability

Pham vi:
1. CRUD danh gia, comment san pham.
2. Logic khuyen mai, gia cu, gia moi, phan tram giam.
3. Tinh index MongoDB va toi uu query.
4. Logging, error trace, hardening cho production.

Deliverables:
1. `backend/src/repositories/ReviewRepository.js`
2. `backend/src/repositories/PromotionRepository.js`
3. `backend/src/services/ReviewService.js`
4. `backend/src/services/PromotionService.js`
5. `backend/src/controllers/ReviewController.js`
6. `backend/src/routes/reviewRoutes.js`
7. `backend/src/config/dbIndexes.js` (moi)
8. `backend/src/middleware/requestLogger.js` (moi)

API phu trach:
1. `POST /api/products/:id/reviews`
2. `GET /api/products/:id/reviews`
3. `PUT /api/reviews/:id`
4. `DELETE /api/reviews/:id`
5. `GET /api/promotions`
6. `POST /api/promotions`
7. `PUT /api/promotions/:id`
8. `DELETE /api/promotions/:id`

Khoi luong du kien: 20 point

---

## Phan Cong Chi Tiet Frontend (4 Nguoi)

### FE1 - Layout System va Trang Chu

Pham vi:
1. Header, footer, navigation, main layout.
2. Home page sections, banner, featured products.
3. Responsive shell cho mobile/tablet/desktop.

Deliverables:
1. `frontend/src/components/Layout/Header.jsx`
2. `frontend/src/components/Layout/Footer.jsx`
3. `frontend/src/components/Layout/MainLayout.jsx` (hoan thien)
4. `frontend/src/pages/HomePage.jsx` (hoan thien)
5. `frontend/src/components/common/Loading.jsx`

Khoi luong du kien: 20 point

### FE2 - Product Listing Experience

Pham vi:
1. Product list page.
2. Search bar, filter bar, sort dropdown.
3. Pagination va empty states.

Deliverables:
1. `frontend/src/pages/ProductListPage.jsx` (hoan thien)
2. `frontend/src/components/ProductCard.jsx`
3. `frontend/src/components/FilterBar.jsx`
4. `frontend/src/components/SortDropdown.jsx`
5. `frontend/src/services/productService.js`

Khoi luong du kien: 20 point

### FE3 - Product Detail va Review Experience

Pham vi:
1. Product detail page.
2. Image gallery, product info, related products.
3. Danh sach review va review form.

Deliverables:
1. `frontend/src/pages/ProductDetailPage.jsx` (hoan thien)
2. `frontend/src/components/ProductDetail/ProductImages.jsx`
3. `frontend/src/components/ProductDetail/ProductInfo.jsx`
4. `frontend/src/components/ProductDetail/ReviewSection.jsx`
5. `frontend/src/services/reviewService.js`

Khoi luong du kien: 20 point

### FE4 - Auth, Cart, Checkout, Order History

Pham vi:
1. Login, register, profile.
2. Cart page va checkout flow.
3. Order confirmation va order history.

Deliverables:
1. `frontend/src/pages/Auth/LoginPage.jsx` (hoan thien)
2. `frontend/src/pages/Auth/RegisterPage.jsx` (hoan thien)
3. `frontend/src/pages/CartPage.jsx` (hoan thien)
4. `frontend/src/pages/CheckoutPage.jsx` (hoan thien)
5. `frontend/src/pages/OrderHistoryPage.jsx` (moi)
6. `frontend/src/services/authService.js`
7. `frontend/src/services/cartService.js`
8. `frontend/src/services/orderService.js`

Khoi luong du kien: 20 point

---

## Integration Contract Theo Tuan

### Tuan 1
1. BE1, BE2 chot API schema va response format.
2. FE1, FE2 dung mock data de build UI.
3. BE3, BE4 khoi tao service/repository skeleton.
4. FE3, FE4 dung routes va page skeleton.

### Tuan 2
1. BE1, BE2 release API version v1.
2. FE2, FE3 bat dau ket noi API that.
3. BE3 complete cart va order core.
4. FE4 ket noi auth va cart flow.

### Tuan 3
1. BE4 release review va promotion APIs.
2. FE3 hoan tat review UX, FE4 hoan tat checkout.
3. FE1 polish responsive toan bo app.
4. Test integration chuc nang end-to-end.

### Tuan 4
1. Regression test, bugfix, performance tuning.
2. Chot docs, demo script, deployment checklist.
3. Hardening auth, input validation, error handling.
4. UAT va nghiem thu noi bo.

---

## Rule De Bao Dam Khoi Luong Deu

1. Moi thanh vien co 20 point base + 2 point support code review.
2. Moi nguoi phai review it nhat 2 pull request/tuan.
3. Khong dồn bugfix cho 1 nguoi, chia theo owner module.
4. Neu task vuot 20 point, tach task va chuyen 1 phan cho backup owner.

---

## Branch va Commit Convention

1. Branch: `feature/be1-auth`, `feature/fe3-product-detail`.
2. Commit: `feat(auth): implement login endpoint`.
3. Pull request can co:
   - Mo ta thay doi
   - Danh sach API/UI da test
   - Anh/chup man hinh neu la FE

---

## Checklist Khoi Dong

1. Da setup `.env` backend va frontend.
2. Da chay duoc `npm install` cho 2 app.
3. Da thong nhat API response format.
4. Da tao branch cho tung thanh vien.
5. Da thong nhat lich daily standup va lich review.

---

## Ghi Chu

1. Cac task duoc thiet ke de chay song song, khong block nhau.
2. FE uu tien mock data trong giai doan API chua hoan tat.
3. BE4 phu trach DB optimization de tranh bottleneck cuoi sprint.
4. Moi PR phai cap nhat ghi chu test trong mo ta PR.

