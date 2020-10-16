import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SingleProject from './single-projects'
import { Project } from '../../utils/models'
import BackToTop from '../back-to-top'

const Projects = () => {
  const { allProjectsSheetsData } = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsSheetsData {
        nodes {
          id
          title
          description
          type
          status
          url
        }
      }
    }
  `)

  const projects: Project[] = allProjectsSheetsData.nodes

  const [filter, setFilter] = useState('all')

  const uniqueTypes = ['all', ...new Set(projects.map((project) => project.type))]

  const renderTypeFilters = () => {
    return uniqueTypes.map((type) => (
      <div
        key={type}
        className={`inline-block py-1 px-2 border border-gray-200 mr-1 rounded-lg  ${
          filter === type ? 'bg-gray-200 text-gray-900' : 'cursor-pointer hover:bg-gray-700'
        }`}
        onClick={() => setFilter(type)}
      >
        <p className="capitalize">{type}</p>
      </div>
    ))
  }

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.type === filter)

  const renderProjects = () => {
    return filteredProjects.map((project) => <SingleProject project={project} key={project.id} />)
  }

  const renderBackToTop = () => {
    if (typeof window !== 'undefined') {
      return <BackToTop />
    }
  }

  return (
    <div className="pb-16">
      <h1 className="text-5xl text-center">Side Projects</h1>
      <p className="text-xl text-center font-light">The things I do outside of my working hours to scratch my itch</p>
      <div className="text-center mt-4">{renderTypeFilters()}</div>
      <div className="grid md:grid-cols-4 gap-4 py-16">{renderProjects()}</div>
      <BackToTop />
    </div>
  )
}

export default Projects
