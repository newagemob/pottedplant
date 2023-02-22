import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { trpc } from '../../utils/trpc'
import Loading from '../global/Loading'

const GifsTab = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [gifImageSources, setGifImageSources] = useState<any>([])

  const { data: gifs } = trpc.media.getAllGifs.useQuery()

  useEffect(() => {
    if (gifs) {
      setIsLoading(false)
    }

    gifs?.map((gif: any) => {
      setGifImageSources((prev: any) => [...prev, gif.image])
    })
  }, [gifs])

  return (
    isLoading ? <Loading /> :
      <>
        <div className='flex flex-col items-center justify-center w-full h-full p-4'>
          <div className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-3'>
            {gifs?.map((media, index: any) => (
              <Link href={`/media/item/${media.id}`} key={media.id}>
                <div
                  key={media.id}
                  className='flex flex-col items-center justify-center min-w-[100%] min-h-[100%] p-4 space-y-4 border border-gray-300 rounded-md'
                >
                  {gifImageSources[index] && (
                    <Image
                      className='object-cover w-full h-full rounded-md'
                      src={gifImageSources[index]}
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

export default GifsTab
