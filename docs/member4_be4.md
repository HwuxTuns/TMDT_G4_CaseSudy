# Member 4 - BE4 (Review + Promotion + DB Reliability)

## Muc tieu
1. Hoan thien review/promotion module.
2. Tang do on dinh he thong qua DB optimization va logging.

## Pham vi cong viec
1. CRUD review va comment san pham.
2. CRUD promotion + tinh gia cu/gia moi.
3. Tao index can thiet cho MongoDB.
4. Them request logging va trace loi.

## Deliverables chinh
1. `backend/src/repositories/ReviewRepository.js`
2. `backend/src/repositories/PromotionRepository.js`
3. `backend/src/services/ReviewService.js`
4. `backend/src/services/PromotionService.js`
5. `backend/src/controllers/ReviewController.js`
6. `backend/src/routes/reviewRoutes.js`
7. `backend/src/config/dbIndexes.js`
8. `backend/src/middleware/requestLogger.js`

## API phu trach
1. `POST /api/products/:id/reviews`
2. `GET /api/products/:id/reviews`
3. `PUT /api/reviews/:id`
4. `DELETE /api/reviews/:id`
5. `GET /api/promotions`
6. `POST /api/promotions`
7. `PUT /api/promotions/:id`
8. `DELETE /api/promotions/:id`

## Ke hoach 4 tuan
1. Tuan 1: Review and promotion schema/service skeleton.
2. Tuan 2: Complete APIs + validation + permission.
3. Tuan 3: DB index setup + logging middleware.
4. Tuan 4: Perf check + hardening + regression test.

## Definition of Done
1. Review API dung rule 1 user 1 review/product (neu ap dung).
2. Promotion logic tra gia dung theo contract.
3. Index script va logging middleware duoc integrate.
4. PR co test note cho perf va edge cases.
