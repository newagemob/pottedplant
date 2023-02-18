import React, { useEffect, useState } from 'react'
import { CgTerminal } from 'react-icons/cg'
import { RxEnter } from 'react-icons/rx'
import Commands from './Commands'

const TerminalCommands = () => {
  const banner = [
    `Potted Plant (🪴) Development | All Rights Reserved`,
  ]
 
  const { handleCommand, commands } = Commands()

  const [currentCommandOutput, setCurrentCommandOutput] = useState<any>(commands.map((command, index) => (
    <div key={index} id='command' className='grid grid-cols-2 gap-x-2 gap-y-4 flex flex-row justify-start pt-2'>
      <p className='text-yellow-200 font-bold py-2'>
        {command.name}
      </p>
      <p className='text-zinc-200 flex flex-row justify-start border-b border-zinc-200 py-2'>
        {command.description}
      </p>
    </div>
  )))

  const [commandHistory, setCommandHistory] = useState<string[]>([currentCommandOutput])

  // listen for ctrl + l to clear the terminal
  useEffect(() => {
    const handleClear = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'l') {
        setCurrentCommandOutput([])
        setCommandHistory([])
      }
    }

    window.addEventListener('keydown', handleClear)

    return () => {
      window.removeEventListener('keydown', handleClear)
    }
  }, [])

  // listen for commandHistory change, if so, set the view for id='commmand-history' to the last item in the array
  useEffect(() => {
    const commandHistoryContainer = document.getElementById('command-history')
    if (commandHistoryContainer) {
      commandHistoryContainer.scrollTop = commandHistoryContainer.scrollHeight
    }
  }, [commandHistory])

  

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
        <section className='flex flex-col justify-center items-center w-full h-full p-2 my-6 bg-slate-700 rounded-md shadow-md overflow-hidden'>
          {/* command output */}
          {/* allow scrolling, snap to bottom */}
          <div id='command-history' className='justify-end justify-items-end w-full h-full p-4 text-zinc-100 bg-transparent border-none outline-none break-words overflow-y-auto'>
            {/* if there is a command history, display it in descending order, exclude the current command so it doesn't get displayed twice */}
            {commandHistory.map((command, index) => (
              <div key={index} id='command' className='my-2'>
                {command}
              </div>
            ))}
            {/* {currentCommandOutput} */}
          </div>
        </section>
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
