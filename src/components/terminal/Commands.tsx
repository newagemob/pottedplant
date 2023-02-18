import React, { useState } from 'react'
import { useCopy } from '../../hooks'

const Commands = () => {
  const { handleCopy } = useCopy()
  const [copied, setCopied] = useState(false)

  const commands = [
    {
      name: 'help',
      description: 'List all commands'
    },
    {
      name: 'cd',
      description:
        <span>
          Change directory to [project name] - Options:
          <span className='text-yellow-500 font-bold'>
            &nbsp;cd [melon] | cd [liquid] | cd [midjournal] | cd [pottedplant]
          </span>
        </span>
    },
    {
      name: 'ls',
      description: 'List directory contents [all projects]. All projects will be treated as directories. To explore a project, type cd [project name]. To view all projects, type ls.'
    },
    {
      name: 'contact',
      description: 'Display name and contact information'
    },
    {
      name: <span>ctrl <span className='text-rose-400'>+</span> l</span>,
      description: 'Clear the terminal'
    },
    {
      name: 'github',
      description: 'View my GitHub profile'
    },
    {
      name: 'linkedin',
      description: 'View my LinkedIn profile'
    },
  ]


  const projects = [
    {
      name: 'Melon Labs',
      description: 'Safety technology for industry professionals. Language models, computer vision, and machine learning for Commercial Diving, Aviation, and Emergency Response.',
      // url: 'https://melonlabs.ai',
      url: 'https://divemelon.com',
      github: 'https://github.com/newagemob',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js', 'Express', 'Railway', 'Vercel', 'Python', 'Tensorflow']
    },
    {
      name: 'Liquid',
      description: 'Finance tool allowing you to liquidate gift cards into cash.',
      url: 'https://liquid.cards',
      github: '',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js', 'Express', 'Railway', 'Vercel', 'Stripe', 'Plaid']
    },
    {
      name: 'MidJournal',
      description: '🔮 A notebook app that trains AI models based on your writing.',
      url: 'https://midjournal.com',
      github: '',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js', 'Express', 'Railway', 'Vercel', 'OpenAI', 'GPT-3.5']
    },
    {
      name: 'Potted Plant Studio',
      description: 'Development site, blog, and marketplace for Potted Plant assets.',
      url: 'https://pottedplant.dev',
      github: '',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js', 'Express', 'Railway', 'Vercel']
    },
  ]

  const handleCommand = (command: string) => {
    switch (command) {
      case 'help':
        return (
          <>
            <div className='border-t border-b border-blue-500 pt-2 pb-4 my-2'>
              {commands.map((command: any, index: any) => (
                <span key={index} id='command' className='grid grid-cols-2 gap-x-2 gap-y-4 flex flex-row justify-start pt-2'>
                  <p className='text-yellow-200 font-bold py-2'>
                    {command.name}
                  </p>
                  <p className='text-zinc-200 flex flex-row justify-start border-b border-zinc-200 py-2'>
                    {command.description}
                  </p>
                </span>
              ))}
            </div>
          </>
        )
      case 'cd':
        return ''
      case 'ls':
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-yellow-200 font-bold'>ls</p>
              <p className='text-zinc-200 flex flex-row justify-start'>All projects will be treated as directories. To explore a project, type cd [project name]. To view all projects, type ls.</p>
            </span>

            <div className='border-t-2 border-b-2 border-emerald-500 pt-2 pb-4 my-2'>
              {/* loop through projects and display them */}
              {projects.map((project: any, index: any) => (
                <span key={index} id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
                  <a className='text-violet-200 hover:text-emerald-300 font-bold py-2' href={project.url} target='_blank' rel='noreferrer'>
                    {project.name}
                  </a>
                  <p className='text-orange-200 flex flex-row justify-start border-b border-zinc-200 py-2'>
                    {project.description}
                  </p>
                </span>
              ))}
            </div>
          </>
        )
      case 'contact':
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-yellow-200 font-bold'>contact</p>
              <p className='text-orange-200 flex flex-row justify-start italic'>name &amp; email</p>
            </span>

            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4 pt-2'>
              <p className='text-blue-300 font-bold'>name</p>
              <p className='text-emerald-200 flex flex-row justify-start font-bold'>Isaiah M. Wright</p>
            </span>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-emerald-200 font-bold'>email</p>
              <button
                type='button'
                className={copied ? 'text-emerald-400 flex flex-row justify-start' : 'text-emerald-200 flex flex-row justify-start font-bold'}
                onClick={(e) => {
                  handleCopy('isaiah@pottedplant.dev')
                  setCopied(true)
                  setTimeout(() => {
                    setCopied(false)
                  }, 3000)
                }}
              >
                isaiah@pottedplant.dev
              </button>
            </span>

            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-emerald-200 font-bold' />
              <button
                className={copied ? 'text-emerald-400 flex flex-row justify-start' : 'text-amber-400 flex flex-row justify-start font-bold'}
                onClick={(e) => {
                  handleCopy('isaiah@pottedplant.dev')
                  setCopied(true)
                  setTimeout(() => {
                    setCopied(false)
                  }, 3000)
                }}
              >
                {copied ? 'copied!' : 'click to copy'}
              </button>
            </span>
          </>
        )
      case 'isaiah@pottedplant.dev':
        // open email client in new tab
        setTimeout(() => {
          window.open('mailto:isaiah@pottedplant.dev')
        }, 1000)
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-rose-500 font-bold'>Sending email to...</p>
              <p className='text-emerald-200 flex flex-row justify-start font-bold'>
                📨 isaiah@pottedplant.dev
              </p>
            </span>
          </>
        )
      case 'github':
        // open github in new tab
        setTimeout(() => {
          window.open('https://github.com/newagemob')
        }, 1000)
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-rose-500 font-bold'>Opening github...</p>
              <p className='text-emerald-200 flex flex-row justify-start font-bold'>
                🌱 newagemob
              </p>
            </span>
          </>
        )
      case 'linkedin':
        // open linkedin in new tab
        setTimeout(() => {
          window.open('https://www.linkedin.com/in/isaiah-wright-25b621124/')
        }, 1000)
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-rose-500 font-bold'>Opening linkedin...</p>
              <p className='text-emerald-200 flex flex-row justify-start font-bold'>
                🌱 Isaiah Wright
              </p>
            </span>
          </>
        )
      default:
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-rose-500 font-bold'>{command}</p>
              <p className='text-red-400 flex flex-row justify-start'>command not found</p>
            </span>
          </>
        )
    }
  }

  return { handleCommand, commands } 
}

export default Commands
