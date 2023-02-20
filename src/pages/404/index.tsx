import { NextPage } from 'next'
import React from 'react'

const ErrorPage: NextPage = () => {
  // TODO: create useRandomGif hook to get ten random gifs from giphy api with given search term (based on failed url path)
  const errorGifs = ['https://media3.giphy.com/media/WndRjqGHeKSYg/giphy.gif?cid=ecf05e470ih8gcotu0l7sck8enw78f4el0zur3syeupb1gek&rid=giphy.gif&ct=g', 'https://media4.giphy.com/media/MTghKxBMi91qo/giphy.gif?cid=ecf05e47n4306at7dw9l4e1qdn5ohc2xkx0mi7c5czwa5b8t&rid=giphy.gif&ct=g', 'https://media2.giphy.com/media/pwgwO5c3K0Q92/giphy.gif?cid=ecf05e47cb0gmtg9glacnsu5eapxcz7tupe5ictj2jm7w0g8&rid=giphy.gif&ct=g', 'https://media2.giphy.com/media/KHJw9NRFDMom487qyo/giphy.gif?cid=ecf05e47r7fkrexqv6iyitom5m1iq653waiwkleqsmwhyxmu&rid=giphy.gif&ct=g', 'https://media1.giphy.com/media/lOgzjLU2mmN3VoUG4S/giphy.gif?cid=ecf05e47tok9f0x40n37ppbrpi0q7fu9kijv1xdrquljimyj&rid=giphy.gif&ct=g', 'https://media3.giphy.com/media/WjldrOwZZ3EpW/giphy.gif?cid=790b761165447319916672ecafcc94b2772dc43e6b9b7512&rid=giphy.gif&ct=g']

  // for each error gif, loop through them randomly, play them one after another, and then loop again
  const randomErrorGif = errorGifs[Math.floor(Math.random() * errorGifs.length)]

  return (
    <>
      {/* set div background to image */}
      <div className='flex flex-col items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${randomErrorGif})`, objectFit: 'cover' }}>
        {/* modeled after the Discord settings page */}
        {/* background should be a youtube video fitting object-fit: cover , and video should start at 10:00 */}

        <div className='fixed top-0 left-0 w-full h-full bg-black/20' />

        <div className='flex flex-col items-center justify-center w-100 h-100 rounded-xl bg-red-900/70 backdrop-filter backdrop-blur-lg shadow-2xl px-8 py-4 m-4'>
          <div className='flex flex-row items-center justify-center gap-4 mb-6'>
            <p className='md:text-5xl font-bold text-zinc-400'>4😕4</p>
            <p className='md:text-5xl font-bold text-red-300/70 px-4'>∕</p>
            <p className='md:text-5xl font-bold text-zinc-400'>Page Not Found</p>
          </div>

          <p className='md:text-2xl font-semibold text-zinc-400 text-center'>
            The page you are looking for does not exist 😕
          </p>
        </div>

        {/* home button */}
        <div className='absolute bottom-40 left-0 w-full h-20 flex flex-row items-center justify-center'>
          <a
          // go to previous page
            href='/'
            className='flex flex-row items-center justify-center gap-2 px-10 py-2 rounded-md bg-indigo-700 backdrop-filter backdrop-blur-lg shadow-2xl hover:bg-emerald-700/70'
          >
            <p className='md:text-2xl font-semibold text-zinc-300'>🏃‍♂️ get me outta here</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
