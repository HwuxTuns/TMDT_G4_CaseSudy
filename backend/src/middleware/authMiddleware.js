const jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');

/**
 * Middleware to verify JWT token
 * Usage: app.get('/api/protected', authenticate, controller)
 */
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ApiError(401, 'No token provided. Please login first.');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof ApiError) {
      return next(error);
    }
    next(new ApiError(401, error.message));
  }
};

/**
 * Middleware to check if user is admin
 * Usage: app.delete('/api/admin/products/:id', authenticate, isAdmin, controller)
 */
const isAdmin = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      throw new ApiError(403, 'Access denied. Admin only.');
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authenticate, isAdmin };
