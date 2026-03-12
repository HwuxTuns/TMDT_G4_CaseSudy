import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page not found</p>
      <Link to="/" className="text-blue-500 underline text-lg">
        Go back to home
      </Link>
    </div>
  )
}

export default NotFoundPage
