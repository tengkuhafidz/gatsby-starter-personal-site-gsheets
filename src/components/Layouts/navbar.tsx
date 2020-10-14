import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => (
  <nav className="flex py-8">
    <div>
      <Link to="/" className="cursor-pointer">
        <img
          src="https://media.devlabs.academy/file/w_60/hafidz/profile-1.png"
          className="rounded-full h-12 inline-block"
        />
        <h6 className="inline-block ml-2 font-semibold">Tengku Hafidz</h6>
      </Link>
    </div>
    <div className="flex-grow"></div>
    <div>
      <Link to="/" className="ml-8 py-2 border-b-4 border-blue-400">
        <span className="font-bold">01</span> home
      </Link>
      <Link to="/" className="ml-8 hover:border-b-4 hover:border-gray-600">
        <span className="font-bold">02</span> hustles
      </Link>
      <Link to="/" className="ml-8">
        <span className="font-bold">03</span> resources
      </Link>
      <Link to="/" className="ml-8">
        <span className="font-bold">04</span> journal
      </Link>
    </div>
    <div className="ml-8">
      <i className="fas fa-lightbulb text-2xl cursor-pointer hover:text-yellow-400"></i>
    </div>
  </nav>
)

export default Navbar
