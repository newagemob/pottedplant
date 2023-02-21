import { NextPage, GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import { trpc } from '../../../utils/trpc'
import { getSession, signIn } from 'next-auth/react'
import Image from 'next/image'

const Create: NextPage = () => {
  const [mediaType, setMediaType] = useState('sticker')
  const handleMediaTypeChange = (type: string) => {
    setMediaType(type)
  }

  const [name, setName]: [string, React.Dispatch<React.SetStateAction<any>>] = useState('')
  const [description, setDescription]: [any, React.Dispatch<React.SetStateAction<any>>] = useState('')
  const [image, setImage]: [any, React.Dispatch<React.SetStateAction<any>>] = useState('')
  const [price, setPrice]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)

  useEffect(() => {
    // check if image is more than 4mb
    const imageFileSize = image.size / 1024 / 1024
    console.log(imageFileSize)
    // if so, display error message
    if (imageFileSize > 4) {
      console.log('Image is too large')
      setImage('')
    }
  }, [image])

  const { mutate: createSticker } = trpc.media.createSticker.useMutation()
  const { mutate: createGif } = trpc.media.createGif.useMutation()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      if (mediaType === 'sticker') {
        const sticker = createSticker({
          name: name,
          description: description,
          image: reader.result as string,
          price: Number(price)
        })
      } else if (mediaType === 'gif') {
        const gif = createGif({
          name: name,
          description: description,
          image: reader.result as string,
          price: Number(price)
        })
      }
    }
    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
  }

  return (
    // User should be able to post a new media item here. Allow them to select a type (sticker, gif) from a dropdown, and then allow them to upload an image. The image should be converted to a base64 string and sent to the server. The server should then save the image to the database and return the media item page to the client. The client should then redirect to the media item page.
    // if mediaType === 'sticker' then render a file input accepting only .png and .svg files, gif input accepting only .gif files
    <>
      <div className='flex flex-row items-center justify-start w-full h-full p-4 md:mt-20'>
        <h1 className='text-4xl text-zinc-500'>
          Create Media
        </h1>
      </div>

      <div className='flex flex-wrap justify-center w-full mt-4'>
        <div
          className='flex flex-col items-center justify-center min-w-[100vw] min-h-[100vh] p-4 space-y-4'
        >
          <div className='flex flex-row items-center justify-center w-full space-x-4'>
            <select
              className='border border-gray-300 rounded-md'
              onChange={(e) => handleMediaTypeChange(e.target.value.toLowerCase())}
            >
              <option value='sticker'>Sticker</option>
              <option value='gif'>Gif</option>
            </select>

            <label htmlFor='file' className='border border-gray-300 rounded-md cursor-pointer px-4 hover:bg-indigo-200 hover:text-zinc-600'>
              <input
                type='file'
                accept={mediaType === 'sticker' ? '.png, .svg' : '.gif'}
                id='file'
                className='hidden'
                onChange={(e) => {
                  setImage(e.target.files ? e.target.files[0] : '')
                }}
              />
              upload <span className='text-rose-500'>{mediaType}</span>
            </label>
          </div>

          {/* file input ? file input : image */}
          {image ? (
            // display image from File Type
            <Image src={URL.createObjectURL(image)} alt={name} className='object-cover w-32 h-32 border border-gray-300 rounded-md' />
          ) : (
            <div className='w-32 h-32 border border-gray-300 rounded-md' />
          )}

          <div className='flex flex-col items-center justify-center w-full space-y-4'>
            <input
              type='text'
              placeholder='Title'
              className='border border-gray-300 rounded-md'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Description'
              className='border border-gray-300 rounded-md'
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className='flex flex-row items-center justify-center w-full space-x-4'>
              <span className='text-xl text-emerald-500'>$</span>
              <input
                type='number'
                placeholder='Price'
                className='border border-gray-300 rounded-md'
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <input
              type='submit'
              value='Post'
              disabled={!image}
              className={image ? 'border border-gray-300 rounded-md' : 'border border-gray-300 rounded-md opacity-50'}
              onClick={(e) => {
                handleSubmit(e as any)

                // send image to server
                // redirect to media item page
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Create

// This is an Authorized Route
const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export { getServerSideProps }
