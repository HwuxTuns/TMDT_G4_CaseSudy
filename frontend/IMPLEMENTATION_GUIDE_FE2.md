# 📚 FE2: Product Detail, Cart, Checkout & Auth - Implementation Guide

**Developer:** Võ Quốc E  
**Duration:** 1.5 Weeks  
**Dependencies:** FE1 (Layout), BE1 (Auth API), BE2 (Products API), BE3 (Cart/Order API)

---

## 📋 Overview

Implement user authentication pages, product detail page with reviews, shopping cart, checkout flow with payment, and contact/policy pages. This completes the entire customer shopping journey.

---

## 🎯 Deliverables

### 1. **Authentication Pages**

#### LoginPage
File: `src/pages/Auth/LoginPage.jsx`

**Features:**
- Email input field
- Password input field
- "Remember me" checkbox
- "Forgot password" link (optional)
- Login button
- Link to register page
- Form validation
- Error message display

**Code Template:**
```jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../services/api'

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      
      // TODO: Call auth API
      const response = await api.post('/auth/login', {
        email: data.email,
        password: data.password,
      })

      // TODO: Store token and user data
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      // TODO: Navigate to home or intended page
      navigate('/')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Email Input */}
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="input"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        {/* Password Input */}
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="input"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        {/* Remember Me */}
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>Remember me</span>
        </label>

        {/* Error Message */}
        {error && <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded">{error}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {/* Register Link */}
      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 underline">
          Register here
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
```

#### RegisterPage
File: `src/pages/Auth/RegisterPage.jsx`

**Features:**
- Name input
- Email input
- Password input
- Confirm password
- Terms & conditions checkbox
- Form validation
- Password match validation
- Register button
- Link to login page

**Similar structure to LoginPage but with additional fields**

### 2. **Product Detail Page** ✅ (Skeleton Created)

File: `src/pages/ProductDetailPage.jsx`

**Features:**
- Product image gallery (multiple images)
- Product info (name, price, old price, discount %)
- Stock status indicator
- Add to cart button with quantity selector
- Product description and details
- Rating and review count
- Reviews section (list and form)
- Related/suggested products

**Code Template:**
```jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import ReviewSection from '../components/ProductDetail/ReviewSection'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        
        // TODO: Fetch product details
        const response = await api.get(`/products/${id}`)
        setProduct(response.data)

        // TODO: Fetch reviews
        const reviewsResponse = await api.get(`/products/${id}/reviews`)
        setReviews(reviewsResponse.data.items)
      } catch (error) {
        console.error('Failed to fetch product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = async () => {
    try {
      // TODO: Add to cart via API
      await api.post('/cart', {
        productId: id,
        quantity,
      })
      // TODO: Show success message
    } catch (error) {
      console.error('Failed to add to cart:', error)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-2 gap-8 mb-8">
        
        {/* Images */}
        <div>
          {/* TODO: Implement image gallery */}
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="w-full rounded"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span>★ {product.rating?.toFixed(1)}</span>
            <span className="text-gray-500">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex gap-4 items-center mb-4">
            <span className="text-3xl font-bold text-blue-500">${product.price}</span>
            {product.oldPrice && (
              <span className="text-lg line-through text-gray-500">
                ${product.oldPrice}
              </span>
            )}
            {product.discount > 0 && (
              <span className="text-red-500 font-bold">-{product.discount}%</span>
            )}
          </div>

          {/* Stock Status */}
          <div className="mb-4">
            {product.stock > 0 ? (
              <span className="text-green-500 font-bold">In Stock</span>
            ) : (
              <span className="text-red-500 font-bold">Out of Stock</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-4 mb-6">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="input w-20"
            />
            <button
              className="btn-primary flex-1"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t pt-6">
            <h3 className="font-bold mb-2">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Category:</strong> {product.category?.name}</li>
              <li><strong>SKU:</strong> {product.sku}</li>
              {/* TODO: Add more details */}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewSection productId={id} reviews={reviews} />
    </div>
  )
}

export default ProductDetailPage
```

### 3. **Review Section Component**

File: `src/components/ProductDetail/ReviewSection.jsx`

**Features:**
- Display list of reviews
- Show rating stars and comment
- Add review form (for logged-in users)
- Rating selector (1-5 stars)
- Comment text area
- Helpful/unhelpful voting
- Admin reply display

