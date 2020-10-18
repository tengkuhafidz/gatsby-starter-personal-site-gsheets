import { Link } from 'gatsby'
import React from 'react'

const Home = () => {
  const handleClick = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank')
    }
  }
  return (
    <div className="pt-8 md:pt-16">
      <h1 className="text-4xl leading-tight md:text-5xl font-bold md:max-w-4xl">
        Hi<span className="hidden md:inline-block">&nbsp;👋</span>, I&#39;m Hafidz, an{' '}
        <span className="text-blue-400">app developer</span> living in Sunny Singapore.
      </h1>
      <p className="mt-4 text-2xl md:text-3xl  max-w-4xl font-light">
        Here are some of my recent side projects <span className="xl:hidden">👇</span>
      </p>
      <div className="grid xl:grid-cols-3 gap-6 pt-8 pb-4">
        <div
          className="p-6 hover:bg-blue-800 rounded-lg bg-blue-900 cursor-pointer"
          onClick={() => handleClick('https://websheets.co')}
        >
          <div className="flex">
            <h4 className="font-semibold text-xl md:text-2xl flex-grow">WebSheets</h4>
            <i className="fas fa-external-link-alt mt-2"></i>
          </div>
          <p className="text-lg font-light mb-4 leading-tight">Create your own website with just Google Sheets</p>
          <p className="font-light">https://websheets.co</p>
        </div>
        <div
          className="p-6 hover:bg-blue-800 rounded-lg bg-blue-900 cursor-pointer"
          onClick={() => handleClick('https://ecodehalalcheck.com')}
        >
          <div className="flex">
            <h4 className="font-semibold text-xl md:text-2xl flex-grow">Halal Ecodes Check</h4>
            <i className="fas fa-external-link-alt mt-2"></i>
          </div>
          <p className="text-lg font-light mb-4 leading-tight text-gray-">
            Check if the additives/e-codes are halal for consumption
          </p>
          <p className="font-light">https://ecodehalalcheck.com</p>
        </div>
        <div
          className="p-6 hover:bg-blue-800 rounded-lg bg-blue-900 cursor-pointer"
          onClick={() => handleClick('https://kuliah.sg')}
        >
          <div className="flex">
            <h4 className="font-semibold text-xl md:text-2xl flex-grow">Kuliah SG</h4>
            <i className="fas fa-external-link-alt mt-2"></i>
          </div>
          <p className="text-lg font-light mb-4 leading-tight">
            Watch Local Islamic content at the comfort of your home
          </p>
          <p className="font-light">https://kuliah.sg</p>
        </div>
      </div>
      <div className="flex pb-12">
        <div className="flex-grow"></div>
        <div>
          <Link to="/projects" className="text-xl font-light hover:text-blue-400">
            see all side projects <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
