import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { trpc } from '../../utils/trpc'
import Base64ToMedia from '../../helpers/base64/Base64ToMedia'
import Image from 'next/image'
import Loading from '../global/Loading'

const StickersTab = () => {
  const [isLoading, setIsLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)
  const [stickerImageSources, setStickerImageSources]: [any, React.Dispatch<React.SetStateAction<any>>] = useState([])

  const { data: stickers } = trpc.media.getAllStickers.useQuery()

  useEffect(() => {
    if (stickers) {
      setIsLoading(false)
    }

    stickers?.map((sticker: any) => {
      setStickerImageSources((prev: any) => [...prev, sticker.image])
    })
  }, [stickers])

  return (
    isLoading ? <Loading /> :
      <>
        <div className='flex flex-col items-center justify-center w-full h-full p-4'>
          <div className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 overflow-y-scroll'>
            {stickers?.map((media, index: any) => (
              <Link href={`/media/item/${media.id}`} key={media.id}>
                <div
                  key={media.id}
                  className='flex flex-col items-center justify-around min-w-[100%] min-h-[100%] p-4 space-y-4 border border-gray-300 rounded-md'
                >
                  {stickerImageSources[index] && (
                    <Image
                      className='object-cover w-full h-full rounded-md justify-items-start'
                      src={stickerImageSources[index]}
                      alt={media.name}
                      width={200}
                      height={200}
                      onContextMenu={(e) => {
                        e.preventDefault()
                        return false
                      }}
                    />
                  )}
                  <div className='flex flex-col items-center justify-center w-full'>
                    <h2 className='text-xl font-medium text-gray-900'>
                      {media.name}
                    </h2>
                    <p className='text-sm text-gray-500'>
                      {media.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
  )
}

export default StickersTab
