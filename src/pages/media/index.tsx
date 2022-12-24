// Media Landing: this will be the only place where purchases can be made. We will start by implenting the ability to purchase a single image (PNG or SVG sticker) or video (GIF or MP4). Later we will add the ability to purchase a collection of images or videos. 

import { NextPage } from 'next'
import React, { useState } from 'react'

const Media: NextPage = () => {
  const tabs = ['Stickers', 'GIFs']
  const [tab, setTab] = useState('stickers')

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl'>
            Stickers
          </h1>
        </div>
      </div>

      <section className='page-title-container'>
        <h1 className='page-title'>
          Media
        </h1>

        <div className='dev-navbar'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className='dev-tab'
              onClick={() => setTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>
    </>
  )
}

export default Media
