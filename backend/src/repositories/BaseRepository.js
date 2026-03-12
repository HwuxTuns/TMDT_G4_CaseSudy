/**
 * Base Repository Class
 * All repositories should extend this class
 * 
 * Usage:
 * class ProductRepository extends BaseRepository {
 *   constructor() {
 *     super(Product);
 *   }
 * }
 */
class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  /**
   * Create a new document
   */
  async create(data) {
    const document = new this.Model(data);
    return await document.save();
  }

  /**
   * Find all documents with optional filters
   */
  async findAll(filter = {}, options = {}) {
    const { sort = {}, skip = 0, limit = 10, select = '' } = options;
    return await this.Model
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .select(select)
      .lean();
  }

  /**
   * Find single document by filter
   */
  async findOne(filter) {
    return await this.Model.findOne(filter).lean();
  }

  /**
   * Find by ID
   */
  async findById(id) {
    return await this.Model.findById(id).lean();
  }

  /**
   * Update document
   */
  async update(id, data) {
    return await this.Model.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
  }

  /**
   * Delete document
   */
  async delete(id) {
    return await this.Model.findByIdAndRemove(id);
  }

  /**
   * Count documents
   */
  async count(filter = {}) {
    return await this.Model.countDocuments(filter);
  }

  /**
   * Check if document exists
   */
  async exists(filter) {
    return await this.Model.exists(filter);
  }
}

module.exports = BaseRepository;
