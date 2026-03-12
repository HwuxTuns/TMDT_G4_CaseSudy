const express = require('express');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

/**
 * TODO: BE1 - Nguyễn Văn A
 * 
 * Implement the following endpoints:
 * - POST /register
 * - POST /login
 * - POST /logout
 * - GET /me
 * - PUT /users/:id
 * - GET /users (admin only)
 */

const router = express.Router();

// Import controller here
// const AuthController = require('../controllers/AuthController');

// Register route
router.post('/register', (req, res) => {
  res.json({ message: 'TODO: Implement register' });
});

// Login route
router.post('/login', (req, res) => {
  res.json({ message: 'TODO: Implement login' });
});

// Logout route
router.post('/logout', authenticate, (req, res) => {
  res.json({ message: 'TODO: Implement logout' });
});

// Get current user
router.get('/me', authenticate, (req, res) => {
  res.json({ message: 'TODO: Implement get current user' });
});

// Update user profile
router.put('/users/:id', authenticate, (req, res) => {
  res.json({ message: 'TODO: Implement update user' });
});

// Get all users (admin only)
router.get('/users', authenticate, isAdmin, (req, res) => {
  res.json({ message: 'TODO: Implement get all users' });
});

module.exports = router;
