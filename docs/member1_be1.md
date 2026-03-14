# Member 1 - BE1 (Auth + User)

## Muc tieu
1. Hoan thien module xac thuc va quan ly user.
2. Dam bao auth middleware va role guard hoat dong on dinh.

## Pham vi cong viec
1. Dang ky, dang nhap, dang xuat, refresh token.
2. Xem/cap nhat profile user, doi mat khau.
3. Phan quyen user/admin.

## Deliverables chinh
1. `backend/src/repositories/UserRepository.js`
2. `backend/src/services/AuthService.js`
3. `backend/src/controllers/AuthController.js`
4. Hoan thien `backend/src/routes/authRoutes.js`
5. Cap nhat `backend/src/middleware/authMiddleware.js` neu can

## API phu trach
1. `POST /api/auth/register`
2. `POST /api/auth/login`
3. `POST /api/auth/logout`
4. `GET /api/auth/me`
5. `PUT /api/users/:id`
6. `GET /api/users`

## Ke hoach 4 tuan
1. Tuan 1: Implement core auth flow + validate input + token issue/verify.
2. Tuan 2: Profile APIs + role guard + error handling.
3. Tuan 3: Integration voi FE4 (login/register/profile).
4. Tuan 4: Hardening, bugfix, regression test.

## Definition of Done
1. Tat ca endpoint chay duoc va tra format response thong nhat.
2. Auth middleware pass cho protected routes.
3. Co test thu cong cho success va error cases.
4. PR co mo ta API da test.
