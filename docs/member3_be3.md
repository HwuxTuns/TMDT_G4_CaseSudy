# Member 3 - BE3 (Cart + Checkout + Order)

## Muc tieu
1. Hoan thien gio hang va quy trinh dat hang.
2. Dam bao order flow ro rang, dung status.

## Pham vi cong viec
1. Them/sua/xoa item trong cart.
2. Checkout tao order.
3. Theo doi cap nhat trang thai order.
4. Lay lich su order cua user.

## Deliverables chinh
1. `backend/src/repositories/CartRepository.js`
2. `backend/src/repositories/OrderRepository.js`
3. `backend/src/services/CartService.js`
4. `backend/src/services/OrderService.js`
5. `backend/src/controllers/CartController.js`
6. `backend/src/controllers/OrderController.js`
7. Hoan thien `backend/src/routes/cartRoutes.js`
8. Hoan thien `backend/src/routes/orderRoutes.js`

## API phu trach
1. `GET /api/cart`
2. `POST /api/cart`
3. `PUT /api/cart/:itemId`
4. `DELETE /api/cart/:itemId`
5. `DELETE /api/cart`
6. `POST /api/orders`
7. `GET /api/orders`
8. `GET /api/orders/:id`
9. `PUT /api/orders/:id`

## Ke hoach 4 tuan
1. Tuan 1: Cart CRUD core.
2. Tuan 2: Checkout + create order + order status.
3. Tuan 3: Integration voi FE4.
4. Tuan 4: Bugfix edge cases (stock, quantity, empty cart).

## Definition of Done
1. Cart tinh tong tien dung.
2. Checkout tao order thanh cong voi du lieu shipping.
3. User xem duoc lich su order cua minh.
4. PR co log test cho full cart/order flow.
