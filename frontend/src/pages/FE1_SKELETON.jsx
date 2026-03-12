/**
 * TODO: FE1 - Phạm Thu D
 * 
 * This file contains skeleton components/pages.
 * Each developer should implement their assigned pages.
 */

// HomePage.jsx
export const HomePage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Welcome to E-Commerce Store</h1>
    <p>TODO: Implement home page with featured products</p>
  </div>
)

// ProductListPage.jsx
export const ProductListPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Products</h1>
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <h2 className="font-bold mb-4">Filters</h2>
        <p>TODO: Implement filter sidebar</p>
      </div>
      <div className="col-span-9">
        <h2 className="font-bold mb-4">Product List</h2>
        <p>TODO: Implement product grid with pagination</p>
      </div>
    </div>
  </div>
)

// Layout components (FE1)
export const Header = () => (
  <header className="bg-gray-100 p-4">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">TMDT Store</h1>
      <p>TODO: Implement header with navigation</p>
    </div>
  </header>
)

export const Footer = () => (
  <footer className="bg-gray-100 p-4 mt-8">
    <div className="container mx-auto">
      <p>TODO: Implement footer</p>
    </div>
  </footer>
)
