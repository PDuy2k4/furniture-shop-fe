import React, { useReducer, useState } from 'react'
import { useFormik } from 'formik'
import { ValidationRegisterForm } from '~/constants/ValidationRegisterForm'
import { ExclamationCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import CircularProgress from '@mui/material/CircularProgress'
import http from '~/Api/http'
import { useNavigate } from 'react-router-dom'
const showPassReducer = (
  state: {
    password: boolean
    confirmPassword: boolean
  },
  action: { type: string }
) => {
  switch (action.type) {
    case 'password':
      return { ...state, password: !state.password }
    case 'confirmPassword':
      return { ...state, confirmPassword: !state.confirmPassword }
    default:
      return state
  }
}

export default function ResetPasswordForm({ isMobile, token }: { isMobile: boolean; token: string }) {
  const [sendingForm, setSendingForm]: [
    sendingForm: boolean,
    setSendingForm: React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false)
  //   const [existEmail, setExistEmail]: [
  //     existEmail: boolean,
  //     setExistEmail: React.Dispatch<React.SetStateAction<boolean>>
  //   ] = useState(false)
  //   console.log(existEmail)
  const nav = useNavigate()
  const formik = useFormik<{
    password: string
    confirmPassword: string
  }>({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: ValidationRegisterForm,
    onSubmit: async (values: { password: string; confirmPassword: string }) => {
      setSendingForm(true)
      try {
        const payload = { newPassword: values.password, confirmNewPassword: values.confirmPassword, token: token }
        console.log(payload)
        const res = await http.post('/auth/resetPassword', payload)
        console.log(res)
        if (res.status === 200) {
          nav('/login')

          setSendingForm(false)
        }
      } catch (err) {
        console.log(err)
        //setExistEmail(true)
        setSendingForm(false)
      }
    } // Add an empty function as the onSubmit property
  })
  const showPassword = {
    password: false,
    confirmPassword: false
  }
  const [state, dispatch] = useReducer(showPassReducer, showPassword)
  return (
    <div>
      <form
        className={`min-w-[40vh] ${isMobile && 'justify-between min-h-screen w-screen'} p-8 flex flex-col ${isMobile ? 'gap-2' : 'gap-1'}`}
        onSubmit={formik.handleSubmit}
      >
        <h1 className={`${isMobile ? 'text-3xl' : 'text-2xl'} font-bold leading-normal caret-transparent`}>
          Reset your password
        </h1>
        <span className='text-sm inline-block mb-1 opacity-75 caret-transparent'>
          See what is going on with your business
        </span>

        <div className='flex flex-col gap-1 opacity-70'>
          {!formik.errors.password ? (
            <label className='cursor-pointer caret-transparent' htmlFor='password'>
              Password
            </label>
          ) : (
            <div className='flex items-center gap-2'>
              <ExclamationCircleIcon className='h-7 w-7 text-red-600' />
              <span className='leading-loose pointer-events-none text-sm text-red-600 caret-transparent'>
                {formik.errors.password}
              </span>
            </div>
          )}
          <div className='relative'>
            <input
              id='password'
              type={state.password ? 'text' : 'password'}
              placeholder='Enter your password'
              className='w-full pl-3 py-2 pr-8 rounded-md border focus:outline-[#e9c162] border-[#B88E2F]'
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
            <div
              className='absolute right-1 bg-inherit cursor-pointer z-2 top-2 rounded-full'
              onClick={() => dispatch({ type: 'password' })}
            >
              {state.password ? (
                <EyeIcon className='h-6 w-6 text-[#B88E2F]' />
              ) : (
                <EyeSlashIcon className='h-6 w-6 text-[#B88E2F]' />
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
            <div className='flex items-center gap-2'>
              <ExclamationCircleIcon className='h-7 w-7 text-red-600' />
              <span className='leading-loose pointer-events-none text-sm text-red-600 caret-transparent'>
                {formik.errors.confirmPassword}
              </span>
            </div>
          )}
          <div className='relative'>
            <input
              id='confirmPassword'
              type={state.confirmPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              className='w-full pl-3 py-2 pr-8 rounded-md border focus:outline-[#e9c162] border-[#B88E2F]'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              required
            />
            <div
              className='absolute right-1 bg-inherit cursor-pointer z-2 top-2 rounded-full'
              onClick={() => dispatch({ type: 'confirmPassword' })}
            >
              {state.confirmPassword ? (
                <EyeIcon className='h-6 w-6 text-[#B88E2F]' />
              ) : (
                <EyeSlashIcon className='h-6 w-6 text-[#B88E2F]' />
              )}
            </div>
          </div>
        </div>

        <button
          type='submit'
          className={
            sendingForm
              ? 'pointer-events-none bg-[#e1b34a] rounded-md flex items-center text-white justify-center py-3'
              : 'bg-[#B88E2F] rounded-md caret-transparent font-semibold text-white py-5 transition-all hover:bg-[#e1b34a]'
          }
        >
          {sendingForm ? <CircularProgress color='inherit' /> : ' Confirm'}
        </button>
      </form>
    </div>
  )
}
