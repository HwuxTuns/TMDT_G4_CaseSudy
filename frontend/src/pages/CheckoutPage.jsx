import React from 'react'

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <p className="text-lg text-gray-600 mb-8">
        TODO: FE2 - Implement checkout form (shipping, payment) with order review
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Checkout Form</h2>
          <p>Shipping and payment form will appear here</p>
        </div>
        <div className="bg-gray-100 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Order Review</h2>
          <p>Order summary will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
