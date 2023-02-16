import React, { useState } from 'react'

const TerminalCommands = () => {
  const banner = [
    `<span className='text-emerald-700'>Potted Plant (🪴) Development | All Rights Reserved</span>`,
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
      name: 'directory',
      description: 'All projects will be treated as directories. To explore a project, type cd [project name]. To view all projects, type ls.'
    },
    {
      name: 'whoami',
      description: 'View my name, email, and phone number'
    },
    {
      name: 'clear',
      description: 'Clear the terminal'
    },
  ]

  const [commandOutput, setCommandOutput] = useState('')

  const handleCommand = (command: string) => {
    switch (command) {
      case 'help':
        return commands.map((command) => (
          <div key={command.name} id='command'>
            <p className='command-name'>{command.name}</p>
            <p className='command-description'>{command.description}</p>
          </div>
        ))
      case 'cd':
        return 'cd [project name]'
      case 'ls':
        return 'ls [all projects]'
      case 'directory':
        return 'All projects will be treated as directories. To explore a project, type cd [project name]. To view all projects, type ls.'
      case 'whoami':
        return `@ Isaiah M. Wright ~ Software Engineer ~ isaiah@pottedplant.dev ~ @pot.tedplant`
      case 'clear':
        return ''
      case '':
        return ''
      default:
        return 'Command not found'
    }
  }

  return (
    <>
      {/* put div in center of screen */}
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        {/* terminal header -- title and help commands listed */}
        <div className='flex flex-col justify-start justify-items-start w-full h-32 p-4 my-6 md:mt-16 bg-gray-100 rounded-md shadow-md'>
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
        <div className='flex flex-col justify-center items-center w-full h-full p-4 my-6 md:mt-16 bg-gray-100 rounded-md shadow-md'>
          {/* command output */}
          <div className='flex flex-col justify-start justify-items-start w-full h-full p-4 overflow-y-auto'>
            {commandOutput}
          </div>
          {/* command input */}
          <div className='flex flex-row justify-center items-center w-full h-12 p-4 bg-gray-200 rounded-md'>
            <span className='text-2xl text-emerald-700'>&gt;&gt;</span>
            <input
              className='w-full h-full p-4 text-2xl text-zinc-600 bg-transparent border-none outline-none'
              type='text'
              ref={(input) => {
                input?.focus()
              }}
              placeholder='Type a command'
              id='terminal-input'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const command = e.currentTarget.value
                  const commandOutput = handleCommand(command)
                  setCommandOutput(commandOutput as string)
                  e.currentTarget.value = ''
                }
              }}
            />
            <button
              className='flex justify-center items-center w-12 h-12 p-4 text-2xl text-gray-400 bg-transparent border-none outline-none'
              onClick={() => {
                const command = document.getElementById('terminal-input') as HTMLInputElement
                const commandOutput = handleCommand(command.value)
                setCommandOutput(commandOutput as string)
              }}
            >
              <span className='text-2xl text-gray-400'>🪴</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TerminalCommands
