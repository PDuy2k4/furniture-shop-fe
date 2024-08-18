import React, { useState } from 'react'
import { useFormik } from 'formik'
import { ValidationRegisterForm } from '~/constants/ValidationRegisterForm'
import CircularProgress from '@mui/material/CircularProgress'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import http from '~/Api/http'
export default function ForgotPasswordForm({ isMobile }: { isMobile: boolean }) {
  const [sendingForm, setSendingForm]: [
    sendingForm: boolean,
    setSendingForm: React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false)
  //   const [existEmail, setExistEmail]: [
  //     existEmail: boolean,
  //     setExistEmail: React.Dispatch<React.SetStateAction<boolean>>
  //   ] = useState(false)
  //console.log(existEmail)
  const nav = useNavigate()
  const formik = useFormik<{
    email: string
  }>({
    initialValues: {
      email: ''
    },
    validationSchema: ValidationRegisterForm,
    onSubmit: async (values: { email: string }) => {
      setSendingForm(true)
      try {
        const res = await http.post('/auth/forgotPassword', values)
        if (res.status === 200) {
          setSendingForm(false)
          console.log('Email Sent')
          nav('/resendEmail/' + 'forgotPassword/@', { state: values })
        }
      } catch (err) {
        console.log(err)
        nav('/verifyEmail/' + '@')
        setSendingForm(false)
      }
    } // Add an empty function as the onSubmit property
  })
  return (
    <div>
      <form
        className={`min-w-[40vh] ${isMobile && 'justify-between min-h-screen w-screen'} p-8 flex flex-col ${isMobile ? 'gap-2' : 'gap-1'}`}
        onSubmit={formik.handleSubmit}
      >
        <h1 className={`${isMobile ? 'text-3xl' : 'text-2xl'} font-bold leading-normal caret-transparent`}>
          Find your account
        </h1>
        <span className='text-sm inline-block mb-1 opacity-75 caret-transparent'>
          See what is going on with your business
        </span>

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

        <button
          type='submit'
          className={
            sendingForm
              ? 'pointer-events-none bg-[#e1b34a] rounded-md flex items-center text-white justify-center py-3'
              : 'bg-[#B88E2F] rounded-md caret-transparent font-semibold text-white py-5 transition-all hover:bg-[#e1b34a]'
          }
        >
          {sendingForm ? <CircularProgress color='inherit' /> : 'Confirm'}
        </button>
        <div className='flex gap-1 items-center justify-center mt-3'>
          <span>Remember your password?</span>
          <Link to='/login' className='text-[#B88E2F] hover:text-[#e1b34a]'>
            Back to login
          </Link>
        </div>
      </form>
    </div>
  )
}
