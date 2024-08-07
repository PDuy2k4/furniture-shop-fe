import googleIcon from '../assets/google-icon.svg'
import { useFormik } from 'formik'
import { ValidationRegisterForm } from '~/constants/ValidationRegisterForm'
import React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
export default function RegisterPage(props: any) {
  const formik = useFormik<{
    name: string
    email: string
    password: string
    confirmPassword: string
    remember: boolean
  }>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      remember: false
    },
    validationSchema: ValidationRegisterForm,
    onSubmit: () => {} // Add an empty function as the onSubmit property
  })
  const [showPassword, setShowPassword]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] =
    useState(false)
  // fix error of mail verification
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#ffe6c8]'>
      <div className='rounded-lg px-6 py-4 bg-white'>
        <div className='flex items-center rounded-md overflow-hidden'>
          {!props.isTablet && (
            <div className='max-w-[600px] caret-transparent'>
              <img
                className='min-w-[200px] max-w-full min-h-[700px] rounded-md object-cover'
                src='https://res.cloudinary.com/ecomsilver/image/upload/w_1250,h_800/CoachHouse/PageImages/CH_furniture_close_2023_.jpg'
                alt=''
              />
            </div>
          )}

          <form
            className={`min-w-[40vh] ${props.isMobile && 'justify-between min-h-screen w-screen'} p-8 flex flex-col ${!props.isMobile ? 'gap-2' : 'gap-1'}`}
            onSubmit={formik.handleSubmit}
          >
            <h1 className={`${!props.isMobile ? 'text-3xl' : 'text-2xl'} font-bold leading-normal caret-transparent`}>
              Sign up your Account
            </h1>
            <span className='text-sm inline-block mb-1 opacity-75 caret-transparent'>
              See what is going on with your business
            </span>
            <div className='caret-transparent py-2 flex items-center justify-center rounded-md border-2 border-black cursor-pointer hover:bg-slate-100'>
              <div className='flex gap-4 items-center'>
                <img src={googleIcon} alt='' />
                <span className='font-medium'>Sign up with Google</span>
              </div>
            </div>
            <div className='opacity-50 flex items-center justify-center relative caret-transparent'>
              <span className='p-1 bg-white'>or sign up with your Email</span>
              <div className='w-[90%] z-[-1] h-[0.5px] absolute translate-y-1/2 bg-black'></div>
            </div>
            <div className='flex flex-col gap-1 opacity-70'>
              {!formik.errors.name ? (
                <label className='cursor-pointer caret-transparent' htmlFor='name'>
                  Your Name
                </label>
              ) : (
                <span className='pointer-events-none text-sm text-red-600 caret-transparent'>{formik.errors.name}</span>
              )}
              <input
                id='name'
                type='text'
                placeholder='Enter your name'
                className='w-full p-2 rounded-md border border-black'
                value={formik.values.name}
                onChange={formik.handleChange}
                required
              />
            </div>

            <div className='flex flex-col gap-1 opacity-70'>
              {!formik.errors.email ? (
                <label className='cursor-pointer caret-transparent' htmlFor='email'>
                  Email
                </label>
              ) : (
                <span className='pointer-events-none text-sm text-red-600 caret-transparent'>
                  {formik.errors.email}
                </span>
              )}
              <input
                id='email'
                type='text'
                placeholder='Enter your email'
                className='w-full p-2 rounded-md border border-black'
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1 opacity-70'>
              {!formik.errors.password ? (
                <label className='cursor-pointer caret-transparent' htmlFor='password'>
                  Password
                </label>
              ) : (
                <span className='pointer-events-none text-sm text-red-600 caret-transparent'>
                  {formik.errors.password}
                </span>
              )}
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='w-full pl-3 py-2 pr-8 rounded-md border border-black'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                />
                <div
                  className='absolute right-1 bg-inherit cursor-pointer z-2 top-2 rounded-full'
                  onClick={() => setShowPassword((val) => !val)}
                >
                  {showPassword ? (
                    <EyeIcon className='h-6 w-6 text-[#7f265b]' />
                  ) : (
                    <EyeSlashIcon className='h-6 w-6 text-[#7f265b]' />
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1 opacity-70'>
              {!formik.errors.confirmPassword ? (
                <label className='cursor-pointer caret-transparent' htmlFor='confirmPassword'>
                  Confirm Password
                </label>
              ) : (
                <span className='pointer-events-none text-sm text-red-600 caret-transparent'>
                  {formik.errors.confirmPassword}
                </span>
              )}
              <div className='relative'>
                <input
                  id='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='w-full pl-3 py-2 pr-8 rounded-md border border-black'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  required
                />
                <div
                  className='absolute right-1 bg-inherit cursor-pointer z-2 top-2 rounded-full'
                  onClick={() => setShowConfirmPassword((val) => !val)}
                >
                  {showConfirmPassword ? (
                    <EyeIcon className='h-6 w-6 text-[#7f265b]' />
                  ) : (
                    <EyeSlashIcon className='h-6 w-6 text-[#7f265b]' />
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
                    className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#7f265b] checked:bg-[#7f265b] checked:before:bg-[#7f265b] hover:before:opacity-10"
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
                {/* use local storage */}
              </div>
              <span className='inline-block text-sm text-[#7f265b] hover:opacity-55 cursor-pointer'>
                Forgot Password?
              </span>
            </div>
            <button
              type='submit'
              className='bg-[#7f265b] rounded-md caret-transparent font-semibold text-white py-5 transition-all hover:bg-[#9f3876]'
            >
              Create Your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