**Code Template:**
```jsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../../services/api'

const ReviewSection = ({ productId, reviews: initialReviews }) => {
  const [reviews, setReviews] = useState(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmitReview = async (data) => {
    try {
      // TODO: Post review to API
      const response = await api.post(`/products/${productId}/reviews`, {
        rating: data.rating,
        title: data.title,
        comment: data.comment,
      })

      // TODO: Add new review to list
      setReviews([response.data, ...reviews])
      reset()
      setShowForm(false)
    } catch (error) {
      console.error('Failed to post review:', error)
    }
  }

  return (
    <section className="border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Review Stats */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">Rating Summary</h3>
          {/* TODO: Show rating breakdown */}
        </div>

        {/* Add Review Form */}
        {!showForm && (
          <button
            className="btn-primary w-32"
            onClick={() => setShowForm(true)}
          >
            Write a Review
          </button>
        )}
      </div>

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit(onSubmitReview)} className="bg-gray-50 p-6 rounded mb-8">
          
          {/* Rating */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Rating</label>
            <select {...register('rating')} className="input">
              <option value="">Select rating</option>
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★ Good</option>
              <option value="3">★★★ Average</option>
              <option value="2">★★ Poor</option>
              <option value="1">★ Terrible</option>
            </select>
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Title</label>
            <input
              type="text"
              className="input"
              {...register('title', { required: true })}
              placeholder="Short review title"
            />
          </div>

          {/* Comment */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Comment</label>
            <textarea
              className="input"
              rows="5"
              {...register('comment', { required: true, minLength: 10 })}
              placeholder="Share your experience..."
            />
          </div>

          <button type="submit" className="btn-primary">
            Submit Review
          </button>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className="border-b pb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold">{review.user?.name}</h4>
                <span className="text-yellow-500">★ {review.rating}</span>
              </div>
              <span className="text-gray-500 text-sm">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h5 className="font-bold mb-2">{review.title}</h5>
            <p className="text-gray-700">{review.comment}</p>
            
            {/* Admin Reply */}
            {review.adminReply && (
              <div className="bg-blue-50 p-4 rounded mt-4 border-l-4 border-blue-500">
                <p className="font-bold text-blue-700 mb-2">Admin Reply:</p>
                <p>{review.adminReply.comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewSection
```

### 4. **Shopping Cart Page** ✅ (Skeleton Created)

File: `src/pages/CartPage.jsx`

**Features:**
- Display cart items with images
- Update quantity
- Remove item button
- Cart subtotal and total
- Checkout button
- Continue shopping link
- Empty cart message

**Code Template:**
```jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

const CartPage = () => {
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // TODO: Fetch cart from API
        const response = await api.get('/cart')
        setCart(response.data)
      } catch (error) {
        console.error('Failed to fetch cart:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [])

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      if (quantity <= 0) {
        return handleRemoveItem(itemId)
      }
      
      // TODO: Update quantity via API
      const response = await api.put(`/cart/${itemId}`, { quantity })
      setCart(response.data)
    } catch (error) {
      console.error('Failed to update cart:', error)
    }
  }

  const handleRemoveItem = async (itemId) => {
    try {
      // TODO: Remove item via API
      const response = await api.delete(`/cart/${itemId}`)
      setCart(response.data)
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  if (loading) return <div>Loading cart...</div>

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-xl mb-8">Your cart is empty</p>
        <Link to="/products" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-3 gap-8">
        
        {/* Cart Items */}
        <div className="col-span-2">
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item._id} className="flex gap-4 border-b pb-4">
                
                {/* Product Image */}
                <img
                  src={item.product?.images?.[0]?.url}
                  alt={item.product?.name}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-bold">{item.product?.name}</h3>
                  <p className="text-gray-600">${item.price}</p>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      className="btn-secondary px-2"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item._id, parseInt(e.target.value))}
                      className="input w-16 text-center"
                    />
                    <button
                      className="btn-secondary px-2"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="text-red-500 mt-2"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </button>
                </div>

                {/* Total */}
                <div className="text-right">
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-50 p-6 rounded h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-3 mb-6 border-b pb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>TODO</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>TODO</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>

          <Link to="/checkout" className="btn-primary w-full block text-center">
            Proceed to Checkout
          </Link>

          <Link to="/products" className="btn-secondary w-full block text-center mt-3">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
```

### 5. **Checkout Page** ✅ (Skeleton Created)

File: `src/pages/CheckoutPage.jsx`

**Features:**
- Multi-step checkout (shipping, payment, review)
- Shipping address form
- Payment method selection
- Order review/confirmation
- Calculate shipping cost
- Calculate total

