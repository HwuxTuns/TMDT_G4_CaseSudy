const express = require('express');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

/**
 * TODO: BE2 - Trần Thị B
 * 
 * Implement the following endpoints:
 * - GET /
 * - GET /search
 * - GET /:id
 * - POST / (admin)
 * - PUT /:id (admin)
 * - DELETE /:id (admin)
 * - GET /categories
 * 
 * Support query parameters:
 * - category (filter by category)
 * - priceMin, priceMax (filter by price range)
 * - sort (sort by field, prefix with - for descending)
 * - search (search by name or description)
 * - page, limit (pagination)
 */

const router = express.Router();

// Import controller here
// const ProductController = require('../controllers/ProductController');

// Get all products with filter and sort
router.get('/', (req, res) => {
  res.json({ message: 'TODO: Implement get all products with filter/sort' });
});

// Search products
router.get('/search', (req, res) => {
  res.json({ message: 'TODO: Implement search products' });
});

// Get product by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'TODO: Implement get product by ID' });
});

// Create product (admin)
router.post('/', authenticate, isAdmin, (req, res) => {
  res.json({ message: 'TODO: Implement create product' });
});

// Update product (admin)
router.put('/:id', authenticate, isAdmin, (req, res) => {
  res.json({ message: 'TODO: Implement update product' });
});

// Delete product (admin)
router.delete('/:id', authenticate, isAdmin, (req, res) => {
  res.json({ message: 'TODO: Implement delete product' });
});

// Get categories
router.get('/categories', (req, res) => {
  res.json({ message: 'TODO: Implement get categories' });
});

module.exports = router;
