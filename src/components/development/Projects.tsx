import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: 'Melon',
      description: 'Safety Technology for Industry Professionals',
      link: 'https://www.divemelon.com'
    },
    {
      name: 'Liquid',
      description: 'Load gift cards into your bank account',
      link: 'https://www.liquid.cards'
    },
    {
      name: 'Potted Plant',
      description: 'Development Portfolio',
      link: 'https://www.pottedplant.dev'
    }
  ]

  return (
    <>
      <section className='dev-card' id='projects'>
        {projects.map((project) => (
          <div key={project.name} id='project'>
            <Link
              className='project-name'
              href={project.link}
              target='_blank'
              rel='noreferrer'
            >
              {project.name}
            </Link>
            <p className='project-description'>{project.description}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Projects
