import { useState, useRef, memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import http from '~/Api/http'
import { useNavigate } from 'react-router-dom'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import { useLocation } from 'react-router-dom'

const ResendEmailPage = function () {
  const { id, navFrom } = useParams<{ id: string; navFrom: string }>()
  const location = useLocation()

  const nav = useNavigate()
  const [sending, setSending] = useState(false)
  const hasCalledApi = useRef(false) // useRef để lưu trữ trạng thái gọi API
  const handleResendEmail = async () => {
    if (hasCalledApi.current === false) {
      hasCalledApi.current = true
      return
    } // Đánh dấu API đã được gọi
    const resendEmail = async () => {
      try {
        setSending(true)
        if (hasCalledApi.current === false) {
          hasCalledApi.current = true
          return
        } // Đánh dấu API đã được gọi
        let response
        if (navFrom === 'register') {
          response = await http.post('/auth/sendVerificationEmail', { _id: id })
        } else {
          const { email } = location.state
          response = await http.post('/auth/forgotPassword', { email })
        }
        if (response.status === 200) {
          console.log('Email Sent')
        }
        setSending(false)
      } catch (error) {
        setSending(false)
        if (navFrom === 'register') {
          nav('/verifyEmail/' + id)
        }
      }
    }
    resendEmail()
  }

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
            <div className='text-center'>
              <MarkEmailReadIcon
                sx={{
                  fontSize: 180,
                  color: '#B88E2F'
                }}
              />
            </div>
            <h1 className='text-3xl font-bold text-center text-[#B88E2F]'>
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
                  handleResendEmail()

                  // Reset trạng thái để cho phép gọi lại API
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

export default memo(ResendEmailPage)
