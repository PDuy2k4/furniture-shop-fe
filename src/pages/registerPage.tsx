import { useState } from 'react'
import google from '../assets/google.svg'

export default function RegisterPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-300'>
      <div className=' max-w-[500px] w-full h-auto m-auto bg-[#ffffff] rounded-[34px] py-14 px-12'>
        <div className='flex flex-col items-stretch justify-center w-full rounded-[34px]'>
          <h2 className='text-3xl text-[#525252] font-bold leading-5 mb-3 text-center'>Create Your Account</h2>
          <p className='text-xs font-normal text-[#b9b9b9] mb-4 text-center'>Welcome back, please enter your detail</p>

          <div className='group gap-3 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center  bg-white px-3 py-2 border shadow-sm border-slate-300 rounded-md sm:text-sm'>
            <img
              src='https://cdn-icons-png.flaticon.com/128/300/300221.png'
              className='inline-block w-5 h-5'
              alt='Google-icon'
            />
            <span className='inline-block text-xs text-[#828282] font-bold'>Continue with google</span>
          </div>

          <p className='my-5 text-xs text-center text-[#A1A1A1] font-semibold'>
            ------------- or Sign up with Email -------------
          </p>

          <form>
            <label className='block mb-[8px]'>
              <span className='block text-sm text-[#828282] font-semibold'>Email</span>
              <input
                type='email'
                className='peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                placeholder='you@example.com'
              />
              <p className='mt-1 invisible peer-invalid:visible text-pink-600 text-xs'>
                Please provide a valid email address.
              </p>
            </label>
            <label className='block mb-[8px] relative'>
              <span className='block text-sm text-[#828282] font-semibold '>Password</span>
              <input
                id='passwordInput'
                placeholder='Enter password'
                type='password'
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
              />
              <button className='absolute right-0 top-[50%]' id="togglePassword">
                <img src=''/>
              </button>
            </label>
          </form>

          <button className='block w-full py-[10px] px[8px]  text-center bg-[#7F265B] font-[750] text-white text-xl rounded-md  hover:bg-[#49213c]'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
