# 📚 BE1: Authentication & User Management - Implementation Guide

**Developer:** Nguyễn Văn A  
**Duration:** 1 Week  
**Dependencies:** None

---

## 📋 Overview

Implement the authentication system for the e-commerce platform. Users can register, login, logout, and manage their profiles.

---

## 🎯 Deliverables

### 1. **Models** ✅ (Already Created)

File: `src/models/User.js`

**Features:**
- Email validation (unique, lowercase)
- Password hashing (bcrypt)
- User roles (user, admin)
- Profile information (name, phone, address)
- Timestamps

**Methods:**
- `comparePassword()` - Compare entered password with stored hash
- `toJSON()` - Remove password from response

### 2. **Repository Layer**

File: `src/repositories/UserRepository.js`

**Tasks:**
- Extend `BaseRepository` with User model
- Implement custom methods:
  - `findByEmail(email)` - Find user by email
  - `findByRole(role)` - Find users by role

**Code Template:**
```javascript
const BaseRepository = require('./BaseRepository');
const User = require('../models/User');

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    return await User.findOne({ email: email.toLowerCase() });
  }

  async findByRole(role) {
    return await this.findAll({ role });
  }
}

module.exports = UserRepository;
```

### 3. **Service Layer**

File: `src/services/AuthService.js`

**Tasks:**
- Extend `BaseService` with UserRepository
- Implement authentication methods:
  - `register(email, password, name)` - User registration
  - `login(email, password)` - User login with JWT token
  - `logout(userId)` - Clear user session
  - `generateToken(userId, role)` - Generate JWT token
  - `verifyToken(token)` - Verify JWT token
  - `updateProfile(userId, data)` - Update user profile

**Validation:**
- Email format check
- Password minimum 6 characters
- Email uniqueness check
- Password hashing

**Code Template:**
```javascript
const jwt = require('jsonwebtoken');
const BaseService = require('./BaseService');
const UserRepository = require('../repositories/UserRepository');
const ApiError = require('../utils/ApiError');

class AuthService extends BaseService {
  constructor() {
    super(new UserRepository());
  }

  async register(email, password, name) {
    // TODO: Check if user exists
    // TODO: Validate email and password
    // TODO: Hash password
    // TODO: Create user
    // TODO: Generate token
    // TODO: Return user and token
  }

  async login(email, password) {
    // TODO: Find user by email
    // TODO: Compare password
    // TODO: Generate token
    // TODO: Update lastLogin
    // TODO: Return user and token
  }

  async logout(userId) {
    // TODO: Clear/invalidate token (optional)
    // TODO: Return success
  }

  generateToken(userId, role) {
    return jwt.sign(
      { id: userId, role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
  }

  async updateProfile(userId, data) {
    // TODO: Validate data
    // TODO: Update user
    // TODO: Return updated user
  }
}

module.exports = AuthService;
```

### 4. **Controller Layer**

File: `src/controllers/AuthController.js`

**Tasks:**
- Implement endpoint handlers:
  - `register(req, res, next)` - Handle registration request
  - `login(req, res, next)` - Handle login request
  - `logout(req, res, next)` - Handle logout request
  - `getCurrentUser(req, res, next)` - Get current user
  - `updateProfile(req, res, next)` - Update user profile
  - `getAllUsers(req, res, next)` - Get all users (admin)

**Request/Response Format:**

```javascript
// Register Request
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

// Response
{
  "success": true,
  "statusCode": 201,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "...",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    },
    "token": "eyJhbGc..."
  }
}
```

**Code Template:**
```javascript
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const AuthService = require('../services/AuthService');

const authService = new AuthService();

exports.register = async (req, res, next) => {
  try {
    // TODO: Validate request body
    const { email, password, name } = req.body;
    
    // TODO: Call service
    const result = await authService.register(email, password, name);
    
    // TODO: Return response
    res.status(201).json(
      new ApiResponse(201, result, 'User registered successfully')
    );
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    // TODO: Validate request body
    // TODO: Call service
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

// ... implement other methods
```

### 5. **Routes**

File: `src/routes/authRoutes.js`

**Tasks:**
- Wire controllers to routes
- Add appropriate middleware (authenticate, isAdmin)
- Add input validation middleware (optional but recommended)

**Implementation:**
```javascript
const express = require('express');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', authenticate, AuthController.logout);
router.get('/me', authenticate, AuthController.getCurrentUser);
router.put('/users/:id', authenticate, AuthController.updateProfile);
router.get('/users', authenticate, isAdmin, AuthController.getAllUsers);

module.exports = router;
```

---

## 🔍 Testing Checklist

- [ ] Register new user
- [ ] Login with correct credentials
- [ ] Login with wrong email
- [ ] Login with wrong password
- [ ] Get current user (with valid token)
- [ ] Get current user (with invalid token)
- [ ] Update user profile
- [ ] Get all users (non-admin should be denied)
- [ ] Duplicate email registration (should fail)
- [ ] Logout

---

## 📝 API Endpoints Summary

```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
POST   /api/auth/logout        - Logout user
GET    /api/auth/me            - Get current user (protected)
PUT    /api/users/:id          - Update user profile (protected)
GET    /api/users              - Get all users (admin only)
```

---

## 💡 Tips

1. **Use Joi for validation** - Create a schema for register/login request validation
2. **Handle errors properly** - Use ApiError class for consistent error responses
3. **Don't expose password** - Use `select: false` in queries and toJSON method
4. **Token expiration** - Implement refresh token logic if needed
5. **Rate limiting** - Consider adding rate limiting for login/register endpoints
6. **Email verification** - Consider adding email verification for registration (future enhancement)

---

## 🚀 Getting Started

1. Clone the repository and create branch `feature/BE1-auth`
2. Create `src/repositories/UserRepository.js`
3. Create `src/services/AuthService.js`
4. Create `src/controllers/AuthController.js`
5. Update `src/routes/authRoutes.js`
6. Test all endpoints with Postman/Insomnia
7. Create Pull Request with test results

