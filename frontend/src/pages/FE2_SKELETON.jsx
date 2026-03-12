/**
 * TODO: FE2 - Võ Quốc E
 * 
 * This file contains skeleton components/pages.
 * Each developer should implement their assigned pages.
 */

// ProductDetailPage.jsx
export const ProductDetailPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Product Details</h1>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <p>TODO: Implement product images/gallery</p>
      </div>
      <div>
        <p>TODO: Implement product info, price, add to cart button</p>
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <p>TODO: Implement review section</p>
    </div>
  </div>
)

// CartPage.jsx
export const CartPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <p>TODO: Implement cart items list</p>
      </div>
      <div>
        <p>TODO: Implement cart summary and checkout button</p>
      </div>
    </div>
  </div>
)

// CheckoutPage.jsx
export const CheckoutPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Checkout</h1>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <p>TODO: Implement checkout form (shipping, payment)</p>
      </div>
      <div>
        <p>TODO: Implement order review summary</p>
      </div>
    </div>
  </div>
)

// Auth pages
export const LoginPage = () => (
  <div className="container mx-auto p-4 max-w-md mx-auto">
    <h1 className="text-3xl font-bold mb-8">Login</h1>
    <p>TODO: Implement login form</p>
  </div>
)

export const RegisterPage = () => (
  <div className="container mx-auto p-4 max-w-md mx-auto">
    <h1 className="text-3xl font-bold mb-8">Register</h1>
    <p>TODO: Implement registration form</p>
  </div>
)

// ContactPage.jsx
export const ContactPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <p>TODO: Implement contact form</p>
      </div>
      <div>
        <p>TODO: Implement Google Maps</p>
      </div>
    </div>
  </div>
)

// NotFoundPage.jsx
export const NotFoundPage = () => (
  <div className="container mx-auto p-4 text-center">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-xl">Page not found</p>
  </div>
)
