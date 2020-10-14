import React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => (
  <div className="bg-gray-900 min-h-screen text-white">
    <div className="max-w-6xl mx-auto py-4">
      <Navbar />
      {children}
    </div>
  </div>
)

export default Layout
