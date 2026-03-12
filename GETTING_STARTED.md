# 🚀 TMDT G4 Project - Getting Started Guide

**Project Status:** Ready for Implementation  
**Team Size:** 5 Developers (3 Backend + 2 Frontend)  
**Timeline:** 4 Weeks  
**Last Updated:** March 13, 2026

---

## 📋 What's Been Prepared For You

✅ **Task Distribution** - Clear assignment for each developer  
✅ **Backend Boilerplate** - Models, base classes, route stubs  
✅ **Frontend Boilerplate** - App structure, routing, layouts  
✅ **Implementation Guides** - Detailed step-by-step for each task  
✅ **API Contracts** - Clear interface definitions  

---

## 👥 Team Assignments

### Backend Developers (3)

| Name | Task | Duration | Start |
|------|------|----------|-------|
| **BE1: Nguyễn Văn A** | Auth & User Management | 1 Week | Week 1 |
| **BE2: Trần Thị B** | Products & Search/Filter | 1 Week | Week 1 |
| **BE3: Lê Minh C** | Cart, Order & Reviews | 1.5 Weeks | Week 1 |

### Frontend Developers (2)

| Name | Task | Duration | Start |
|------|------|----------|-------|
| **FE1: Phạm Thu D** | Layout, Navigation & Products | 1 Week | Week 1 |
| **FE2: Võ Quốc E** | Auth, Detail, Cart & Checkout | 1.5 Weeks | Week 1 |

---

## 📂 Project Structure

```
TMDT_G4_CaseStudy/
├── TASK_DISTRIBUTION.md          ← Read this first!
├── Development Guide.md           ← Team guidelines
├── docs/                          ← Requirements & architecture
│   ├── Functional Requirements.md
│   ├── System Architecture.md
│   ├── Admin Features.md
│   └── Module Overview.md
├── backend/
│   ├── package.json              ← Dependencies
│   ├── .env.example              ← Configuration template
│   ├── vite.config.js            ← Vite configuration
│   ├── IMPLEMENTATION_GUIDE_BE1.md
│   ├── IMPLEMENTATION_GUIDE_BE2.md
│   ├── IMPLEMENTATION_GUIDE_BE3.md
│   └── src/
│       ├── index.js              ← Entry point
│       ├── config/               ← Database & env config
│       ├── models/               ← ✅ All models created
│       │   ├── User.js
│       │   ├── Product.js
│       │   ├── Category.js
│       │   ├── Cart.js
│       │   ├── Order.js
│       │   └── Review.js
│       ├── repositories/         ← TODO: Implement
│       │   └── BaseRepository.js ✅
│       ├── services/             ← TODO: Implement
│       │   └── BaseService.js    ✅
│       ├── controllers/          ← TODO: Implement
│       ├── routes/               ← ✅ Stubs ready
│       │   ├── authRoutes.js
│       │   ├── productRoutes.js
│       │   ├── cartRoutes.js
│       │   └── orderRoutes.js
│       ├── middleware/           ← ✅ Ready
│       │   ├── authMiddleware.js
│       │   └── errorHandler.js
│       └── utils/                ← ✅ Ready
│           ├── ApiResponse.js
│           └── ApiError.js
├── frontend/
│   ├── package.json              ← Dependencies
│   ├── .env.example              ← Configuration
│   ├── vite.config.js            ← Vite setup
│   ├── index.html
│   ├── tailwind.config.js        ← Tailwind setup
│   ├── IMPLEMENTATION_GUIDE_FE1.md
│   ├── IMPLEMENTATION_GUIDE_FE2.md
│   └── src/
│       ├── index.jsx             ← Entry point
│       ├── App.jsx               ← ✅ Router setup
│       ├── index.css             ← Tailwind styles
│       ├── services/
│       │   └── api.js            ← ✅ Axios interceptor
│       ├── components/
│       │   └── Layout/
│       │       └── MainLayout.jsx ← ✅ Ready
│       └── pages/                ← ✅ Stubs ready
│           ├── HomePage.jsx
│           ├── ProductListPage.jsx
│           ├── ProductDetailPage.jsx
│           ├── CartPage.jsx
│           ├── CheckoutPage.jsx
│           └── Auth/
│               ├── LoginPage.jsx
│               └── RegisterPage.jsx
└── README.md
```

---

## 🏃 Quick Start (For Each Developer)

### Step 1: Setup Local Environment

```bash
# Clone repository
git clone <repo-url>
cd TMDT_G4_CaseStudy

# Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string

# Frontend setup (in new terminal)
cd frontend
npm install
cp .env.example .env
```

### Step 2: Start Development

```bash
# Terminal 1: Backend
cd backend
npm run dev
# Server runs on http://localhost:5000

# Terminal 2: Frontend
cd frontend
npm run dev
# App runs on http://localhost:3000
```

### Step 3: Read Your Implementation Guide

- **BE1** → Read `backend/IMPLEMENTATION_GUIDE_BE1.md`
- **BE2** → Read `backend/IMPLEMENTATION_GUIDE_BE2.md`
- **BE3** → Read `backend/IMPLEMENTATION_GUIDE_BE3.md`
- **FE1** → Read `frontend/IMPLEMENTATION_GUIDE_FE1.md`
- **FE2** → Read `frontend/IMPLEMENTATION_GUIDE_FE2.md`

### Step 4: Create Feature Branch

```bash
# Backend developers
git checkout -b feature/BE1-auth    # or BE2, BE3

# Frontend developers
git checkout -b feature/FE1-products # or FE2-cart-checkout
```

### Step 5: Start Implementing

Follow your implementation guide step-by-step!

---

## 🔄 Development Workflow

### Daily Process

