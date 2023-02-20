import Link from 'next/link'
import React, { useEffect } from 'react'
import { trpc } from '../../utils/trpc'
import Base64ToMedia from '../../helpers/base64/Base64ToMedia'

const StickersTab = () => {
  const { data: stickers } = trpc.media.getAllStickers.useQuery()
  const [stickerImageSources, setStickerImageSources] = React.useState<any>([])

  useEffect(() => {
    stickers?.map((sticker: any) => {
      setStickerImageSources((prev: any) => [...prev, sticker.image])
    })
  }, [stickers])

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full p-4'>
        <h1 className='text-4xl text-black'>
          stickers
        </h1>

        <div className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-3'>
          {stickers?.map((media, index: any) => (
            <Link href={`/media/item/${media.id}`} key={media.id}>
              <div
                key={media.id}
                className='flex flex-col items-center justify-around min-w-[100%] min-h-[100%] p-4 space-y-4 border border-gray-300 rounded-md'
              >
                <img
                  className='object-cover w-full h-full rounded-md justify-items-start'
                  src={stickerImageSources[index]}
                  alt={media.name}
                  onContextMenu={(e) => {
                    e.preventDefault()
                    return false
                  }}
                />
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
