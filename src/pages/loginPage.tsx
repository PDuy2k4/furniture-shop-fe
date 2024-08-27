import { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { showToastMessage } from '~/components/ToastMessage'
import LoginForm from '~/components/LoginForm'

export default function LoginPage() {

  return (
    <div className='relative w-full h-screen flex items-center justify-center bg-slate-300'>
      <LoginForm>
      </LoginForm>
    </div>
  )
}
