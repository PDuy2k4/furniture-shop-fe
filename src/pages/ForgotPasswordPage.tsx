import { useState, useCallback } from 'react'
import dotenv from 'dotenv'
import { useLocation, useNavigate } from 'react-router-dom'
import { showToastMessage } from '~/components/ToastMessage'
import ForgotPasswordForm from '~/components/ForgotPasswordForm'

export default function ForgotPassword() {
  return (
    <div className='relative w-full h-screen flex items-center justify-center bg-slate-300 bg-cover bg-right lg:bg-center bg-[url(https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/7939863/pexels-photo-7939863.jpeg?auto=compress&cs=tinysrgb&w=600)]'>
      <ForgotPasswordForm></ForgotPasswordForm>
    </div>
  )
}
