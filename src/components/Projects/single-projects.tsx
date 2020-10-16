import React from 'react'
import { Project } from '../../utils/models'

interface Props {
  project: Project
}
const SingleProject = ({ project }) => {
  const { title, description, status, url } = project

  const isLive = status === 'live'

  const handleClick = () => {
    if (typeof window !== 'undefined' && isLive) {
      window.open(url, '_blank')
    }
  }
  return (
    <div
      className={`p-6 rounded-lg max-w-xs ${isLive ? 'bg-blue-900 hover:bg-blue-800 cursor-pointer' : 'bg-gray-800'}`}
      onClick={() => handleClick()}
    >
      <div className="flex">
        <h4 className="font-semibold text-xl flex-grow leading-tight">{title}</h4>
        <i className={isLive && 'fas fa-external-link-alt '}></i>
      </div>
      <p className="font-light mb-4 leading-tight">{description}</p>
      <p className="font-light text-sm truncate ">{url}</p>
    </div>
  )
}

export default SingleProject
