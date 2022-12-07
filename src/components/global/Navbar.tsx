import Link from 'next/link'
import React, { useCallback, useState } from 'react'

const Navbar = () => {
  const navTabs = ['Home', 'Development', 'Research', 'Games']
  const navUrls = ['/', '/development', '/research', '/games']
  // active tab
  const [activeTab, setActiveTab] = useState(navTabs[0])

  // handle page navigation
  const handlePageNavigation = (tab: string) => {
    console.log(tab)
    setActiveTab(tab)
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
