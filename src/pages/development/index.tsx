// Development Page: Page with tabs for [Projects, GitHub, Resume, Contact]

import { NextPage } from 'next'
import React, { useState } from 'react'
import { Projects, GitHub, Contact } from '../../components'


const Development: NextPage = () => {
  const tabs = ['Projects', 'GitHub', 'Contact']
  const [tab, setTab] = useState('projects')

  const renderTab = () => {
    switch (tab) {
      case 'Projects':
        return <Projects />
      case 'GitHub':
        return <GitHub />
      // case 'resume':
      //   return <Resume />
      case 'Contact':
        return <Contact />
      default:
        return <Projects />
    }
  }

  // if tab is selected, add underline to text
  const handleTabChange = (tab: string) => {
    // once tab is selected, scroll to section with className 'dev-container'
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }

    setTab(tab)
  }

  return (
    <>
      <div className='bg-gradient-to-r from-zinc-100 to-zinc-200 min-w-[100vw] min-h-[100vh]'>
        <section className='page-title-container'>
          <h1 className='page-title'>
            Development Portfolio
          </h1>

          <div className='dev-navbar'>
            {tabs.map((tab) => (
              <button
                key={tab}
                className='dev-tab'
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        <section className='dev-container'>
          {renderTab()}
        </section>
      </div>
    </>
  )
}

export default Development
