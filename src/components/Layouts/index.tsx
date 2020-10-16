import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => (
  <div className="bg-gray-900 text-white">
    <div className="max-w-xs md:max-w-6xl mx-auto py-4 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  </div>
)

export default Layout
