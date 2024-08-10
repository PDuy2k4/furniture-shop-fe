import { useState } from 'react'
import google from '../assets/google.svg'

export default function LoginPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-300'>
      <div className=' max-w-[960px] w-full h-auto m-auto bg-[#ffffff] rounded-[34px]'>
        <div className='flex items-stretch justify-center p-[8px]'>
          <div className='w-[55%] max-h-[600px]'>
            <img
              className='block max-w-full w-full max-h-full h-full object-left-bottom object-cover rounded-l-[34px]'
              src='https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
              alt='funitute'
              loading='lazy'
            />
          </div>
          <div className='flex flex-col items-stretch justify-between w-[45%] pt-10 pb-1 px-12 rounded-[34px]'>
              <div className='flex flex-col items-stretch justify-center'>
              <h2 className='text-3xl text-[#525252] font-bold leading-5 mb-3'>Login to your account</h2>
              <p className='text-xs font-normal text-[#b9b9b9] mb-5'>See what is going on with your business</p>

              <div className='group gap-3 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center  bg-white px-3 py-2 border shadow-sm border-slate-300 rounded-md sm:text-sm'>
              <img 
                src='https://cdn-icons-png.flaticon.com/128/300/300221.png' 
                className='inline-block w-5 h-5' 
                alt='Google-icon' />                
              <span className='inline-block text-xs text-[#828282] font-bold'>Continue with google</span>
              </div>

              <p className='my-6 text-xs text-center text-[#A1A1A1] font-semibold'>
                ------------- or Sign in with Email -------------
              </p>

              <form>
                <label className='block mb-[10px]'>
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
                <label className='block text-sm text-[#828282] font-semibold mb-1'>
                  <span className='block'>Password</span>
                  <input
                    type='password'
                    placeholder='Enter password'
                    className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-[#7F265B] focus:ring-[#7F265B] block w-full rounded-md sm:text-sm focus:ring-1'
                  />
                </label>
                <div className='flex items-center justify-between mt-1 mb-7'>
                  <label className='flex items-center justify-center gap-1'>
                    <input className='block' type='checkbox' />
                    <span className='block text-xs font-normal text-[#A1A1A1]'>Remember me</span>
                  </label>
                  <a className='block max-w-full text-xs font-semibold text-[#7F265B]' href=''>
                    Forgot password?
                  </a>
                </div>
              <button className='block w-full py-[10px] px[8px]  text-center bg-[#7F265B] font-[750] text-white text-xl rounded-md  hover:bg-[#49213c]'>Login</button>
              </form>

              </div>
              <div className='flex justify-center gap-2 items-center'>
                <span className='text-xs text-[#828282] font-normal text-[#7F265B]'>Not register yet? </span>
                <a className='inline-block max-w-full text-xs font-semibold text-[#7F265B]' href=''>
                    Create an account
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
