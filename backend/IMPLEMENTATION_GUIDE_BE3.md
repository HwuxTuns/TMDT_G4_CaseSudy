# 📚 BE3: Cart, Order & Review Management - Implementation Guide

**Developer:** Lê Minh C  
**Duration:** 1.5 Weeks  
**Dependencies:** BE1 (Auth), BE2 (Products) - but can use mocks

---

## 📋 Overview

Implement the shopping cart, checkout/order system, and product reviews. This handles the complete customer purchasing flow.

---

## 🎯 Deliverables

### 1. **Models** ✅ (Already Created)

Files:
- `src/models/Cart.js` - Shopping cart
- `src/models/Order.js` - Orders/receipts
- `src/models/Review.js` - Product reviews

**Features:**
- Cart items with product references
- Order tracking with status history
- Review ratings and comments
- Payment and shipping information

### 2. **Repository Layer - Cart**

File: `src/repositories/CartRepository.js`

**Tasks:**
- Extend `BaseRepository` with Cart model
- Implement custom methods:
  - `getCartByUserId(userId)` - Get user's cart
  - `itemExists(userId, productId)` - Check if item in cart
  - `addItem(userId, productId, quantity)` - Add item
  - `removeItem(userId, productId)` - Remove item
  - `updateQuantity(userId, productId, quantity)` - Update quantity
  - `clearCart(userId)` - Clear all items

**Code Template:**
```javascript
const BaseRepository = require('./BaseRepository');
const Cart = require('../models/Cart');

class CartRepository extends BaseRepository {
  constructor() {
    super(Cart);
  }

  async getCartByUserId(userId) {
    // TODO: Find cart for user
    // TODO: Populate product details
    // TODO: Return cart
  }

  async addItem(userId, productId, quantity, price) {
    // TODO: Find or create cart
    // TODO: Check if item exists
    // TODO: If exists, increase quantity
    // TODO: If not, add new item
    // TODO: Calculate cart totals
    // TODO: Save and return
  }

  async removeItem(userId, productId) {
    // TODO: Find cart
    // TODO: Remove item
    // TODO: Recalculate totals
    // TODO: Save and return
  }

  async updateQuantity(userId, productId, quantity) {
    // TODO: Find item in cart
    // TODO: Update quantity or remove if 0
    // TODO: Recalculate totals
    // TODO: Save and return
  }

  async clearCart(userId) {
    // TODO: Clear all items
    // TODO: Reset totals
    // TODO: Save and return
  }
}

module.exports = CartRepository;
```

### 3. **Repository Layer - Order**

File: `src/repositories/OrderRepository.js`

**Tasks:**
- Extend `BaseRepository` with Order model
- Implement custom methods:
  - `getUserOrders(userId, pagination)` - Get user orders
  - `getOrderByNumber(orderNumber)` - Get order by order number
  - `updateOrderStatus(orderId, status, note)` - Update status

**Code Template:**
```javascript
const BaseRepository = require('./BaseRepository');
const Order = require('../models/Order');

class OrderRepository extends BaseRepository {
  constructor() {
    super(Order);
  }

  async getUserOrders(userId, options = {}) {
    // TODO: Find orders for user
    // TODO: Sort by newest first
    // TODO: Apply pagination
    // TODO: Populate product details
    // TODO: Return orders
  }

  async getOrderByNumber(orderNumber) {
    // TODO: Find order by order number
    // TODO: Populate details
    // TODO: Return order
  }

  async updateOrderStatus(orderId, status, note = '') {
    // TODO: Find order
    // TODO: Update status
    // TODO: Add to status history
    // TODO: Save and return
  }
}

module.exports = OrderRepository;
```

### 4. **Repository Layer - Review**

File: `src/repositories/ReviewRepository.js`

**Tasks:**
- Extend `BaseRepository` with Review model
- Implement custom methods:
  - `getProductReviews(productId, pagination)` - Get reviews for product
  - `getUserProductReview(userId, productId)` - Check if user reviewed
  - `getVerifiedReviews(productId)` - Get verified purchase reviews

**Code Template:**
```javascript
const BaseRepository = require('./BaseRepository');
const Review = require('../models/Review');

class ReviewRepository extends BaseRepository {
  constructor() {
    super(Review);
  }

  async getProductReviews(productId, options = {}) {
    // TODO: Find reviews for product
    // TODO: Filter approved only
    // TODO: Sort by rating + date
    // TODO: Apply pagination
    // TODO: Populate user details
    // TODO: Return reviews
  }

  async getUserProductReview(userId, productId) {
    // TODO: Find review by user and product
    // TODO: Return review or null
  }

  async getVerifiedReviews(productId) {
    // TODO: Find reviews where isVerifiedPurchase = true
    // TODO: Sort by helpful count
    // TODO: Return top reviews
  }
}

module.exports = ReviewRepository;
```

