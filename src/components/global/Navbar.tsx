import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const Navbar = () => {
  const navTabs = ['Home', 'Development', 'Research', 'Games']
  const navUrls = ['/', '/development', '/research', '/games']
  const [activeTab, setActiveTab] = useState(navTabs[0])

  // TODO: make navbar disappear when the user scrolls down and reappear when the user scrolls up

  const handlePageNavigation = (tab: string) => {
    console.log(tab)
    setActiveTab(tab)
    // TODO: get activeTab from global state
  }

  return (
    <div className='global-navbar'>
      <div className='navbar'>
        {navTabs.map((tab) => (
          <button key={tab} id='navbar-tab' onClick={() => handlePageNavigation(tab)} className={activeTab === tab ? 'active' : 'inactive'}>
            {/* navigate to page */}
            <a href={navUrls[navTabs.indexOf(tab)]}>
              {tab}
            </a>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar
