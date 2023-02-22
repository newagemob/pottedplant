// A blog-style page for all of my research -- movies, software, infrastructure, crypto, etc.
// All research collections should be stored in a database, the page should be generated dynamically, the user should be able to filter by category & date, and the user should be able to download the research as a PDF.
// All dynamically generated pages should use react-pdf to generate a PDF of the page.

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

const rightBlobPaths = [
  'M0 486.7C-99.3 482.2 -198.6 477.6 -243.4 421.5C-288.2 365.5 -278.6 257.8 -310 179C-341.5 100.2 -414.1 50.1 -486.7 0L0 0Z',
  'M0 486.7C-55.9 424.3 -111.9 361.8 -190 329.1C-268.1 296.3 -368.4 293.3 -421.5 243.4C-474.7 193.5 -480.7 96.7 -486.7 0L0 0Z',
]
const leftBlobPaths = [
  'M0 -486.7C80.7 -467.3 161.5 -447.8 236.5 -409.6C311.5 -371.5 380.8 -314.8 421.5 -243.4C462.3 -172 474.5 -86 486.7 0L0 0Z',
  'M0 -486.7C104.1 -485 208.3 -483.2 243.4 -421.5C278.5 -359.9 244.6 -238.2 273.7 -158C302.7 -77.8 394.7 -38.9 486.7 0L0 0Z'
]


const Research: NextPage = () => {
  const router = useRouter()
  const [blobIndex, setBlobIndex] = useState(0)
  const rightBlobProps = useSpring({
    from: { d: rightBlobPaths[0] },
    to: { d: rightBlobPaths[1] },
    config: {
      duration: 10000,
      easing: t => t,
    },
    // loop the animation, but reverse it back to the original path first
    loop: {
      reverse: true
    },
    // when the animation is done, reset the blob index
    onRest: () => setBlobIndex(0)
  })
  const leftBlobProps = useSpring({
    from: { d: leftBlobPaths[0] },
    to: { d: leftBlobPaths[1] },
    config: {
      duration: 10000,
      easing: t => t,
    },
    loop: {
      reverse: true
    },
    // when the animation is done, reset the blob index
    onRest: () => setBlobIndex(0)
  })

  return (
    <>
      <main className='flex flex-col justify-center items-center min-w-[100vw] min-h-[100vh] bg-transparent px-4 overflow-hidden'>
        {/* path for svg background, animated with kute.js */}
        <animated.div className='absolute top-0 left-0 z-[-1] bg-rose-700 min-w-100vw min-h-100vh'>
          <animated.svg
            id="visual"
            viewBox="0 0 900 600"
            height="100vh"
            width="100vw"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
          >
            <animated.g transform="translate(900, 0)">
              <animated.path id="bg-blob-01" d={rightBlobProps.d} fill="#1d4ed8"></animated.path>
            </animated.g>
            <animated.g transform="translate(0, 600)">
              <animated.path id="bg-blob-03" d={leftBlobProps.d} fill="#134e4a"></animated.path>
            </animated.g>

            <animated.g transform="translate(900, 0)">
              <animated.path id="bg-blob-02" d={rightBlobProps.d} fill="#1d4ed8"></animated.path>
            </animated.g>
            <animated.g transform="translate(0, 600)">
              <animated.path id="bg-blob-04" d={leftBlobProps.d} fill="#134e4a"></animated.path>
            </animated.g>
          </animated.svg>
        </animated.div>

        <div className='flex flex-col justify-center items-center'>
          <button
            className='flex flex-col md:flex-row justify-between items-center rounded-sm bg-gray-100 p-4 mx-4 my-4 w-full max-w-2xl bg-gradient-to-r from-slate-200 to-slate-300 hover:bg-gradient-to-l hover:from-teal-900 hover:to-emerald-900 hover:via-emerald-800 transition transition-colors md:py-4 text-zinc-700 hover:text-zinc-100 hover:scale-105'
            onClick={() => { router.push('/research/blog') }}
          >
            <span className='text-decoration-none border-none rounded-md px-0 md:px-2 pb-6 md:py-0 w-full text-2xl text-left'>
              blog
            </span>
            <span className='text-decoration-none border-none rounded-md px-0 md:px-2 pb-6 md:py-0 w-full text-2xl text-left'>
              ✏️
            </span>

            <span className='flex flex-col justify-center'>
              <p className='text-xl text-left'>
                A personal blog where I ramble about my research for my companies, practice putting my thoughts into words, and leave a digital trail for my kids to follow one day.
              </p>
            </span>
          </button>

          {/* TODO: Fix weird overflow-y issue on mobile for bottom button */}
          <button
            className='flex flex-col md:flex-row justify-between items-center rounded-sm bg-gray-100 p-4 mx-4 my-4 w-full px-4 max-w-2xl bg-gradient-to-r from-slate-200 to-slate-300 hover:bg-gradient-to-l hover:from-rose-900 hover:to-red-900 hover:via-rose-800 transition transition-colors md:py-4 text-zinc-700 hover:text-zinc-100 hover:scale-105'
            onClick={() => { router.push('/research/courses') }}
          >
            <span className='text-decoration-none border-none rounded-md px-0 md:px-2 pb-6 md:py-0 w-full text-2xl text-left'>
              courses
            </span>
            <span className='text-decoration-none border-none rounded-md px-0 md:px-2 pb-6 md:py-0 w-full text-2xl text-left'>
              📚
            </span>

            <span className='flex flex-col justify-center'>
              <p className='text-xl text-left'>
                An all-in-one landing page for crash courses, tutorials, guides, quick references, and other educational resources for programming languages, libraries, frameworks, operating systems, tools, and more.
              </p>
            </span>
          </button>
        </div>
      </main>
    </>
  )
}

export default Research
