import { useState, useCallback } from 'react'
import google from '../assets/google.svg'
import show from '../assets/show.png'
import hide from '../assets/hide.png'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [fullName, setFullName] = useState('')

  const changeShowPasswordIcon = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }, [])
  const changeShowRetypePasswordIcon = useCallback(() => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword)
  }, [])

  const handleRegister = async () => {
    if (fullName === '') {
      alert('Fill in full name')
      return
    }
    if (email === '') {
      alert('Fill in email')
      return
    }
    if (password === '' || retypePassword === '') {
      alert('Fill in password')
      return
    }
    if (password !== retypePassword) {
      alert('Password is not equal to retype password')
      return
    }
    try {
      const response = await fetch('http://localhost:8000/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
          isAdmin: false
        })
      })
      const data = await response.json()
      if (response.ok) {
        // Handle successful registration (e.g., redirect to login page)
        console.log('Registration successful:', data)
      } else {
        // Handle registration error
        console.error('Registration failed:', data)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-300'>
      <div className=' max-w-[500px] w-full h-auto m-auto bg-[#ffffff] rounded-[34px] py-14 px-12'>
        <div className='flex flex-col items-stretch justify-center w-full rounded-[34px]'>
          <h2 className='text-3xl text-[#525252] font-bold leading-5 mb-3 text-center'>Create Your Account</h2>
          <p className='text-xs font-normal text-[#b9b9b9] mb-4 text-center'>Welcome back, please enter your detail</p>

          <div className='group gap-3 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center  bg-white px-3 py-2 border shadow-sm border-slate-300 rounded-md sm:text-sm'>
            <img src={google} className='inline-block w-5 h-5' alt='Google-icon' />
            <span className='inline-block text-xs text-[#828282] font-bold'>Continue with google</span>
          </div>

          <p className='my-5 text-xs text-center text-[#A1A1A1] font-semibold'>
            ------------- or Sign up with Email -------------
          </p>

          <form>
            <label className='block mb-[26px]'>
              <span className='block text-sm text-[#828282] font-semibold'>Full Name</span>
              <input
                type='text'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className=' mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                placeholder='you@example.com'
              />
            </label>

            <label className='block mb-[6px]'>
              <span className='block text-sm text-[#828282] font-semibold'>Email</span>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                placeholder='you@example.com'
              />
              <p className='mt-1 invisible peer-invalid:visible text-pink-600 text-xs'>
                Please provide a valid email address.
              </p>
            </label>
            <label className='block mb-[26px] relative'>
              <span className='block text-sm text-[#828282] font-semibold '>Password</span>
              <input
                id='passwordInput'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                type={showPassword ? 'text' : 'password'}
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
              />
              <button type='button' className='absolute right-2 top-[50%] ' onClick={changeShowPasswordIcon}>
                <img
                  src={showPassword ? hide : show}
                  className='inline-block rounded-[100rem] w-5 h-5 hover:bg-slate-200'
                  alt='Toggle password visibility'
                />
              </button>
            </label>

            <label className='block mb-[26px] relative'>
              <span className='block text-sm text-[#828282] font-semibold '>Retype Password</span>
              <input
                id='passwordInput'
                placeholder='Enter password'
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                type={showRetypePassword ? 'text' : 'password'}
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
              />
              <button type='button' className='absolute right-2 top-[50%] ' onClick={changeShowRetypePasswordIcon}>
                <img
                  src={showRetypePassword ? hide : show}
                  className='inline-block rounded-[100rem] w-5 h-5 hover:bg-slate-200'
                  alt='Toggle password visibility'
                />
              </button>
            </label>
          </form>

          <button onClick={handleRegister} className='block w-full py-[10px] px[8px]  text-center bg-[#7F265B] font-[750] text-white text-xl rounded-md  hover:bg-[#49213c]'>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
