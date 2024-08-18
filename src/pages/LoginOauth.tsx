import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import http from '~/api/http'
import { login } from '~/Redux/slices/userSlice'
import { Link } from 'react-router-dom'
export default function LoginOauth() {
  console.log('LoginOauth')
  const [pending, setPending] = useState(true)
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const userId = searchParams.get('userId')
  const accessToken = searchParams.get('accessToken')
  const navigate = useNavigate()
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await http.get('/user/' + userId)

        dispatch(login({ ...data, accessToken }))
        navigate('/')
      } catch (error) {
        setPending(false)
      }
    }
    if (userId && accessToken) {
      getUser()
    }
  }, [accessToken, dispatch, navigate, searchParams, userId])
  return (
    <div className='body-container'>
      <div className='flex flex-col gap-4 mt-auto h-screen justify-center caret-transparent'>
        {pending ? (
          <div className='flex flex-col gap-3 justify-center items-center'>
            <div className='text-[#B88E2F] max-w-[400px] max-h-[400px]'>
              <CircularProgress color='inherit' />
            </div>
            <h2 className='text-2xl font-bold text-center text-[#B88E2F]'>Pending . . .</h2>
          </div>
        ) : (
          <div className='container mx-auto h-screen flex flex-col items-center justify-center'>
            <SentimentVeryDissatisfiedIcon
              sx={{
                fontSize: 200,
                color: '#B88E2F'
              }}
            />
            <h1 className='text-[100px] font-bold text-[#B88E2F]'>500</h1>
            <h2 className='text-[30px] opacity-60 font-bold'>Internal Server Error</h2>
            <p className='opacity-50 text-center'>
              Server is not responding. Please try another login methods or contact the administrator.
            </p>
            <Link
              to={'/login'}
              className='bg-[#B88E2F] rounded-md mt-3 caret-transparent font-semibold text-white py-3 px-5 transition-all hover:bg-[#e1b34a]'
            >
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