1. **Morning Standup** (30 mins)
   - What did you do yesterday?
   - What are you doing today?
   - Any blockers?

2. **Development** (4-5 hours)
   - Implement according to your guide
   - Write clean, readable code
   - Test locally

3. **Integration Meeting** (Every 2 days, 30 mins)
   - Test integration between modules
   - Resolve conflicts
   - Align on API usage

4. **Code Review** (Before merging)
   - Check for code quality
   - Verify implementation matches requirements
   - Test functionality

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/BE1-auth

# Make changes and commit
git add .
git commit -m "feat: implement user registration endpoint"

# Push to remote
git push origin feature/BE1-auth

# Create Pull Request on GitHub
# Wait for code review and approval
# Merge to main
```

---

## 📚 Key Resources

| Resource | Location | For |
|----------|----------|-----|
| Task Distribution | `TASK_DISTRIBUTION.md` | Everyone |
| BE1 Guide | `backend/IMPLEMENTATION_GUIDE_BE1.md` | BE1 |
| BE2 Guide | `backend/IMPLEMENTATION_GUIDE_BE2.md` | BE2 |
| BE3 Guide | `backend/IMPLEMENTATION_GUIDE_BE3.md` | BE3 |
| FE1 Guide | `frontend/IMPLEMENTATION_GUIDE_FE1.md` | FE1 |
| FE2 Guide | `frontend/IMPLEMENTATION_GUIDE_FE2.md` | FE2 |
| Architecture | `docs/System Architecture.md` | Everyone |
| Requirements | `docs/Functional Requirements.md` | Everyone |

---

## ✅ Implementation Checklist

### Week 1
- [ ] All developers: Setup local environment
- [ ] All developers: Read implementation guides
- [ ] BE1: Complete authentication API
- [ ] BE2: Complete product CRUD & search
- [ ] FE1: Complete header, layout, product list
- [ ] FE2: Complete login/register pages
- [ ] BE3: Complete cart endpoints (basic functionality)

### Week 2
- [ ] FE1: Integrate with real BE2 API
- [ ] FE2: Complete cart & checkout pages
- [ ] BE3: Complete order system
- [ ] BE1 + FE2: Full auth integration test

### Week 3
- [ ] BE3: Complete review system
- [ ] FE2: Integrate reviews
- [ ] All: End-to-end testing
- [ ] All: Bug fixes

### Week 4
- [ ] All: Polish and optimization
- [ ] All: Final testing
- [ ] All: Documentation
- [ ] All: Deployment preparation

---

## 🤝 Communication & Support

### Channels

- **Slack/Teams**: Daily communication
- **GitHub Issues**: Bug tracking and feature requests
- **GitHub Discussions**: General questions
- **Meetings**: Daily standup, integration meetings

### When You Need Help

1. Check your implementation guide
2. Check similar code in the codebase
3. Ask team members in Slack
4. Create a GitHub issue if it's a bug/blocker

---

## 📊 Progress Tracking

Check project progress:
- GitHub Issues: Track bugs and TODOs
- Pull Requests: Review code and implementations
- Milestones: Track weekly progress

---

## 🚀 Key Success Factors

1. **Clear Communication** - Use GitHub issues and team chats
2. **Code Quality** - Follow patterns and write clean code
3. **Testing** - Test locally before pushing
4. **API Contracts** - Follow the defined API interface
5. **Documentation** - Add comments to complex logic
6. **Parallel Work** - Tasks are independent, work simultaneously

---

## 📝 API Contract Example

**Backend provides this interface:**
```javascript
// Request
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

// Response (200 OK)
{
  "success": true,
  "statusCode": 200,
  "message": "Login successful",
  "data": {
    "user": { "_id": "...", "email": "...", "name": "...", "role": "user" },
    "token": "eyJhbGc..."
  }
}

// Response (401 Unauthorized)
{
  "success": false,
  "statusCode": 401,
  "message": "Invalid credentials",
  "errors": []
}
```

**Frontend consumes this:**
```javascript
const response = await api.post('/auth/login', { email, password })
const { user, token } = response.data
localStorage.setItem('token', token)
```

---

## 🎯 Definition of Done

A task is done when:

- ✅ Code is written according to guide
- ✅ Code is tested locally
- ✅ All unit tests pass
- ✅ Code follows project conventions
- ✅ Implementation commented/documented
- ✅ Pull request created with detailed description
- ✅ Code review completed
- ✅ Merged to main branch
- ✅ Tested in integration

---

## 📞 Questions?

1. **Setup Issues?** Check `.env.example` and README
2. **Implementation Questions?** Read your guide again + check similar code
3. **API Questions?** Check API contract in TASK_DISTRIBUTION.md
4. **Team Questions?** Ask in Slack/Teams
5. **Blocked?** Create GitHub issue and highlight in standup

---

## 🎉 Let's Build This!

Everything is set up and ready to go. Each developer has:
- Clear assignment and deliverables
- Boilerplate code and base classes
- Detailed implementation guide
- API contracts and interfaces
- Support from the team

**No more blind development!** Let's build this amazing e-commerce platform! 🚀

---

## 📋 Checklist Before You Start

- [ ] Clone repository ✅
- [ ] Read TASK_DISTRIBUTION.md ✅
- [ ] Read your implementation guide ✅
- [ ] Setup local environment (Node.js, MongoDB) ✅
- [ ] Run `npm install` for your project (backend/frontend) ✅
- [ ] Copy `.env.example` to `.env` ✅
- [ ] Test that dev server starts (`npm run dev`) ✅
- [ ] Create feature branch ✅
- [ ] Start implementing! ✅

---

**Good luck! You've got this! 💪**

