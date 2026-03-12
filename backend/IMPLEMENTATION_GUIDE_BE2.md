# 📚 BE2: Product Management - Implementation Guide

**Developer:** Trần Thị B  
**Duration:** 1 Week  
**Dependencies:** None

---

## 📋 Overview

Implement the product management system with search, filter, and sorting capabilities. This is the core data service for the e-commerce platform.

---

## 🎯 Deliverables

### 1. **Models** ✅ (Already Created)

Files:
- `src/models/Product.js` - Product schema with images, pricing, stock
- `src/models/Category.js` - Product categories

**Features:**
- Product CRUD fields
- Category relationship
- Full-text search indexes
- Pricing (current price, old price, discount %)
- Stock management
- Promotion status
- Rating and review count

### 2. **Repository Layer**

File: `src/repositories/ProductRepository.js`

**Tasks:**
- Extend `BaseRepository` with Product model
- Implement custom methods:
  - `search(query, filters, options)` - Search and filter products
  - `getByCategory(categoryId, options)` - Get products by category
  - `getPromotion()` - Get featured/promotion products
  - `decreaseStock(productId, quantity)` - Decrease stock after purchase
  - `increaseStock(productId, quantity)` - Increase stock (refund/return)

**Code Template:**
```javascript
const BaseRepository = require('./BaseRepository');
const Product = require('../models/Product');

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product);
  }

  /**
   * Search products with multiple filters
   * @param {string} searchQuery - Search keyword
   * @param {object} filters - { category, priceMin, priceMax, isPromotion }
   * @param {object} options - { sort, skip, limit }
   */
  async search(searchQuery, filters = {}, options = {}) {
    // TODO: Build query object
    // TODO: Handle text search if searchQuery provided
    // TODO: Apply category filter
    // TODO: Apply price range filter
    // TODO: Apply promotion filter
    // TODO: Apply sort and pagination
    // TODO: Return results
  }

  async getByCategory(categoryId, options = {}) {
    // TODO: Find products by category
    // TODO: Apply sorting and pagination
    // TODO: Return results
  }

  async getPromotion(options = {}) {
    // TODO: Find products where isPromotion = true
    // TODO: Order by discount or rating
    // TODO: Limit to top 10 or configurable
  }

  async decreaseStock(productId, quantity) {
    // TODO: Find product
    // TODO: Check if stock is available
    // TODO: Decrease stock
    // TODO: Return updated product
  }

  async increaseStock(productId, quantity) {
    // TODO: Find product
    // TODO: Increase stock
    // TODO: Return updated product
  }
}

module.exports = ProductRepository;
```

**Also create:**
File: `src/repositories/CategoryRepository.js`

```javascript
const BaseRepository = require('./BaseRepository');
const Category = require('../models/Category');

class CategoryRepository extends BaseRepository {
  constructor() {
    super(Category);
  }

  async findBySlug(slug) {
    return await Category.findOne({ slug });
  }
}

module.exports = CategoryRepository;
```

### 3. **Service Layer**

File: `src/services/ProductService.js`

**Tasks:**
- Extend `BaseService` with ProductRepository
- Implement business logic:
  - `searchProducts(query, filters, pagination)` - Search with filters
  - `getProductById(id)` - Get single product
  - `createProduct(data)` - Create product (admin)
  - `updateProduct(id, data)` - Update product (admin)
  - `deleteProduct(id)` - Delete product (admin)
  - `getPromotedProducts()` - Get promotion products
  - `updateStock(productId, quantity)` - Update stock after order

**Code Template:**
```javascript
const BaseService = require('./BaseService');
const ProductRepository = require('../repositories/ProductRepository');
const ApiError = require('../utils/ApiError');

class ProductService extends BaseService {
  constructor() {
    super(new ProductRepository());
  }

  async searchProducts(searchQuery, filters, pagination) {
    try {
      // TODO: Parse query and filters
      // TODO: Build filter object (category, price range, promotion status)
      // TODO: Call repository.search()
      // TODO: Return paginated results
    } catch (error) {
      throw new ApiError(400, 'Failed to search products');
    }
  }

  async getPromotedProducts() {
    // TODO: Get products where isPromotion = true
    // TODO: Return limited list (e.g., top 10)
  }

  async createProduct(data) {
    try {
      // TODO: Validate product data
      // TODO: Check category exists
      // TODO: Generate SKU if not provided
      // TODO: Create product
      // TODO: Return created product
    } catch (error) {
      throw new ApiError(400, 'Failed to create product');
    }
  }

  async updateStock(productId, quantity) {
    // TODO: Decrease stock by quantity
    // TODO: Check if stock is sufficient
    // TODO: Return updated product
  }
}

module.exports = ProductService;
```

**Also create:**
File: `src/services/CategoryService.js`

```javascript
const BaseService = require('./BaseService');
const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryService extends BaseService {
  constructor() {
    super(new CategoryRepository());
  }

  async getCategoryBySlug(slug) {
    // TODO: Find category by slug
    // TODO: Return category
  }
}

module.exports = CategoryService;
```

