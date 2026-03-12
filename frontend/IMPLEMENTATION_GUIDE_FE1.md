# 📚 FE1: Layout, Navigation & Product Listing - Implementation Guide

**Developer:** Phạm Thu D  
**Duration:** 1 Week  
**Dependencies:** None (use mock data initially)

---

## 📋 Overview

Implement the main layout structure, navigation menu, and product listing page with filtering and sorting capabilities. This sets up the overall UI framework that other pages will use.

---

## 🎯 Deliverables

### 1. **Main Layout Component** ✅ (Skeleton Created)

File: `src/components/Layout/MainLayout.jsx`

**Tasks:**
- Create fixed/sticky header with navigation
- Create responsive sidebar/navigation menu
- Create main content area (Outlet for pages)
- Create footer with links and info
- Implement responsive design (mobile, tablet, desktop)

**Structure:**
```jsx
// MainLayout.jsx
<div className="min-h-screen flex flex-col">
  <Header />
  <div className="flex-1 flex">
    <Sidebar />
    <main className="flex-1">
      <Outlet /> {/* Page content */}
    </main>
  </div>
  <Footer />
</div>
```

**Features to Include:**
- Logo/Brand name
- Search bar
- Navigation menu (Home, Products, Cart, etc.)
- User menu (Login/Register or Profile/Logout)
- Cart icon with item count
- Mobile hamburger menu
- Footer with quick links, policies, contact

### 2. **Header Component**

File: `src/components/Layout/Header.jsx`

**Tasks:**
- Create sticky header that stays at top
- Include logo/brand
- Add search functionality (search box)
- Add navigation links
- Add user menu (if logged in)
- Add cart button with badge
- Responsive design (collapse menu on mobile)

**Code Template:**
```jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white border-b shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          TMDT Store
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8">
          {/* TODO: Implement search box */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/products" className="hover:text-blue-500">
            Products
          </Link>
          {/* TODO: Add more navigation links */}
        </nav>

        {/* User & Cart Icons */}
        <div className="flex gap-4 items-center">
          {/* TODO: Add cart button with badge */}
          {/* TODO: Add user menu */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4">
          {/* TODO: Mobile navigation items */}
        </div>
      )}
    </header>
  )
}

export default Header
```

### 3. **Sidebar/Filter Component**

File: `src/components/FilterBar.jsx`

**Tasks:**
- Create category filter
- Create price range filter (min/max)
- Create sorting dropdown
- Make filters interactive (update URL params)
- Handle filter state

**Features:**
- Category list (fetch from API)
- Price range slider (min: 0, max: 10000+)
- Sorting options (price low-high, high-low, newest, popular)
- "Clear Filters" button
- Filter count indicator

**Code Template:**
```jsx
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterBar = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleFilterChange = () => {
    // TODO: Update URL with filter params
    // TODO: Trigger product list refresh
  }

  return (
    <div className="w-64 bg-white rounded-lg shadow p-4">
      
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-bold mb-3">Categories</h3>
        {/* TODO: Render categories */}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-bold mb-3">Price Range</h3>
        {/* TODO: Implement price slider */}
      </div>

      {/* Sort */}
      <div className="mb-6">
        <h3 className="font-bold mb-3">Sort By</h3>
        <select className="input">
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      <button className="btn-secondary w-full">
        Clear Filters
      </button>
    </div>
  )
}

export default FilterBar
```

### 4. **Product Card Component**

File: `src/components/ProductCard.jsx`

**Tasks:**
- Create reusable product card component
- Display product image
- Display product name, price
- Display old price and discount %
- Display rating
- Quick add to cart button
- Link to detail page

**Code Template:**
```jsx
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <Link to={`/products/${product._id}`}>
      <div className="card hover:shadow-lg transition-shadow">
        
        {/* Product Image */}
        <div className="relative mb-4 bg-gray-200 rounded overflow-hidden h-48">
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Discount Badge */}
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <h3 className="font-bold mb-2 truncate">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <span>★ {product.rating?.toFixed(1) || 'N/A'}</span>
          <span className="text-gray-500">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex gap-2 items-center mb-3">
          <span className="text-lg font-bold text-blue-500">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-500">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className="btn-primary w-full"
          onClick={(e) => {
            e.preventDefault()
            // TODO: Add to cart
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
```

