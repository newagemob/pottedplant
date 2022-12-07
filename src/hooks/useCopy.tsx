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
