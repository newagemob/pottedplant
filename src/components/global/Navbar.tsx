import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useContext, useRef, useState } from 'react'
import { MdOutlineMediation, MdOutlineMenuOpen, MdClose } from 'react-icons/md'
import { RiPlantLine } from 'react-icons/ri'
import { BiMicrochip, BiNetworkChart } from 'react-icons/bi'

// create a context for global state to be used in the navbar
const NavbarContext = React.createContext({
  activeTab: '🪴 home',
  setActiveTab: (tab: string) => { },
})

const Navbar = () => {
  const router = useRouter()

  const navTabs = [
    <div className='flex flex-fow justify-around items-center'><RiPlantLine /> home</div>,
    <div className='flex flex-fow justify-around items-center'><MdOutlineMediation /> media</div>,
    <div className='flex flex-fow justify-around items-center'><BiMicrochip /> research</div>,
    <div className='flex flex-fow justify-around items-center'><BiNetworkChart /> portfolio</div>
  ]
  const navUrls = ['/', '/media', '/research', '/development']

  const { activeTab, setActiveTab } = useContext(NavbarContext)
  const [isMobile, setIsMobile] = useState(false)
  const [navModal, setNavModal] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      }
      // watch for changes in the window size
      window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      })

      return () => {
        window.removeEventListener('resize', () => { })
      }
    }
  }, [])

  const handlePageNavigation = (tab: string) => {
    setActiveTab(tab)

    if (navModal) {
      setNavModal(false)
    }

    // navigate to the page that corresponds to the tab
    if (typeof window !== 'undefined') {
      const url = navUrls[navTabs.indexOf(tab as any)]
      router.push(url as string)
    }
  }

  // handle escape key press
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setNavModal(false)
    }
  }

  // handle escape key press
  useEffect(() => {
    if (navModal) {
      document.addEventListener('keydown', handleEscape)
    } else {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [navModal])

  const NavObjects = () => {
    return (
      <>
        {navTabs.map((tab, index) => (
          <span
            key={index}
            className={activeTab === tab as any ? 'active' : 'inactive'}
            onClick={() => handlePageNavigation(tab as any)}
          >
            <button
              key={index}
              className={activeTab === tab as any ? 'rounded-sm bg-emerald-500 text-slate-100 w-[10rem] py-1 px-2 hover:bg-emerald-600 hover:scale-105 transition' : 'rounded-sm bg-emerald-600 text-white w-[10rem] py-1 px-2 hover:bg-emerald-500 hover:scale-105 transition'}
            >
              {tab}
            </button>
          </span>
        ))
        }
      </>
    )
  }

  const mobileNavModal = () => {
    return (
      <>
        {navModal && (
          <div className='fixed top-0 right-0 w-full h-full z-50 inset-0 overflow-hidden'>
            {/* put modal in center of screen with inset-0 and a backdrop filter */}
            <div className='fixed inset-0 overflow-hidden flex justify-center items-center backdrop-filter backdrop-blur-sm'>
              <div className='grid grid-cols-1 gap-2 p-2 justify-around'>
                <NavObjects />
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  const mobileNavHamburger = () => {
    return (
      <>
        {/* mobile nav should be hamburger icon that expands to a modal when clicked. The modal should have the same content as the navbar, and when a link is clicked, or the user clicks outside of the modal, the modal should close. */}
        <header className='absolute w-full h-100 px-4 py-0'>
          <div className='flex flex-row justify-end p-2'>
            <button
              onClick={() => setNavModal(!navModal)}
              className='rounded-sm bg-slate-900 text-white p-2 hover:bg-slate-800 hover:scale-105 transition'
            >
              {navModal ? <MdClose /> : <MdOutlineMenuOpen />}
            </button>
          </div>

          {navModal ? mobileNavModal() : null}
        </header>
      </>
    )
  }

  const desktopNav = () => {
    return (
      <header className='fixed top-0 left-0 w-full z-50 w-full py-2 backdrop-filter backdrop-blur-sm'>
        <div className='flex flex-row justify-around'>
          <NavObjects />
        </div>
      </header>
    )
  }

  return (
    <>
      <NavbarContext.Provider value={{ activeTab: activeTab, setActiveTab: handlePageNavigation }}>
        {/* check if the user is on mobile or desktop, and render the correct navbar */}
        {isMobile ? mobileNavHamburger() : desktopNav()}
      </NavbarContext.Provider>
    </>
  )
}

export default Navbar
