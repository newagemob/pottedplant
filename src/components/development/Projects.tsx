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
      <div className='dev-card' id='projects'>
        {projects.map((project) => (
          <div key={project.name} id='project'>
            <a
              className='project-name'
              href={project.link}
              target='_blank'
              rel='noreferrer'
            >
              {project.name}
            </a>
            <p className='project-description'>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
