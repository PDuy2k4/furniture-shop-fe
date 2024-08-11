import { useState, useCallback } from 'react'
import back from '../assets/back.png'
import dotenv from 'dotenv'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

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
    <div className='relative w-full h-screen flex items-center justify-center bg-slate-300 bg-cover bg-right lg:bg-center bg-[url(https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/7939863/pexels-photo-7939863.jpeg?auto=compress&cs=tinysrgb&w=600)]'>
      <div className='absolute z-[2] py-10 px-5 lg:py-14 lg:px-12 max-w-[330px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] w-full h-auto m-auto bg-[#ffffff] rounded-[34px] '>
        <div className='flex flex-col items-stretch justify-center w-full rounded-[34px]'>
          <h2 className='text-2xl sm:text-[27px] lg:text-3xl text-[#525252] font-bold leading-5 mb-3 text-center'>
            Forgot Password?
          </h2>
          <p className='text-xs font-normal text-[#b9b9b9] mb-4 text-center'>No worries, we'll send you reset instructions.</p>
          <form>
          <label className='block mb-[10px]'>
              <span className='block text-sm text-[#828282] font-semibold'>Email</span>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                placeholder='you@example.com'
              />
              <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-xs'>
                Please provide a valid email address.
              </p>
            </label>
          </form>

          <button
            onClick={handleRegister}
            className='block w-full py-[10px] px[8px] mb-[12px]  text-center bg-[#7F265B] font-[750] text-white text-xl rounded-md  hover:bg-[#49213c]'
          >
            Reset password
          </button>
          <div className='mx-auto w-fit flex items-center justify-center gap-2 hover:cursor-pointer'>
            <img className='block w-5 h-5' src={back} alt="back_icon" />
            <a className='block max-w-full text-xs font-semibold text-[#7F265B]' href=''>
                Back to log in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
