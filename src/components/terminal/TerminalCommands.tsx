import React, { useEffect, useState } from 'react'
import { useCopy } from '../../hooks'
import { CgTerminal } from 'react-icons/cg'
import { RxEnter } from 'react-icons/rx'

const TerminalCommands = () => {
  const { handleCopy } = useCopy()
  const [copied, setCopied] = useState(false)

  const banner = [
    `Potted Plant (🪴) Development | All Rights Reserved`,
  ]

  const commands = [
    {
      name: 'help',
      description: 'List all commands'
    },
    {
      name: 'cd',
      description: 'Change directory to [project name]'
    },
    {
      name: 'ls',
      description: 'List directory contents [all projects]',
    },
    {
      name: 'projects',
      description: 'All projects will be treated as directories. To explore a project, type cd [project name]. To view all projects, type ls.'
    },
    {
      name: 'whoami',
      description: 'Display name and contact information'
    },
    {
      name: 'clear',
      description: 'Clear the terminal'
    },
  ]

  const projects = [
    {
      name: 'Melon Labs',
      description: 'Safety technology for industry professionals. Language models, computer vision, and machine learning for Commercial Diving, Aviation, and Emergency Response.',
      url: 'https://melonlabs.ai',
      github: '',
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

  const [currentCommandOutput, setCurrentCommandOutput] = useState<any>(commands.map((command, index) => (
    <div key={index} id='command' className='grid grid-cols-2 gap-x-2 gap-y-4 flex flex-row justify-start pt-2'>
      <p className='text-yellow-200 font-bold'>{command.name}</p>
      <p className='text-zinc-200 flex flex-row justify-start'>{command.description}</p>
    </div>
  )))

  const [commandHistory, setCommandHistory] = useState<string[]>([currentCommandOutput])

  const handleCommand = (command: string) => {
    switch (command) {
      case 'help':
        return commands.map((command) => (
          <span key={command.name} id='command' className='grid grid-cols-2 gap-x-2 gap-y-4 flex flex-row justify-start pt-2'>
            <p className='text-yellow-200 font-bold'>{command.name}</p>
            <p className='text-zinc-200 flex flex-row justify-start'>{command.description}</p>
          </span>
        ))
      case 'cd':
        return 'cd [project name]'
      case 'ls':
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-yellow-200 font-bold'>ls</p>
              <p className='text-zinc-200 flex flex-row justify-start'>View all projects -- usage: &nbsp;
                <span className='text-yellow-200 font-bold'>ls</span>
                &nbsp; or &nbsp;
                <span className='text-yellow-200 font-bold'> ls [project name]</span>
              </p>
            </span>
          </>
        )
      case 'projects':
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-yellow-200 font-bold'>projects</p>
              <p className='text-zinc-200 flex flex-row justify-start'>All projects will be treated as directories. To explore a project, type &nbsp;
                <span className='text-yellow-200 font-bold'>cd [project name]</span>
                &nbsp; To view all projects, type &nbsp;
                <span className='text-yellow-200 font-bold'>ls</span>
              </p>
            </span>
          </>
        )
      case 'whoami':
        return (
          <>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-yellow-200 font-bold'>whoami</p>
              <p className='text-orange-200 flex flex-row justify-start italic'>name &amp; email</p>
            </span>
            <span id='command' className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <p className='text-emerald-200 font-bold'>name</p>
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
      case 'clear':
        setCommandHistory([]) // TODO: figure out why this doesn't work
        return ''
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

  return (
    <>
      {/* put div in center of screen */}
      <div className='flex flex-col justify-center items-center w-full h-screen px-2 font-mono'>
        {/* terminal header -- title and help commands listed */}
        <div className='flex flex-col justify-start justify-items-start w-full h-32 p-4 mt-8 md:mt-16 bg-gray-100 rounded-md shadow-md'>
          <h1 className='text-2xl font-bold'>

            {/* banner */}
            {banner.map((line) => (
              <div key={line}>
                {/* eslint-disable-next-line react/no-danger */}
                <span
                  className='text-emerald-600 text-xs'
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </div>
            ))}

          </h1>
          <p className='text-sm italic'>Type <span className='text-indigo-700 font-bold'>help</span> to view all commands.</p>
        </div>

        {/* terminal */}
        <div className='flex flex-col justify-center items-center w-full h-full p-2 my-6 bg-slate-700 rounded-md shadow-md overflow-y-auto'>
          {/* command output */}
          <div className='flex flex-col justify-end justify-items-end w-full h-full p-4 text-zinc-100 bg-transparent border-none outline-none break-words overflow-y-auto'>
            {/* if there is a command history, display it in descending order, exclude the current command so it doesn't get displayed twice */}
            {commandHistory.map((command, index) => (
              <div key={index} id='command' className='my-2'>
                {command}
              </div>
            ))}
            {/* {currentCommandOutput} */}
          </div>
        </div>
        {/* command input */}
        <div className='flex flex-row justify-center items-center w-full h-12 p-4 pb-6 mb-6 bg-zinc-800 rounded-md'>
          <span className='text-2xl text-emerald-600'><CgTerminal /></span>
          <input
            className='w-full h-full p-4 text-2xl text-zinc-100 bg-transparent border-none outline-none cursor-text-2xl'
            // make cursor thick
            style={{ caretColor: 'transparent' }}
            type='text'
            ref={(input) => {
              input?.focus()
            }}
            placeholder='_'
            id='terminal-input'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const command = e.currentTarget.value
                const commandOutput = handleCommand(command)
                setCommandHistory([...commandHistory, commandOutput as string])
                e.currentTarget.value = ''
              }
            }}
          />
          <button
            className='flex justify-center items-center w-12 h-12 p-4 bg-transparent border-none outline-none'
            onClick={() => {
              const command = document.getElementById('terminal-input') as HTMLInputElement
              const commandOutput = handleCommand(command.value)
              setCommandHistory([...commandHistory, commandOutput as string])
            }}
          >
            <span className='text-2xl text-zinc-400'><RxEnter /></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default TerminalCommands