### 5. **Service Layer - Cart**

File: `src/services/CartService.js`

**Tasks:**
- Implement cart business logic:
  - `getCart(userId)` - Get cart
  - `addToCart(userId, productId, quantity)` - Add product to cart
  - `removeFromCart(userId, productId)` - Remove from cart
  - `updateCartItem(userId, productId, quantity)` - Update quantity
  - `clearCart(userId)` - Empty cart
  - `getCartTotal(userId)` - Calculate total

**Code Template:**
```javascript
const BaseService = require('./BaseService');
const CartRepository = require('../repositories/CartRepository');
const ProductRepository = require('../repositories/ProductRepository');
const ApiError = require('../utils/ApiError');

class CartService extends BaseService {
  constructor() {
    super(new CartRepository());
    this.productRepository = new ProductRepository();
  }

  async addToCart(userId, productId, quantity) {
    try {
      // TODO: Get product details
      if (!product) {
        throw new ApiError(404, 'Product not found');
      }

      // TODO: Check if product is in stock
      if (product.stock < quantity) {
        throw new ApiError(400, 'Insufficient stock');
      }

      // TODO: Add to cart with current price
      const cart = await this.repository.addItem(
        userId,
        productId,
        quantity,
        product.price
      );

      // TODO: Return updated cart
      return cart;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(400, 'Failed to add to cart');
    }
  }

  async removeFromCart(userId, productId) {
    // TODO: Remove item
    // TODO: Return updated cart
  }

  async updateCartItem(userId, productId, quantity) {
    // TODO: Validate quantity > 0
    // TODO: Check product stock
    // TODO: Update quantity
    // TODO: Return updated cart
  }
}

module.exports = CartService;
```

### 6. **Service Layer - Order**

File: `src/services/OrderService.js`

**Tasks:**
- Implement order/checkout logic:
  - `createOrder(userId, shippingInfo, paymentInfo)` - Process checkout
  - `getUserOrders(userId, pagination)` - Get user orders
  - `getOrderDetails(orderId)` - Get order details
  - `updateOrderStatus(orderId, status, note)` - Update status
  - `calculateOrderTotal(items, shipping, tax)` - Calculate total

**Checkout Logic:**
1. Get user's cart
2. Validate products exist and in stock
3. Calculate subtotal
4. Add shipping cost
5. Calculate tax (if applicable)
6. Calculate total
7. Create order from cart items
8. Clear user's cart
9. Return order confirmation

**Code Template:**
```javascript
const BaseService = require('./BaseService');
const OrderRepository = require('../repositories/OrderRepository');
const CartRepository = require('../repositories/CartRepository');
const ProductRepository = require('../repositories/ProductRepository');
const ApiError = require('../utils/ApiError');

class OrderService extends BaseService {
  constructor() {
    super(new OrderRepository());
    this.cartRepository = new CartRepository();
    this.productRepository = new ProductRepository();
  }

  async createOrder(userId, shippingInfo, paymentInfo) {
    try {
      // TODO: Get user's cart
      const cart = await this.cartRepository.getCartByUserId(userId);
      
      if (!cart || cart.items.length === 0) {
        throw new ApiError(400, 'Cart is empty');
      }

      // TODO: Verify all products in stock
      for (const item of cart.items) {
        // TODO: Check stock
      }

      // TODO: Create order object
      // TODO: Calculate totals
      // TODO: Save order
      
      // TODO: Decrease product stocks
      // TODO: Clear user's cart
      
      // TODO: Return order with receipt
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(400, 'Checkout failed');
    }
  }

  calculateOrderTotal(cartTotal, shippingCost, taxRate = 0) {
    // TODO: Calculate tax = cartTotal * taxRate
    // TODO: Total = cartTotal + shippingCost + tax
    // TODO: Return { subtotal, shippingCost, tax, total }
  }
}

module.exports = OrderService;
```

### 7. **Service Layer - Review**

File: `src/services/ReviewService.js`

**Tasks:**
- Implement review logic:
  - `getProductReviews(productId, pagination)` - Get reviews
  - `createReview(userId, productId, rating, comment)` - Post review
  - `updateReview(reviewId, data)` - Edit review
  - `deleteReview(reviewId)` - Delete review
  - `replyToReview(reviewId, adminReply)` - Admin reply

