import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layouts'
import SEO from '../components/seo'

const Home = () => (
  <div>
    <SEO />
    <Layout>
      <div className="pt-16">
        <h1 className="text-5xl font-bold max-w-4xl">
          Hi, I&#39;m Hafidz, an <span className="text-blue-400">app developer</span> living in Sunny Singapore.
        </h1>
        <p className="mt-4 text-3xl  max-w-4xl font-light">Here are some of my recent side projects</p>
        <div className="grid grid-cols-3 gap-6 pt-8 pb-4">
          <div className="p-6 hover:bg-blue-800 rounded-lg bg-blue-900 cursor-pointer">
            <div className="flex">
              <h4 className="font-semibold text-2xl flex-grow">WebSheets</h4>
              <i className="fas fa-external-link-alt mt-2"></i>
            </div>
            <p className="text-xl font-light mb-4 leading-tight">Create your own site with just Google Sheets</p>
            <p className="font-light">https://websheets.co</p>
          </div>
          <div className="p-6 hover:bg-blue-800 rounded-lg bg-blue-900 cursor-pointer">
            <div className="flex">
              <h4 className="font-semibold text-2xl flex-grow">Halal Ecodes Check</h4>
              <i className="fas fa-external-link-alt mt-2"></i>
            </div>
            <p className="text-xl font-light mb-4 leading-tight text-gray-">
              Check if the additives/e-codes are halal for consumption
            </p>
            <p className="font-light">https://halalecodescheck.com</p>
          </div>
          <div className="p-6 hover:bg-blue-800 rounded-lg bg-blue-900 cursor-pointer">
            <div className="flex">
              <h4 className="font-semibold text-2xl flex-grow">Fatiha TV</h4>
              <i className="fas fa-external-link-alt mt-2"></i>
            </div>
            <p className="text-xl font-light mb-4 leading-tight">Watch Islamic content without distraction</p>
            <p className="font-light">https://fatihatv.com</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-grow"></div>
          <div>
            <Link to="/" className="text-xl font-light hover:text-blue-400">
              see all side projects <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)

export default Home
