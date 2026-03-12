const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    comment: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
    },
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    helpful: {
      type: Number,
      default: 0,
    },
    unhelpful: {
      type: Number,
      default: 0,
    },
    isVerifiedPurchase: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
    adminReply: {
      comment: String,
      repliedAt: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent duplicate reviews from same user
reviewSchema.index({ product: 1, user: 1 }, { unique: true });

// Index for sorting
reviewSchema.index({ rating: -1, createdAt: -1 });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
