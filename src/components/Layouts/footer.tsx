import React from 'react'

const Footer = () => (
  <div className="flex pt-4 pb-2 border-t border-gray-600">
    <div className="flex-grow">
      <p className="font-light">&copy; 2020 Tengku Hafidz </p>
    </div>
    <div>
      <a href="https://twitter.com/sohafidz" className="ml-4 text-lg hover:text-blue-400">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://instagram.com/tengkuhafidz" className="ml-4 text-lg hover:text-blue-400">
        <i className="fab fa-instagram" />
      </a>
      <a href="https://www.facebook.com/tengku.hafidz.1" className="ml-4 text-lg hover:text-blue-400">
        <i className="fab fa-facebook" />
      </a>
      <a href="https://www.buymeacoffee.com/sohafidz" className="ml-4 text-lg hover:text-blue-400">
        <i className="fas fa-mug-hot" />
      </a>
    </div>
  </div>
)

export default Footer
