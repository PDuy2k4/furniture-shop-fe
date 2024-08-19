import { useState, useCallback } from 'react'
import google from '../assets/google.svg'
import show from '../assets/show.png'
import hide from '../assets/hide.png'
import { Link, useNavigate } from 'react-router-dom'
import { showToastMessage } from '~/components/ToastMessage'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const changeShowPasswordIcon = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }, [])

  const handleLogin = async () => {
    if (email === '') {
      showToastMessage('error', 'Please fill in email')
      return
    }
    if (password === '') {
      showToastMessage('error', 'Please fill in password')
      return
    }
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const data = await response.json()

      console.log(data.message)

      if (response.status >= 200 && response.status < 300) {
        // Handle successful registration
        navigate('/home')
        showToastMessage('success', 'Login successfully')
      } else {
        // Handle registration error
        showToastMessage('error', data.message)
        // Handle error data appropriately (see point 2 below)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='relative w-full h-screen flex items-center justify-center bg-slate-300'>
      <img
        src='https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
        alt='funitute'
        className='lg:hidden absolute top-0 left-0 w-full h-full object-center object-cover z-0'
      />
      <div className='max-w-[320px] sm:max-w-[580px] lg:max-w-[850px] w-full max-h-[600px] m-auto z-[2] bg-[#ffffff] rounded-[34px] im'>
        <div className='flex items-stretch justify-center p-[8px]'>
          <div className='w-[0%] lg:w-[55%] max-h-[550px]'>
            <img
              className='block max-w-full w-full max-h-full h-full object-left-bottom object-cover rounded-l-[34px]'
              src='https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
              alt='funitute'
              loading='lazy'
            />
          </div>
          <div className='px-3 lg:px-8  w-[100%] lg:w-[45%] flex flex-col items-stretch justify-between pt-10 pb-1 rounded-[34px]'>
            <div className='flex flex-col items-stretch justify-center'>
              <h2 className='text-center lg:text-left mb-2 lg:mb-3 text-2xl lg:text-3xl lg:text-[28px] text-[#525252] font-bold leading-5'>
                Login to your account
              </h2>
              <p className='text-center lg:text-left text-xs font-normal text-[#b9b9b9] mb-5'>
                See what is going on with your business
              </p>

              <a
                target='blank'
                href='http://localhost:8000/v1/auth/google'
                className='group gap-3 hover:bg-slate-200 hover:shadow-md flex items-center justify-center  bg-white px-3 py-2 border shadow-sm border-slate-300 rounded-md sm:text-sm'
              >
                <img src={google} className='inline-block w-5 h-5' alt='Google-icon' />
                <span className='inline-block text-xs text-[#828282] font-bold'>Continue with google</span>
              </a>

              <p className='my-4 lg:my-6 text-xs text-center text-[#A1A1A1] font-semibold'>
                ------------- or Sign in with Email -------------
              </p>

              <form>
                <label className='block mb-[10px]'>
                  <span className='block text-sm text-[#828282] font-semibold'>Email</span>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    type='email'
                    className='peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                    placeholder='you@example.com'
                  />
                  <p className='mt-1 invisible peer-invalid:visible text-pink-600 text-xs'>
                    Please provide a valid email address.
                  </p>
                </label>
                <label className='relative block mb-1'>
                  <span className='block text-sm text-[#828282] font-semibold '>Password</span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter password'
                    type={showPassword ? 'text' : 'password'}
                    className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                  />
                  <button type='button' className='absolute right-2 top-[50%] ' onClick={changeShowPasswordIcon}>
                    <img
                      src={showPassword ? show : hide}
                      className='inline-block rounded-[100rem] w-5 h-5 hover:bg-slate-200'
                      alt='Toggle password visibility'
                    />
                  </button>
                </label>
                <div className='flex items-center justify-between mt-1 mb-5 lg:mb-7'>
                  <label className='flex items-center justify-center gap-1'>
                    <input className='block' type='checkbox' />
                    <span className='block text-xs font-normal text-[#A1A1A1]'>Remember me</span>
                  </label>
                  <a className='block max-w-full text-xs font-semibold text-[#7F265B]' onClick={() => {navigate('/forgotpassword')}}>
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleLogin()
                  }}
                  className='mb-4 lg:mb-0 block w-full py-[10px] px[8px]  text-center bg-[#7F265B] font-[750] text-white text-xl rounded-md  hover:bg-[#49213c]'
                >
                  Login
                </button>
              </form>
            </div>
            <div className='flex justify-center gap-2 items-center'>
              <span className='text-xs text-[#828282] font-normal'>Not register yet? </span>
              <Link to='/register' className='inline-block max-w-full text-xs font-semibold text-[#7F265B]'>
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
