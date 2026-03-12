import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">TODO: Header Component</h1>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-100 border-t mt-8">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">TODO: Footer Component</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
