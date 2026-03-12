import React from 'react'

const CartPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <p className="text-lg text-gray-600 mb-8">
        TODO: FE2 - Implement shopping cart with items, quantities, and checkout button
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 bg-gray-100 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
          <p>Cart items list will appear here</p>
        </div>
        <div className="bg-gray-100 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <p>Cart summary and checkout button will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default CartPage
