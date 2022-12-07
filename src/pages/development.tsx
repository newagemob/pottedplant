// Development Page: Page with tabs for [Projects, GitHub, Resume, Contact]

import { NextPage } from 'next'
import React, { useState } from 'react'
import { Projects, GitHub, Resume, Contact } from '../components'


const Development: NextPage = () => {
  const tabs = ['Projects', 'GitHub', 'Resume', 'Contact']
  const [tab, setTab] = useState('projects')

  const renderTab = () => {
    switch (tab) {
      case 'projects':
        return <Projects />
      case 'github':
        return <GitHub />
      case 'resume':
        return <Resume />
      case 'contact':
        return <Contact />
      default:
        return <Projects />
    }
  }

  // if tab is selected, add underline to text
  // if tab is selected, render tab component
  const handleTabChange = (tab: string) => {
    setTab(tab.toLowerCase())
  }

  return (
    <>
      <div className='page-title-container'>
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
      </div>

      <div className='dev-container'>
        {renderTab()}
      </div>
    </>
  )
}

export default Development
