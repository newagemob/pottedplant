// A blog-style page for all of my research -- movies, software, infrastructure, crypto, etc.
// All research collections should be stored in a database, the page should be generated dynamically, the user should be able to filter by category & date, and the user should be able to download the research as a PDF.
// All dynamically generated pages should use react-pdf to generate a PDF of the page.

import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Research: NextPage = () => {
  return (
    // put first div in center of page
    <main className='bg-gradient-to-r from-zinc-100 to-zinc-200 min-w-[100vw] min-h-[100vh]'>
      <div className='flex flex-col justify-around items-center w-full h-full'>
        <div className='flex flex-col justify-center items-center w-full h-full p-4 my-6 md:mt-16'>

          <Link
            className='flex flex-row justify-between items-center bg-gray-100 p-4 mx-4 my-4 w-full md:w-3/4 px-4 max-w-2xl'
            href='/research/blog'
          >
            <span className='text-decoration-none border-none rounded-md px-2 py-1 w-full text-zinc-900 hover:text-slate-600 mb-6'>
              <span className='text-2xl text-left px-2'>
                blog ✏️
              </ span>
            </span>

            <span className='flex flex-col justify-center'>
              <p className='text-xl text-left text-zinc-900'>
                A personal blog where I ramble about my research for my companies, practice putting my thoughts into words, and leave a digital trail for my kids to follow one day.
              </p>
            </span>
          </Link>

          <div className='flex flex-col justify-center items-center bg-gray-100 p-4 mx-4 my-4 w-full md:w-3/4 mx-auto px-4 max-w-2xl'>
            <a href='/research/courses' className='text-decoration-none border-2 rounded-md px-2 py-1 border-slate-400 hover:bg-slate-600 transition-colors w-full text-zinc-900 hover:text-zinc-200 mb-6'>
              <span className='text-2xl text-left px-2'>
                courses 📚
              </span>
            </a>

            <div className='flex flex-col justify-center'>
              <p className='text-xl text-left text-zinc-900'>
                An all-in-one landing page for crash courses, tutorials, guides, quick references, and other educational resources for programming languages, libraries, frameworks, operating systems, tools, and more.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Research

