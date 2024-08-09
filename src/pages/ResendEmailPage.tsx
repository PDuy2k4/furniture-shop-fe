import React from 'react'
import { Link } from 'react-router-dom'

export default function ResendEmailPage() {
  return (
    <div className='body-container'>
      <div className='flex flex-col gap-4 mt-auto h-screen justify-center caret-transparent'>
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
      </div>
    </div>
  )
}
