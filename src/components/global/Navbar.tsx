import Link from 'next/link'
import React, { useEffect, useContext, useRef, useState } from 'react'

// create a context for global state to be used in the navbar
const NavbarContext = React.createContext({
  activeTab: '🪴 home',
  setActiveTab: (tab: string) => { },
})

const Navbar = () => {
  const navTabs = ['🪴 home', '👾 media', '🔬 research', '🧑‍💻 portfolio']
  const navUrls = ['/', '/media', '/research', '/development']
  // get activeTab from navbar context
  const { activeTab, setActiveTab } = useContext(NavbarContext)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log('activeTab', activeTab)


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 0) { // if scroll down, hide the navbar
        setShow(false)

      } // if bottom of page, hide the navbar
      else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShow(false)
      } // if top of page, show the navbar
      else if (window.innerHeight + window.scrollY <= document.body.offsetHeight) {
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
    setActiveTab(tab)
  }


  return (
    <NavbarContext.Provider value={{ activeTab: activeTab, setActiveTab: handlePageNavigation }}>
      <header className={show ? 'global-navbar' : 'global-navbar-hidden'}>
        <div className='navbar'>
          {navTabs.map((tab) => (
            <button key={tab} id='navbar-tab' onClick={() => handlePageNavigation(tab)} className={activeTab === tab ? 'active' : 'inactive'}>
              <a href={navUrls[navTabs.indexOf(tab)]}>
                {tab}
              </a>
            </button>
          ))}
        </div>
      </header>
    </NavbarContext.Provider>
  )
}

export default Navbar
