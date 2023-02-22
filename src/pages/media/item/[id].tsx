import { maxHeaderSize } from 'http'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Loading } from '../../../components'
import { trpc } from '../../../utils/trpc'

const MediaItem: NextPage = () => {
  const [isLoading, setIsLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)

  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: mediaData } = trpc.media.getMediaItem.useQuery({ id })

  useEffect(() => {
    if (mediaData) {
      setIsLoading(false)
    }
  }, [mediaData])

  return (
    <>
      {isLoading ? <Loading /> : (
        <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] p-4 space-y-4'>
          <div className='flex flex-row items-end justify-around md:justify-between justify-items-between w-full md:w-1/2 lg:w-1/3 mb-4'>
            <h1 className='text-3xl text-slate-700 border-b-2 border-slate-700 font-medium text-left pb-1'>
              {mediaData?.name}
            </h1>

            <span className='text-md text-zinc-500 font-medium pb-1 border-2 border-zinc-400 rounded-md px-2'>
              {/* $ {(mediaData?.price as number / 100).toFixed(2)} */}
              {/* format date as Month Day, Year */}
              {mediaData?.createdAt ? new Date(mediaData?.createdAt).toLocaleDateString() : ''}
            </span>
          </div>

          <Image
            className='object-cover w-100 h-100 rounded-md'
            src={mediaData?.image ? mediaData?.image : 'https://i.ytimg.com/vi/m-IPERwZyCs/maxresdefault.jpg'}
            alt={mediaData?.name as string}
            width={500}
            height={500}
          />
          <div className='flex flex-row items-center justify-start w-full md:w-1/2 lg:w-1/3 border-t-2 border-slate-700'>
            <p className='text-sm text-gray-500 text-left pt-1'>
              {mediaData?.description}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default MediaItem

// This is a dynamic route, so we need to export a function called getStaticPaths
