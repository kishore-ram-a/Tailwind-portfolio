import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'
const Projects = () => {
  return (
    <section id='projects' className='py-20 align-element'>
      <SectionTitle text='Web Creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((item) => {
          return <ProjectCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
