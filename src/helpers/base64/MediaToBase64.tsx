import React, { useEffect, useState } from 'react'

const MediaToBase64 = ({ media }: { media: any }) => {
  const [base64, setBase64]: any = useState(null)

  useEffect(() => {
    const reader = new FileReader()
    reader.readAsDataURL(media)
    reader.onload = () => {
      setBase64(reader.result as string)
    }
    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
  }, [media])

  return base64
}

export default MediaToBase64
