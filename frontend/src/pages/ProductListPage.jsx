import React from 'react'

const ProductListPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <p className="text-lg text-gray-600 mb-8">
        TODO: FE1 - Implement product list with filters and sorting
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-4">Filters</h2>
          <p>Filter sidebar coming soon</p>
        </div>
        <div className="col-span-9 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-4">Product Grid</h2>
          <p>Products will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage
