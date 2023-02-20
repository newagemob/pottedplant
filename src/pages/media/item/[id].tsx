import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { trpc } from '../../../utils/trpc'

const MediaItem: NextPage = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: mediaData } = trpc.media.getMediaItem.useQuery({ id })

  console.log(`👉 ${JSON.stringify(mediaData)}`)

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full p-4 space-y-4 border border-gray-300 rounded-md'>
        <div className='flex flex-row items-center justify-around w-full'>
          <h1 className='text-4xl text-black'>
            {mediaData?.name}
          </h1>

          <span className='text-2xl text-gray-500'>
            {/* the price returned is in cents. Format it to dollars */}
            {/* ${mediaData?.price as number} */}
            $ {(mediaData?.price as number / 100).toFixed(2)}
          </span>
        </div>

        <img
          className='object-cover w-full h-full rounded-md'
          src={mediaData?.image ? mediaData?.image : 'https://via.placeholder.com/150'}
          alt={mediaData?.name}
        />
        <p className='text-sm text-gray-500'>
          {mediaData?.description}
        </p>
      </div>
    </>
  )
}

export default MediaItem

// This is a dynamic route, so we need to export a function called getStaticPaths
