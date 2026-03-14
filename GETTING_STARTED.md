# TMDT G4 Project - Getting Started Guide

**Project Status:** Ready for implementation
**Team Size:** 8 developers (4 Backend + 4 Frontend)
**Timeline:** 4 weeks
**Last Updated:** March 14, 2026

---

## 1. Read First

1. `TASK_DISTRIBUTION.md` (single source of truth for 4BE:4FE assignment)
2. `docs/Functional Requirements.md`
3. `docs/System Architecture.md`
4. `Development Guide.md`

---

## 2. Current Team Split (4:4)

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

## 3. Quick Setup

```bash
# Clone
 git clone <repo-url>
 cd TMDT_G4_CaseSudy

# Backend
 cd backend
 npm install
 copy .env.example .env

# Frontend (new terminal)
 cd frontend
 npm install
 copy .env.example .env
```

If your shell does not support `copy`, manually duplicate `.env.example` to `.env`.

---

## 4. Run Project

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

---

## 5. Working Rules

1. Create branch by owner role, e.g. `feature/be1-auth`, `feature/fe3-product-detail`.
2. Follow API contract and timeline in `TASK_DISTRIBUTION.md`.
3. FE can use mock data when API is not ready.
4. Every PR includes tested scope and evidence (request/response or screenshot).

---

## 6. Definition Of Done

1. Task completed per owner scope in `TASK_DISTRIBUTION.md`.
2. Local test passed and no blocking errors.
3. PR created, reviewed, and approved.
4. Integrated successfully with related modules.

---

## 7. Important Note

Old per-person implementation guides (`IMPLEMENTATION_GUIDE_BE1/2/3.md`, `IMPLEMENTATION_GUIDE_FE1/2.md`) were removed.
Use `TASK_DISTRIBUTION.md` as the current execution document.
