import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { trpc } from '../../utils/trpc'

const GifsTab = () => {
  const { data: gifs } = trpc.media.getAllGifs.useQuery()
  const [gifImageSources, setGifImageSources] = React.useState<any>([])

  React.useEffect(() => {
    gifs?.map((gif: any) => {
      setGifImageSources((prev: any) => [...prev, gif.image])
    })
  }, [gifs])

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full p-4'>
        <div className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-3'>
          {gifs?.map((media, index: any) => (
            <Link href={`/media/item/${media.id}`} key={media.id}>
              <div
                key={media.id}
                className='flex flex-col items-center justify-center min-w-[100%] min-h-[100%] p-4 space-y-4 border border-gray-300 rounded-md'
              >
                <Image
                  className='object-cover w-full h-full rounded-md'
                  src={gifImageSources[index]}
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

export default GifsTab
