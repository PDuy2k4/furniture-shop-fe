import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
export default function HomePage(props: any) {
  const nav = useNavigate()
  const user = useSelector((state: any) => state.user)
  useEffect(() => {
    if (!user._id) {
      nav('/login')
    }
  }, [user])

  return (
    <>
      {user?.verify === 0 && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center flex-col gap-3'>
          <div>please verify your email</div>
          <Link
            to={`/resendEmail/${user._id}`}
            className='bg-[#B88E2F] rounded-md caret-transparent font-semibold text-white py-5 transition-all hover:bg-[#e1b34a]'
          >
            Validate email
          </Link>
        </div>
      )}
      <div>welcome {user?.name}</div>
    </>
  )
}
