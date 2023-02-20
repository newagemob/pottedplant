import { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Admin: NextPage = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className='flex flex-col items-center justify-center min-w-[100vw] min-h-[100vh] p-4 space-y-4 border border-gray-300 rounded-md md:w-1/3 lg:w-1/4'>
      <h1 className='text-4xl text-black'>
        Admin
      </h1>
      {session?.user?.id ? (
        <>
        <button
          className='px-4 py-2 text-white bg-blue-500 rounded-md'
          onClick={() => signOut()}
        >
          Sign Out
        </button>

        <div className='flex flex-col items-center justify-center w-full'>
          <h2 className='text-xl font-medium text-gray-900'>
            {session.user.name}
          </h2>
          <p className='text-sm text-gray-500'>
            {session.user.email}
          </p>
        </div>

        {/* link to create new media */}
        <Link href='/media/create'>
          <button
            className='px-4 py-2 text-white bg-blue-500 rounded-md'
          >
            Create New Media
          </button>
        </Link>
        </>
      ) : (
        <button
          className='px-4 py-2 text-white bg-blue-500 rounded-md'
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  )
}

export default Admin
