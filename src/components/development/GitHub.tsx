import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Loading } from '../'

const GitHub = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        {isLoading && <Loading />}

        <GitHubCalendar
          username='newagemob'
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          // set isLoading to false when calendar is loaded
        />


      </div>
    </>
  )
}

export default GitHub
