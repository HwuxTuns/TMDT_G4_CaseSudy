# Project Preparation Summary

**Date:** March 14, 2026
**Project:** TMDT G4 E-Commerce Platform
**Status:** Ready for implementation with 8-member structure

---

## 1. Scope Update (Latest)

1. Team model changed from 5 members to 8 members.
2. Current split is `4 Backend + 4 Frontend`.
3. Workload is balanced by point-based allocation in `TASK_DISTRIBUTION.md`.
4. Legacy per-person implementation guides were removed to avoid conflicting instructions.

---

## 2. What Is Ready

Backend:
1. Core server setup (`backend/src/index.js`)
2. DB config and middleware (`config`, `middleware`, `utils`)
3. Models: User, Product, Category, Cart, Order, Review
4. Base classes: `BaseRepository`, `BaseService`
5. Route stubs: auth, product, cart, order

Frontend:
1. React + Vite + Tailwind setup
2. Routing structure in `frontend/src/App.jsx`
3. Shared API client in `frontend/src/services/api.js`
4. Main pages scaffolded for product/auth/cart/checkout flow

Documentation:
1. `TASK_DISTRIBUTION.md` (primary planning/execution file)
2. `GETTING_STARTED.md` (onboarding)
3. `docs/*` (requirements and architecture)
4. `Development Guide.md` (team workflow)

---

## 3. Current Team Execution Model

Backend owners:
1. BE1 - Auth + User
2. BE2 - Product + Category + Search/Filter/Sort
3. BE3 - Cart + Checkout + Order
4. BE4 - Review + Promotion + DB reliability

Frontend owners:
1. FE1 - Layout + Home + Navigation
2. FE2 - Product list + filter/sort/search UI
3. FE3 - Product detail + review UI
4. FE4 - Auth UI + Cart + Checkout + Order history

---

## 4. Risks Removed

1. Removed references to old 3BE+2FE assignment.
2. Removed references to deleted `IMPLEMENTATION_GUIDE_*` files.
3. Reduced duplicate guidance to avoid team confusion.

---

## 5. Next Steps

1. Team lead assigns owners exactly as in `TASK_DISTRIBUTION.md`.
2. Team starts sprint by week plan in `TASK_DISTRIBUTION.md`.
3. Maintain all new updates in one place (`TASK_DISTRIBUTION.md`).
