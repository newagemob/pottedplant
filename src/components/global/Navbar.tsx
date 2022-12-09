import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const navTabs = ['🪴 home', '🧑‍💻 portfolio', '🔬 research', '👾 media']
  const navUrls = ['/', '/development', '/research', '/media']
  // TODO: get activeTab from global state
  const [activeTab, setActiveTab] = useState('')
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);


  // TODO: set navbar to hidden when scrolling down, show when scrolling up
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY && window.scrollY > 0) { // if scroll down, hide the navbar
        setShow(false)

      }
      else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) { // if bottom of page, hide the navbar
        setShow(false)
      } // if top of page, show the navbar
      else if (window.scrollY - lastScrollY > 0 && window.scrollY < 0) {
        setShow(true)
      } else { // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])


  const handlePageNavigation = (tab: string) => {
    console.log(tab)
    setActiveTab(tab)
  }

  return (
    <header className={show ? 'global-navbar' : 'global-navbar-hidden'}>
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
    </header>
  )
}

export default Navbar
