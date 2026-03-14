# Member 2 - BE2 (Product + Category + Search/Filter/Sort)

## Muc tieu
1. Hoan thien module quan ly san pham va danh muc.
2. Dam bao list API ho tro search/filter/sort day du.

## Pham vi cong viec
1. CRUD san pham.
2. CRUD danh muc co ban.
3. Search theo tu khoa.
4. Filter theo category/price/promotion.
5. Sort theo gia/moi nhat/pho bien.

## Deliverables chinh
1. `backend/src/repositories/ProductRepository.js`
2. `backend/src/repositories/CategoryRepository.js`
3. `backend/src/services/ProductService.js`
4. `backend/src/controllers/ProductController.js`
5. Hoan thien `backend/src/routes/productRoutes.js`

## API phu trach
1. `GET /api/products`
2. `GET /api/products/:id`
3. `POST /api/products`
4. `PUT /api/products/:id`
5. `DELETE /api/products/:id`
6. `GET /api/categories`
7. `POST /api/products/search`

## Ke hoach 4 tuan
1. Tuan 1: CRUD products/categories + query params structure.
2. Tuan 2: Search/filter/sort optimization.
3. Tuan 3: Integration voi FE2, FE3.
4. Tuan 4: Performance tune, bugfix, regression test.

## Definition of Done
1. Danh sach san pham support query params theo contract.
2. API create/update/delete co auth/admin guard.
3. Product detail API du data cho FE3.
4. PR co vi du request/response da test.
