import React, { useLayoutEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import http from '~/Api/http'
export default function ResendEmailPage() {
  const { id } = useParams<{ id: string }>()
  const [sending, setSending] = useState(true)
  const [random, setRandom] = useState(0)
  useLayoutEffect(() => {
    const resendEmail = async () => {
      try {
        const response = await http.post('/auth/sendVerifiedEmail', { _id: id })
        if (response.status === 201) {
          setSending(false)
          console.log('Email Sent')
        }
      } catch (error) {
        setSending(false)
        console.log(error)
      }
    }
    resendEmail()
  }, [random, id])
  return (
    <div className='body-container'>
      <div className='flex flex-col gap-4 mt-auto h-screen justify-center caret-transparent'>
        {sending ? (
          <div className='flex flex-col gap-3 justify-center items-center'>
            <div className='text-[#B88E2F] max-w-[400px] max-h-[400px]'>
              <CircularProgress color='inherit' />
            </div>
            <h2 className='text-2xl font-bold text-center text-[#B88E2F]'>Sending Email . . .</h2>
          </div>
        ) : (
          <>
            <h1 className='text-4xl font-bold text-center text-[#B88E2F]'>
              A Verification Email has been sent to your email
            </h1>
            <div className='flex flex-col items-center gap-4'>
              <p className='opacity-70 text-center'>
                Please check your inbox or spam folder to verify your email. If you do not see the verification email,
                kindly click the
                <label className='mx-2 cursor-pointer font-bold text-[#B88E2F]' htmlFor='buttonResend'>
                  Resend Email
                </label>
                button below.
              </p>
              <button
                onClick={() => {
                  setSending(true)
                  setRandom(Math.random())
                }}
                id='buttonResend'
                className='text-white font-semibold px-4 py-3 rounded-md bg-[#B88E2F] hover:bg-[#dcaf44]'
              >
                Resend Verification Email
              </button>
              <div className='flex gap-1 items-center justify-center mt-3'>
                <span>Already have an Email?</span>
                <Link to='/login' className='text-[#B88E2F] hover:text-[#e1b34a]'>
                  Login
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
