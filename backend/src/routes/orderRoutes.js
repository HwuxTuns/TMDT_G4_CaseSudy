const express = require('express');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

/**
 * TODO: BE3 - Lê Minh C (Part 2)
 * 
 * Implement the following endpoints:
 * - POST / (create order / checkout)
 * - GET / (get user orders)
 * - GET /:id (get order details)
 * - PUT /:id (update order status - admin only)
 * 
 * Checkout logic:
 * 1. Get user's cart
 * 2. Validate all products are in stock
 * 3. Calculate total price
 * 4. Create order from cart items
 * 5. Clear user's cart
 * 6. Return order with receipt
 */

const router = express.Router();

// All order routes require authentication
router.use(authenticate);

// Import controller here
// const OrderController = require('../controllers/OrderController');

// Create order (checkout)
router.post('/', (req, res) => {
  res.json({ message: 'TODO: Implement create order (checkout)' });
});

// Get user orders
router.get('/', (req, res) => {
  res.json({ message: 'TODO: Implement get user orders' });
});

// Get order details
router.get('/:id', (req, res) => {
  res.json({ message: 'TODO: Implement get order details' });
});

// Update order status (admin)
router.put('/:id', isAdmin, (req, res) => {
  res.json({ message: 'TODO: Implement update order status' });
});

module.exports = router;
