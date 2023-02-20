// Media Landing: this will be the only place where purchases can be made. We will start by implenting the ability to purchase a single image (PNG or SVG sticker) or video (GIF or MP4). Later we will add the ability to purchase a collection of images or videos. 

import { NextPage } from 'next'
import React, { useState } from 'react'
import GifsTab from '../../components/media/GifsTab'
import StickersTab from '../../components/media/StickersTab'

const Media: NextPage = () => {
  const tabs = ['Stickers', 'GIFs']
  const [activeTab, setActiveTab] = useState('stickers')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'stickers':
        return <StickersTab />
      case 'gifs':
        return <GifsTab />
      default:
        return <StickersTab />
    }
  }


  return (
    <>
      <section className='flex flex-col items-center justify-around min-w-[100vw] min-h-[100vh] overflow-hidden bg-gray-100'>
        <div className='flex-col items-center justify-center w-full h-full'>
          <h1 className='page-title text-4xl text-gray-500 flex items-center justify-center w-full h-12 mt-4 text-center'>
            Media
          </h1>

          <div className='flex items-center justify-around w-auto h-auto py-2 mx-2 mt-4 space-x-4 rounded-sm bg-gradient-to-r from-zinc-100 to-zinc-100 via-zinc-50'>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab.toLowerCase() ? 'px-4 py-2 text-sm font-medium text-white bg-slate-700 border border-transparent rounded-md hover:bg-slate-600 focus:outline-none focus:ring-0 ring-offset-2 ring-slate-500 ring-offset-emerald-100' : 'px-4 py-2 text-sm font-medium text-zinc-800 bg-zinc-300 border border-transparent rounded-md hover:bg-slate-500 hover:text-zinc-200 focus:outline-none focus:ring-0 ring-offset-2 ring-zinc-500 ring-offset-emerald-100'}
                onClick={() => handleTabChange(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-full h-1/3'>
          {renderTab()}
        </div>
      </section>
    </>
  )
}

export default Media