### 5. **Product List Page** ✅ (Skeleton Created)

File: `src/pages/ProductListPage.jsx`

**Tasks:**
- Fetch products from API with filters/sort
- Display with FilterBar component
- Display ProductCard components in grid
- Implement pagination
- Handle loading and error states
- Responsive grid (1 col mobile, 2-3 tablets, 3-4 desktop)

**Code Template:**
```jsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../services/api'
import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'

const ProductListPage = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        
        // TODO: Build query from searchParams
        const query = new URLSearchParams(searchParams)
        
        // TODO: Fetch from API
        const response = await api.get(`/products?${query}`)
        
        setProducts(response.data.items)
        setPagination(response.data.pagination)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchParams])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="hidden md:block">
          <FilterBar />
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {loading && <p>Loading products...</p>}
          
          {!loading && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-4">
                {/* TODO: Implement pagination buttons */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductListPage
```

### 6. **Home Page** ✅ (Skeleton Created)

File: `src/pages/HomePage.jsx`

**Tasks:**
- Create hero/banner section
- Display featured/promoted products
- Display category showcase
- Add CTAs (Call To Action)
- Responsive design

**Code Template:**
```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        // TODO: Fetch promoted/featured products
        const response = await api.get('/products?isPromotion=true&limit=6')
        setFeaturedProducts(response.data.items)
      } catch (error) {
        console.error('Failed to fetch featured products:', error)
      }
    }

    fetchFeatured()
  }, [])

  return (
    <div className="container mx-auto">
      
      {/* Hero Section */}
      <section className="bg-blue-500 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to TMDT Store</h1>
        <p className="text-xl mb-6">Explore our amazing products at great prices</p>
        <Link to="/products" className="btn-primary bg-white text-blue-500 inline-block">
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Showcase */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        {/* TODO: Display categories */}
      </section>
    </div>
  )
}

export default HomePage
```

### 7. **Footer Component**

File: `src/components/Layout/Footer.jsx`

**Tasks:**
- Create footer with links sections
- Include quick links, policies
- Include contact info
- Include social media links
- Responsive design

---

## 🔍 Testing Checklist

- [ ] Header displays on all pages
- [ ] Navigation links work
- [ ] Search box is functional (or at least styled)
- [ ] Mobile menu works
- [ ] Product list loads from API (or mock data)
- [ ] Filters update product list
- [ ] Sorting options work
- [ ] Pagination works
- [ ] Product cards display correctly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Links to product detail pages work

---

## 📝 Component Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx         (FE1)
│   │   ├── Footer.jsx         (FE1)
│   │   └── MainLayout.jsx     (FE1) ✅
│   ├── FilterBar.jsx          (FE1)
│   ├── SortDropdown.jsx       (FE1)
│   └── ProductCard.jsx        (FE1)
├── pages/
│   ├── HomePage.jsx           (FE1) ✅
│   ├── ProductListPage.jsx    (FE1) ✅
│   └── ...
└── services/
    └── api.js                 (FE1) ✅
```

---

## 💡 Tips

1. **Use Tailwind CSS** - All styling is already configured
2. **Mobile First** - Design for mobile, then scale up
3. **Responsive Grid** - Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
4. **Mock Data** - If API isn't ready, use JSON mock data
5. **URL Parameters** - Use searchParams for filters (easy sharing)
6. **Loading States** - Show loading spinner while fetching
7. **Error Handling** - Display user-friendly error messages

---

## 🚀 Getting Started

1. Create branch `feature/FE1-layout-products`
2. Implement Header component
3. Implement FilterBar component
4. Implement ProductCard component
5. Implement ProductListPage
6. Implement HomePage
7. Implement Footer
8. Test responsiveness on different screen sizes
9. Create Pull Request

