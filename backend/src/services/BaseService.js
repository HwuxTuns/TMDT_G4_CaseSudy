const ApiError = require('../utils/ApiError');

/**
 * Base Service Class
 * All service classes should extend this
 * 
 * Contains common business logic patterns
 */
class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Get all items with pagination
   */
  async getAll(filter = {}, options = {}) {
    try {
      const { page = 1, limit = 10, sort = '-createdAt' } = options;
      const skip = (page - 1) * limit;

      const [items, total] = await Promise.all([
        this.repository.findAll(filter, { skip, limit, sort }),
        this.repository.count(filter),
      ]);

      return {
        items,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new ApiError(500, 'Failed to fetch items', [error.message]);
    }
  }

  /**
   * Get single item by ID
   */
  async getById(id) {
    try {
      const item = await this.repository.findById(id);
      if (!item) {
        throw new ApiError(404, 'Item not found');
      }
      return item;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(500, error.message);
    }
  }

  /**
   * Create item
   */
  async create(data) {
    try {
      return await this.repository.create(data);
    } catch (error) {
      throw new ApiError(400, 'Failed to create item', [error.message]);
    }
  }

  /**
   * Update item
   */
  async update(id, data) {
    try {
      const item = await this.repository.update(id, data);
      if (!item) {
        throw new ApiError(404, 'Item not found');
      }
      return item;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(400, 'Failed to update item', [error.message]);
    }
  }

  /**
   * Delete item
   */
  async delete(id) {
    try {
      const item = await this.repository.delete(id);
      if (!item) {
        throw new ApiError(404, 'Item not found');
      }
      return item;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(500, 'Failed to delete item', [error.message]);
    }
  }
}

module.exports = BaseService;
