import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Product Details</h1>
      <p className="text-lg text-gray-600 mb-8">
        TODO: FE2 - Implement product detail page with images, reviews, add to cart
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded">
          <p>Product images gallery will appear here</p>
        </div>
        <div className="bg-gray-100 p-8 rounded">
          <p>Product info, price, add to cart button will appear here</p>
        </div>
      </div>
      <div className="mt-8 bg-gray-100 p-8 rounded">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <p>Product reviews will appear here</p>
      </div>
    </div>
  )
}

export default ProductDetailPage
