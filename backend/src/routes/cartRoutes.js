const express = require('express');
const { authenticate } = require('../middleware/authMiddleware');

/**
 * TODO: BE3 - Lê Minh C (Part 1)
 * 
 * Implement the following endpoints:
 * - GET / (get current user cart)
 * - POST / (add to cart)
 * - PUT /:itemId (update cart item quantity)
 * - DELETE /:itemId (remove from cart)
 * - DELETE / (clear cart)
 */

const router = express.Router();

// All cart routes require authentication
router.use(authenticate);

// Import controller here
// const CartController = require('../controllers/CartController');

// Get cart
router.get('/', (req, res) => {
  res.json({ message: 'TODO: Implement get cart' });
});

// Add to cart
router.post('/', (req, res) => {
  res.json({ message: 'TODO: Implement add to cart' });
});

// Update cart item quantity
router.put('/:itemId', (req, res) => {
  res.json({ message: 'TODO: Implement update cart item' });
});

// Remove from cart
router.delete('/:itemId', (req, res) => {
  res.json({ message: 'TODO: Implement remove from cart' });
});

// Clear cart
router.delete('/', (req, res) => {
  res.json({ message: 'TODO: Implement clear cart' });
});

module.exports = router;
