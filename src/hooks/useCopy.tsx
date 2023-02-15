import React, { useState } from 'react'

const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')

  const handleCopy = (item: any) => {
    navigator.clipboard.writeText(item)
    setIsCopied(true)
    setCopyMessage(item)
    setTimeout(() => {
      setIsCopied(false)
      setCopyMessage('')
    }, 3000)
  }

  return { copyMessage, handleCopy }
}

export default useCopy

/* include this to your component to display the copied message

{copyMessage ? <div id='copy-message'>📋 Copied &nbsp; <p id='copy-message-highlight'>{copyMessage}</p> &nbsp; to clipboard!</div> : null}

*/