**Code Template:**
```javascript
const BaseService = require('./BaseService');
const ReviewRepository = require('../repositories/ReviewRepository');
const ApiError = require('../utils/ApiError');

class ReviewService extends BaseService {
  constructor() {
    super(new ReviewRepository());
  }

  async createReview(userId, productId, rating, title, comment) {
    try {
      // TODO: Check if user already reviewed this product
      const existing = await this.repository.getUserProductReview(
        userId,
        productId
      );
      if (existing) {
        throw new ApiError(409, 'You already reviewed this product');
      }

      // TODO: Validate rating (1-5)
      // TODO: Validate comment length (10-1000)
      
      // TODO: Create review
      const review = await this.repository.create({
        product: productId,
        user: userId,
        rating,
        title,
        comment,
        isVerifiedPurchase: true, // TODO: Verify from orders
      });

      // TODO: Update product rating and review count
      
      // TODO: Return review
      return review;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(400, 'Failed to create review');
    }
  }
}

module.exports = ReviewService;
```

### 8. **Controller Layer**

Files:
- `src/controllers/CartController.js`
- `src/controllers/OrderController.js`
- `src/controllers/ReviewController.js`

**Cart Controller Methods:**
```javascript
exports.getCart = async (req, res, next) => {
  try {
    // TODO: Get user ID from req.user
    // TODO: Call cartService.getCart()
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    // TODO: Get userId, productId, quantity from request
    // TODO: Validate request
    // TODO: Call cartService.addToCart()
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    // TODO: Get userId and itemId
    // TODO: Call cartService.removeFromCart()
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

// ... implement other methods
```

**Order Controller Methods:**
```javascript
exports.createOrder = async (req, res, next) => {
  try {
    // TODO: Get userId from req.user
    // TODO: Get shippingInfo, paymentInfo from body
    // TODO: Validate shipping address
    // TODO: Call orderService.createOrder()
    // TODO: Return response with 201 status
  } catch (error) {
    next(error);
  }
};

exports.getUserOrders = async (req, res, next) => {
  try {
    // TODO: Get userId
    // TODO: Get pagination from query
    // TODO: Call orderService.getUserOrders()
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

exports.getOrderDetails = async (req, res, next) => {
  try {
    // TODO: Get orderId from params
    // TODO: Verify order belongs to user
    // TODO: Call orderService.getOrderDetails()
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    // TODO: (Admin only) Get orderId and new status
    // TODO: Call orderService.updateOrderStatus()
    // TODO: Return response
  } catch (error) {
    next(error);
  }
};
```

### 9. **Routes**

Files:
- `src/routes/cartRoutes.js` ✅ (Skeleton ready)
- `src/routes/orderRoutes.js` ✅ (Skeleton ready)

**Tasks:**
- Wire controllers to routes
- Ensure all cart routes require authentication
- Ensure all order routes require authentication

---

## 🔍 Test Cases

### Cart Tests
- [ ] Add to cart
- [ ] Add same product again (quantity increases)
- [ ] Remove from cart
- [ ] Update quantity
- [ ] Clear cart
- [ ] Get cart
- [ ] Add product not in stock (should fail)
- [ ] Add product with negative quantity (should fail)

### Order Tests
- [ ] Checkout with valid cart
- [ ] Checkout with empty cart (should fail)
- [ ] Checkout with out-of-stock products (should fail)
- [ ] Get user orders
- [ ] Get order details
- [ ] Update order status (admin)
- [ ] Order total calculated correctly

### Review Tests
- [ ] Create review
- [ ] Duplicate review from same user (should fail)
- [ ] Get product reviews
- [ ] Delete own review
- [ ] Admin reply to review
- [ ] Rating validation (1-5)
- [ ] Comment length validation

---

## 📝 API Endpoints Summary

```
# Cart
POST   /api/cart                     - Add to cart
GET    /api/cart                     - Get cart
PUT    /api/cart/:itemId             - Update item quantity
DELETE /api/cart/:itemId             - Remove from cart
DELETE /api/cart                     - Clear cart

# Order
POST   /api/orders                   - Create order (checkout)
GET    /api/orders                   - Get user orders
GET    /api/orders/:id               - Get order details
PUT    /api/orders/:id               - Update status (admin)

# Review
POST   /api/products/:id/reviews     - Add review
GET    /api/products/:id/reviews     - Get reviews
DELETE /api/reviews/:id              - Delete review
```

---

## 💡 Tips

1. **Stock Management** - Always verify stock before checkout
2. **Cart Totals** - Recalculate after every cart change
3. **Order Numbers** - Use timestamp + random for uniqueness
4. **Payment Integration** - Use mock payment for now (Stripe/PayPal later)
5. **Transaction Safety** - Consider using MongoDB transactions for checkout
6. **Email Notifications** - Send order confirmation email (optional)
7. **Verified Reviews** - Only users who purchased can review

---

## 🚀 Getting Started

1. Create branch `feature/BE3-cart-order-review`
2. Create all repository files
3. Create all service files
4. Create all controller files
5. Update route files
6. Test with Postman
7. Create Pull Request

