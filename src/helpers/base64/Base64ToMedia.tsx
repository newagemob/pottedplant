import React, { useState } from 'react'

const Base64ToMedia = ({ base64 }: { base64: string }) => {
  const [media, setMedia]: any = useState(null)

  React.useEffect(() => {
    const image = new Image()
    image.src = base64
    image.onload = () => {
      setMedia(image)
    }
  }, [base64])

  return media
}

export default Base64ToMedia
