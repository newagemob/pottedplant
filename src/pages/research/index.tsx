// A blog-style page for all of my research -- movies, software, infrastructure, crypto, etc.
// All research collections should be stored in a database, the page should be generated dynamically, the user should be able to filter by category & date, and the user should be able to download the research as a PDF.
// All dynamically generated pages should use react-pdf to generate a PDF of the page.

import { NextPage } from 'next'
import React from 'react'

const Research: NextPage = () => {
  return (
    <>
      <section id='research-blog-button' className='flex justify-center items-center h-screen'>
        <a href='/research/blog'>
          <button>
            📝 blog
          </button>
        </a>
      
        <a href='/research/agriculture'>
          <button>
            🍅 agriculture
          </button>
        </a>
      
        <a href='/research/mycology'>
          <button>
            🍄 mycology
          </button>
        </a>
      </section>

    </>
  )
}

export default Research

