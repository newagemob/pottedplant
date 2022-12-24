// A blog-style page for all of my research -- movies, software, infrastructure, crypto, etc.
// All research collections should be stored in a database, the page should be generated dynamically, the user should be able to filter by category & date, and the user should be able to download the research as a PDF.
// All dynamically generated pages should use react-pdf to generate a PDF of the page.

import { NextPage } from 'next'
import React from 'react'

const Research: NextPage = () => {
  return (
    <>
      <div>
        <div id='research-blog-button' className='flex justify-center items-center'>
          <a href='/research/courses'>
            <button>
              📚 courses
            </button>
          </a>

          <p className='text-2xl'>
            An all-in-one landing page for crash courses, tutorials, guides, quick references, and other educational resources for programming languages, libraries, frameworks, operating systems, tools, and more.
          </p>

          <a href='/research/blog'>
            <button>
              📝 blog
            </button>
          </a>

          <p className='text-2xl'>
            A personal blog where I ramble about my research for my companies, practice putting my thoughts into words, and leave a digital trail for my kids to follow one day.
          </p>

          {/* <a href='/research/agriculture'>
            <button>
              🍅 agriculture
            </button>
          </a>

          <p className='text-2xl'>
            A collection of articles and links about agriculture, farming, and gardening.
          </p>

          <a href='/research/mycology'>
            <button>
              🍄 mycology
            </button>
          </a>

          <p className='text-2xl'>
            A collection of articles and links about growing, cultivating, and consuming mushrooms.
          </p> */}
        </div>
      </div>
    </>
  )
}

export default Research

