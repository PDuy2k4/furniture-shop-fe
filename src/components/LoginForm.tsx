import React, { useState } from 'react'
import { useFormik } from 'formik'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import CircularProgress from '@mui/material/CircularProgress'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '~/Redux/slices/userSlice'
import http from '~/api/http'
import LoginWithGoogle from './LoginWithGoogle'
export default function LoginForm(props: any) {
  const registeredUser = JSON.parse(localStorage.getItem('user')?.toString() || 'null')
  const [errMsg, setErrMsg] = useState('')
  const [sending, setSending] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik<{
    email: string
    password: string
    remember: boolean
  }>({
    initialValues: {
      email: registeredUser?.email || '',
      password: registeredUser?.password || '',
      remember: true
    },
    onSubmit: async (values: { email: string; password: string; remember: boolean }) => {
      setSending(true)
      try {
        const res = await http.post('/auth/login', values)
        dispatch(login(res.data))
        setSending(false)
        navigate('/')
      } catch (err: any) {
        const errRes = err.response.data.message
        console.log(errRes)
        setErrMsg(errRes)
        setSending(false)
      }
      // Add an empty function as the onSubmit property
    }
  })

  const [showPass, setShowPass] = useState(false)

  return (
    <form
      className={`min-w-[40vh] ${props.isMobile && 'justify-between min-h-screen w-screen'} p-8 flex flex-col ${!props.isMobile ? 'gap-2' : 'gap-1'}`}
      onSubmit={formik.handleSubmit}
    >
      <h1 className={`${!props.isMobile ? 'text-3xl' : 'text-2xl'} font-bold leading-normal caret-transparent`}>
        Login to your Account
      </h1>
      <span className='text-sm inline-block mb-1 opacity-75 caret-transparent'>
        See what is going on with your business
      </span>
      <LoginWithGoogle />
      <div className='opacity-50 flex items-center justify-center relative caret-transparent'>
        <span className='bg-white p-1'>or Sign in with Email</span>
        <div className='w-[90%] z-[-2] h-[0.5px] absolute translate-y-1/2 bg-black'></div>
      </div>

      <div className='flex flex-col gap-1 opacity-70'>
        <label className='cursor-pointer caret-transparent' htmlFor='email'>
          Email
        </label>

        <input
          id='email'
          type='text'
          placeholder='Enter your email'
          className={`w-full p-2 rounded-md border border-[#B88E2F]  focus:outline-[#e9c162]`}
          value={formik.values.email}
          onChange={(e) => {
            formik.handleChange(e)
          }}
          required
        />
      </div>
      <div className='flex flex-col gap-1 opacity-70'>
        <label className='cursor-pointer caret-transparent' htmlFor='password'>
          Password
        </label>

        <div className='relative'>
          <input
            id='password'
            type={showPass ? 'text' : 'password'}
            placeholder='Enter your password'
            className='w-full pl-3 py-2 pr-8 rounded-md border focus:outline-[#e9c162] border-[#B88E2F]'
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
          <div
            className='absolute right-1 bg-inherit cursor-pointer z-2 top-2 rounded-full'
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <EyeIcon className='h-6 w-6 text-[#B88E2F]' />
            ) : (
              <EyeSlashIcon className='h-6 w-6 text-[#B88E2F]' />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${props.isMobile ? 'flex flex-col items-start caret-transparent' : 'flex caret-transparent justify-between items-center'}`}
      >
        <div className='inline-flex ml-[-12px] items-center'>
          <label className='relative flex items-center p-3 rounded-full cursor-pointer' htmlFor='remember'>
            <input
              checked={formik.values.remember}
              onChange={formik.handleChange}
              id='remember'
              type='checkbox'
              className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-[#B88E2F] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#B88E2F] checked:bg-[#B88E2F] checked:before:bg-[#B88E2F] hover:before:opacity-10"
              name='remember'
            />
            <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3.5 w-3.5'
                viewBox='0 0 20 20'
                fill='currentColor'
                stroke='currentColor'
                stroke-width='1'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </span>
          </label>
          <label htmlFor='remember' className='text-sm opacity-55 cursor-pointer'>
            Remember me
          </label>
        </div>
        <Link to='/forgotPass' className='inline-block text-sm text-[#B88E2F] hover:opacity-55 cursor-pointer'>
          Forgot Password?
        </Link>
      </div>

      <span className={`text-red-500 text-sm ${errMsg !== '' ? 'visible' : ''}`}>{errMsg}</span>

      <button
        type='submit'
        className={
          sending
            ? 'pointer-events-none bg-[#e1b34a] rounded-md flex items-center text-white justify-center py-3'
            : 'bg-[#B88E2F] rounded-md caret-transparent font-semibold text-white py-5 transition-all hover:bg-[#e1b34a]'
        }
      >
        {sending ? <CircularProgress color='inherit' /> : 'Login'}
      </button>
      <div className='flex gap-1 items-center justify-center mt-3'>
        <span>Not Registered Yet?</span>
        <Link to='/register' className='text-[#B88E2F] hover:text-[#e1b34a]'>
          Create an account
        </Link>
      </div>
    </form>
  )
}
