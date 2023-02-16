// Development Page: Page with tabs for [Projects, GitHub, Resume, Contact]

import { NextPage } from 'next'
import React, { useState } from 'react'
import { Projects, GitHub, Contact } from '../../components'
import TerminalCommands from '../../components/terminal/TerminalCommands'


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

  const DesktopView = () => {
    return (
      <>
        <TerminalCommands />
      </>
    )
  }

  return (
    <>
      <DesktopView />
    </>
  )
}

export default Development