### 4. **Controller Layer**

File: `src/controllers/ProductController.js`

**Tasks:**
- Implement endpoint handlers:
  - `getAllProducts(req, res, next)` - Get with filters/sort
  - `getProductById(req, res, next)` - Get single product
  - `createProduct(req, res, next)` - Create (admin)
  - `updateProduct(req, res, next)` - Update (admin)
  - `deleteProduct(req, res, next)` - Delete (admin)
  - `getPromotedProducts(req, res, next)` - Get promotion list
  - `searchProducts(req, res, next)` - Search products

**Query Parameters Support:**

```
GET /api/products?search=phone&category=electronics&priceMin=100&priceMax=1000&sort=-price&page=1&limit=10

Query params:
- search: Search keyword (text search)
- category: Category ID (filter)
- priceMin: Minimum price (filter)
- priceMax: Maximum price (filter)
- isPromotion: true/false (filter)
- sort: Field to sort by (prefix with - for descending)
  - price: By price
  - rating: By rating
  - -createdAt: Newest first
  - name: By name (A-Z)
- page: Page number (default: 1)
- limit: Items per page (default: 10)
```

**Response Format:**

```javascript
// Get All Products Response
{
  "success": true,
  "statusCode": 200,
  "message": "Products fetched successfully",
  "data": {
    "items": [
      {
        "_id": "...",
        "name": "iPhone 13",
        "price": 999,
        "oldPrice": 1099,
        "discount": 10,
        "category": "...",
        "images": [...],
        "stock": 50,
        "rating": 4.5,
        "isPromotion": true
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 10,
      "pages": 10
    }
  }
}
```

**Code Template:**
```javascript
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const ProductService = require('../services/ProductService');

const productService = new ProductService();

exports.getAllProducts = async (req, res, next) => {
  try {
    // TODO: Extract query parameters
    // TODO: Parse filters (category, price range)
    // TODO: Parse pagination (page, limit)
    // TODO: Parse sort
    // TODO: Call service
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    // TODO: Get product ID from params
    // TODO: Call service
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // TODO: Validate request body
    // TODO: Call service
    // TODO: Return response with 201 status
  } catch (error) {
    next(error);
  }
};

// ... implement other methods
```

**File Upload for Images (Optional):**

If implementing image upload, use Multer:

```javascript
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './uploads/products',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// In route
router.post('/', authenticate, isAdmin, upload.array('images'), ProductController.createProduct);
```

### 5. **Routes**

File: `src/routes/productRoutes.js`

**Tasks:**
- Wire controllers to routes
- Add authentication/authorization middleware
- Add input validation (optional)

**Implementation:**
```javascript
const express = require('express');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

// Public routes
router.get('/', ProductController.getAllProducts);
router.get('/promoted', ProductController.getPromotedProducts);
router.get('/search', ProductController.searchProducts);
router.get('/:id', ProductController.getProductById);

// Admin routes
router.post('/', authenticate, isAdmin, ProductController.createProduct);
router.put('/:id', authenticate, isAdmin, ProductController.updateProduct);
router.delete('/:id', authenticate, isAdmin, ProductController.deleteProduct);

module.exports = router;
```

---

## 🔍 Test Cases

### Search & Filter Tests
- [ ] Get all products (default sort)
- [ ] Get products by category
- [ ] Get products in price range
- [ ] Search by keyword (text search)
- [ ] Get promoted products
- [ ] Combination: search + filter + sort
- [ ] Pagination works correctly

### CRUD Tests
- [ ] Create product (admin)
- [ ] Update product (admin)
- [ ] Delete product (admin)
- [ ] Get single product
- [ ] Duplicate SKU should fail
- [ ] Invalid category should fail

---

## 📝 API Endpoints Summary

```
GET    /api/products                    - Get all with filter/sort
GET    /api/products/search             - Search products
GET    /api/products/promoted           - Get promotion products
GET    /api/products/:id                - Get single product
POST   /api/products                    - Create (admin)
PUT    /api/products/:id                - Update (admin)
DELETE /api/products/:id                - Delete (admin)
```

---

## 💡 Tips

1. **Text Search** - MongoDB text index on name and description
2. **Sorting** - Support multiple sort fields with +/- prefix
3. **Pagination** - Always implement with limit and offset
4. **Filtering** - Combine multiple filters with AND logic
5. **Stock Management** - Track stock changes in service layer
6. **SKU Generation** - Format: CATEGORY-TIMESTAMP-RANDOM
7. **Caching** - Consider caching frequently accessed products (Redis optional)

---

## 🚀 Getting Started

1. Create branch `feature/BE2-products`
2. Create `src/repositories/ProductRepository.js` and `CategoryRepository.js`
3. Create `src/services/ProductService.js` and `CategoryService.js`
4. Create `src/controllers/ProductController.js`
5. Update `src/routes/productRoutes.js`
6. Test with Postman - use JSON mock data
7. Create Pull Request

