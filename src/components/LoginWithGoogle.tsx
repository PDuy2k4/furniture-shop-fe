import React from 'react'
import googleIcon from '../assets/google-icon.svg'
import { Link } from 'react-router-dom'
export default function LoginWithGoogle() {
  const getGoogleUrl = () => {
    const url = 'https://accounts.google.com/o/oauth2/auth'
    const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env
    const query = {
      client_id: VITE_GOOGLE_CLIENT_ID,
      redirect_uri: VITE_GOOGLE_REDIRECT_URI,
      response_type: 'code',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(' '),
      prompt: 'consent'
    }
    const queryString = new URLSearchParams(query).toString()
    return `${url}?${queryString}`
  }
  return (
    <Link
      to={getGoogleUrl()}
      className='caret-transparent py-2 flex items-center justify-center rounded-md border-[3px] border-[#dcac3b] cursor-pointer hover:bg-slate-100 hover:border-[3px] hover:border-[#e9c162]'
    >
      <div className='flex gap-4 items-center'>
        <img src={googleIcon} alt='' />
        <span className='font-medium'>Login with Google</span>
      </div>
    </Link>
  )
}
