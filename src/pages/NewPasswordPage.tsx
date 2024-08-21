import { useState, useCallback } from 'react'
import show from '../assets/show.png'
import hide from '../assets/hide.png'
import back from '../assets/back.png'
import dotenv from 'dotenv'
import { useLocation, useNavigate } from 'react-router-dom'
import { showToastMessage } from '~/components/ToastMessage'

export default function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')

  const changeShowPasswordIcon = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }, [])
  const changeShowRetypePasswordIcon = useCallback(() => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword)
  }, [])

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token'); // Lấy giá trị của tham số 'token'

  const handleUpdatePassword = async () => {
    try {
      const response = await fetch('http://localhost:8000/v1/auth/updatepassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: password,
          retypePassword: retypePassword,
          token: token
        })
      })
      const data = await response.json()
      if (response.ok) {
        // Handle successful registration (e.g., redirect to login page)
        console.log('Registration successful:', data)
        navigate('/login')
        showToastMessage('success', 'Update password successfully')
      } else {
        // Handle registration error
        console.error('Registration failed:', data)
        showToastMessage('error', '')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='relative w-full h-screen flex items-center justify-center bg-slate-300 bg-cover bg-right lg:bg-center bg-[url(https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/7939863/pexels-photo-7939863.jpeg?auto=compress&cs=tinysrgb&w=600)]'>
      <div className='absolute z-[2] py-10 px-5 lg:py-13 lg:px-12 max-w-[330px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] w-full h-auto m-auto bg-[#ffffff] rounded-[34px] '>
        <div className='flex flex-col items-stretch justify-center w-full rounded-[34px]'>
          <h2 className='text-2xl sm:text-[27px] lg:text-3xl text-[#525252] font-bold leading-5 mb-3 text-center'>
            Verify successfully
          </h2>
          <p className='text-xs font-normal text-[#b9b9b9] mb-4 text-center'>Please provide us new password</p>
          <form>
            <label className='block mb-[26px] relative'>
              <span className='block text-sm text-[#828282] font-semibold '>New password</span>
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
                  src={showPassword ? show : hide}
                  className='inline-block rounded-[100rem] w-5 h-5 hover:bg-slate-200'
                  alt='Toggle password visibility'
                />
              </button>
            </label>

            <label className='block mb-[26px] relative'>
              <span className='block text-sm text-[#828282] font-semibold '>Retype new password</span>
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
                  src={showRetypePassword ? show : hide}
                  className='inline-block rounded-[100rem] w-5 h-5 hover:bg-slate-200'
                  alt='Toggle password visibility'
                />
              </button>
            </label>
          </form>

          <button
            onClick={handleUpdatePassword}
            className='block w-full py-[10px] px[8px] mb-[12px]  text-center bg-[#7F265B] font-[750] text-white text-xl rounded-md  hover:bg-[#49213c]'
          >
            Reset password
          </button>
        </div>
      </div>
    </div>
  )
}
