import React, { useLayoutEffect, useRef } from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import http from '~/Api/http'
import { CircularProgress } from '@mui/material'
export default function VerifiedEmailPage() {
  const [success, setSuccess] = React.useState(true)
  const [message, setMessage] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [registered, setRegistered] = React.useState(false)
  const { token } = useParams<{ token: string }>()
  const hasCalledApi = useRef(false)
  useLayoutEffect(() => {
    if (hasCalledApi.current === false) {
      hasCalledApi.current = true
      return
    }
    const verifyEmail = async () => {
      try {
        const response = await http.post('/auth/verifyEmail', { token })
        setLoading(false)
        if (response.status === 201) {
          setSuccess(true)
          setMessage('Email Verified')
        }
      } catch (error: any) {
        setLoading(false)
        const errMsg = error.response.data.message
        if (errMsg === 'Email is already verified') setRegistered(true)
        setSuccess(false)
        setMessage(errMsg)
      }
    }
    verifyEmail()
  }, [token])
  return (
    <div className=' container mx-auto flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center'>
        {loading ? (
          <div className='flex flex-col gap-3 justify-center items-center'>
            <div className='text-[#B88E2F] max-w-[400px] max-h-[400px]'>
              <CircularProgress color='inherit' />
            </div>
            <h2 className='text-2xl font-bold text-center text-[#B88E2F]'>Sending Email . . .</h2>
          </div>
        ) : success ? (
          <>
            <DoneAllIcon
              sx={{
                fontSize: 170,
                color: '#B88E2F'
              }}
            />
            <h1 className='text-[50px] font-bold text-[#B88E2F]'>{message}</h1>
            <h2 className='text-[20px] opacity-60 font-bold text-center'>Thank you for verifying your email</h2>
            <p className='opacity-50 text-center'>You can now login to your account and start shopping.</p>
            <Link
              to={success || registered ? '/login' : '/register'}
              className='bg-[#B88E2F] rounded-md mt-3 caret-transparent font-semibold text-white py-3 px-5 transition-all hover:bg-[#e1b34a]'
            >
              {success || registered ? 'Go to Login' : 'Go to Sign Up'}
            </Link>
          </>
        ) : (
          <>
            <NewReleasesIcon
              sx={{
                fontSize: 170,
                color: '#B88E2F'
              }}
            />
            <h1 className='text-[50px] font-bold text-[#B88E2F] text-center'>{message}</h1>
            <h2 className='text-[20px] opacity-60 font-bold text-center'>
              {success || registered
                ? 'Your account has been verified, please go to the login page to continue shopping!'
                : 'Your account is not registered yet, please go to the registration page to continue shopping!'}
            </h2>

            <Link
              to={success || registered ? '/login' : '/register'}
              className='bg-[#B88E2F] rounded-md mt-3 caret-transparent font-semibold text-white py-3 px-5 transition-all hover:bg-[#e1b34a]'
            >
              {success || registered ? 'Go to Login' : 'Go to Sign Up'}
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