**Code Template:**
```jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../services/api'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Shipping, 2: Payment, 3: Review
  const { register, handleSubmit } = useForm()
  const [checkoutData, setCheckoutData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleShippingSubmit = (data) => {
    setCheckoutData({ ...checkoutData, shippingInfo: data })
    setStep(2)
  }

  const handlePaymentSubmit = (data) => {
    setCheckoutData({ ...checkoutData, paymentInfo: data })
    setStep(3)
  }

  const handlePlaceOrder = async () => {
    try {
      setLoading(true)

      // TODO: Call order API
      const response = await api.post('/orders', {
        shippingInfo: checkoutData.shippingInfo,
        paymentInfo: checkoutData.paymentInfo,
        paymentMethod: checkoutData.paymentMethod,
      })

      // TODO: Redirect to order confirmation
      navigate(`/orders/${response.data._id}`)
    } catch (error) {
      console.error('Failed to place order:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Progress Indicator */}
      <div className="flex justify-between mb-8">
        <div className={step >= 1 ? 'text-blue-500 font-bold' : 'text-gray-400'}>
          1. Shipping
        </div>
        <div className={step >= 2 ? 'text-blue-500 font-bold' : 'text-gray-400'}>
          2. Payment
        </div>
        <div className={step >= 3 ? 'text-blue-500 font-bold' : 'text-gray-400'}>
          3. Review
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        
        {/* Checkout Form */}
        <div>
          {step === 1 && (
            <form onSubmit={handleSubmit(handleShippingSubmit)}>
              <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input"
                  {...register('recipientName', { required: true })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  {...register('email', { required: true })}
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="input"
                  {...register('phone', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="input"
                  {...register('street', { required: true })}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="input"
                  {...register('city', { required: true })}
                />
                <input
                  type="text"
                  placeholder="District"
                  className="input"
                  {...register('district', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Ward"
                  className="input"
                  {...register('ward', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="input"
                  {...register('zipCode')}
                />

                <button type="submit" className="btn-primary w-full">
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit(handlePaymentSubmit)}>
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                <label className="flex items-center border p-4 rounded cursor-pointer">
                  <input type="radio" value="credit_card" {...register('paymentMethod')} />
                  <span className="ml-2">Credit Card</span>
                </label>
                <label className="flex items-center border p-4 rounded cursor-pointer">
                  <input type="radio" value="paypal" {...register('paymentMethod')} />
                  <span className="ml-2">PayPal</span>
                </label>
                <label className="flex items-center border p-4 rounded cursor-pointer">
                  <input type="radio" value="bank_transfer" {...register('paymentMethod')} />
                  <span className="ml-2">Bank Transfer</span>
                </label>
                <label className="flex items-center border p-4 rounded cursor-pointer">
                  <input type="radio" value="cod" {...register('paymentMethod')} />
                  <span className="ml-2">Cash on Delivery</span>
                </label>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="btn-secondary flex-1"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Review Order</h2>
              
              <div className="bg-gray-50 p-6 rounded mb-6">
                <h3 className="font-bold mb-3">Shipping Address</h3>
                <p>{checkoutData.shippingInfo?.recipientName}</p>
                <p>{checkoutData.shippingInfo?.street}</p>
                <p>{checkoutData.shippingInfo?.city}, {checkoutData.shippingInfo?.district}</p>

                <h3 className="font-bold mt-6 mb-3">Payment Method</h3>
                <p>{checkoutData.paymentMethod}</p>
              </div>

              <div className="flex gap-4">
                <button
                  className="btn-secondary flex-1"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  className="btn-primary flex-1"
                  onClick={handlePlaceOrder}
                  disabled={loading}
                >
                  {loading ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {/* TODO: Display cart items summary */}
          <div className="border-b pb-4 mb-4">
            <p>Cart items will appear here</p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>TODO</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>TODO</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>TODO</span>
            </div>
          </div>
          <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>TODO</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
```

### 6. **Contact Page with Google Maps**

File: `src/pages/ContactPage.jsx`

**Features:**
- Contact form (name, email, message)
- Google Maps integration
- Business info (address, phone, email)
- Social media links

### 7. **Policies Page**

File: `src/pages/PoliciesPage.jsx`

**Features:**
- Display return policy
- Display warranty policy
- Display shipping policy
- Display terms & conditions

---

## 🔍 Testing Checklist

- [ ] Login with valid credentials
- [ ] Login with invalid credentials (error message)
- [ ] Register new user
- [ ] View product details
- [ ] Add product to cart
- [ ] Update cart item quantity
- [ ] Remove item from cart
- [ ] View cart
- [ ] Proceed to checkout
- [ ] Fill shipping form
- [ ] Select payment method
- [ ] Place order
- [ ] View order confirmation
- [ ] View and submit reviews
- [ ] View contact page with maps
- [ ] Responsive design on mobile/tablet

---

## 📝 Component Structure

```
src/
├── pages/
│   ├── Auth/
│   │   ├── LoginPage.jsx      (FE2)
│   │   └── RegisterPage.jsx   (FE2)
│   ├── ProductDetailPage.jsx  (FE2) ✅
│   ├── CartPage.jsx           (FE2) ✅
│   ├── CheckoutPage.jsx       (FE2) ✅
│   ├── ContactPage.jsx        (FE2)
│   ├── PoliciesPage.jsx       (FE2)
│   └── ...
├── components/
│   ├── ProductDetail/
│   │   └── ReviewSection.jsx  (FE2)
│   └── ...
└── hooks/
    ├── useAuth.js             (FE2)
    └── useCart.js             (FE2)
```

---

## 💡 Tips

1. **State Management** - Use Zustand or Context API for auth/cart state
2. **Form Handling** - Use react-hook-form for forms
3. **Image Gallery** - For product images, consider react-image-gallery
4. **Maps** - Use @react-google-maps/api for Google Maps
5. **Error Handling** - Show user-friendly error messages
6. **Loading States** - Show spinners during API calls
7. **Validation** - Validate forms before submission
8. **Responsive** - Test on multiple screen sizes

---

## 🚀 Getting Started

1. Create branch `feature/FE2-auth-cart-checkout`
2. Implement LoginPage
3. Implement RegisterPage
4. Implement ProductDetailPage
5. Implement ReviewSection
6. Implement CartPage
7. Implement CheckoutPage
8. Implement ContactPage
9. Test end-to-end flow
10. Create Pull Request

