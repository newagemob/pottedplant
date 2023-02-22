import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MediaTabProps {
  name: string
  media: {
    id: string
    name: string
    description: string
    image: string
  }[]
}

const MediaTab = ({ tab }: { tab: MediaTabProps }) => {
  return (
    <>
      <h1 className='text-4xl text-black'>
        {tab.name}
      </h1>

      <div className='flex flex-wrap justify-center w-full mt-4'>
        {tab.media.map((media: any) => (
          <Link href={`/media/${media.id}`} key={media.id}>
            <div
              key={media.id}
              className='flex flex-col items-center justify-center w-1/2 p-4 space-y-4 border border-gray-300 rounded-md md:w-1/3 lg:w-1/4'
            >
              <Image
                className='object-cover w-full h-64 rounded-md'
                src={media.image}
                alt={media.name}
                width={200}
                height={200}
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
    </>
  )
}

export default MediaTab
