import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitHub = () => {

  return (
    <>
      <section className='github-title'>
        <a href='https://www.github.com/newagemob' target='_blank' rel='noreferrer'>
          @newagemob
        </a>
      </section>

      <div className='github-calendar'>
        <GitHubCalendar
          username='newagemob'
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </>
  )
}

export default GitHub
