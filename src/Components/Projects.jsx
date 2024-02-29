import React from 'react'
import SectionTitle from './Section'
import { projects } from '../data'
import Projectscard from './Projectscard'

const Projects = () => {
  return (
    <section className='align-element py-20' id='projects'>
        <SectionTitle text='My Projects'/>
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 '>
        {projects.map((project)=>{
            const {id, img, title, text, url, github} = project
            return <Projectscard key={id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
