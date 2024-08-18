import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import googleIcon from '../assets/google-icon.svg'
import { app } from '~/firebase'
import http from '~/Api/http'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '~/Redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      // Sign in with popup
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      const res = await http.post('/auth/googleLogin', {
        name: result.user.displayName,
        email: result.user.email,
        profileImg: result.user.photoURL
      })
      dispatch(loginSuccess(res.data.userWithoutPassword))
      console.log(res)
      nav('/home')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div
      onClick={handleGoogleClick}
      className='caret-transparent py-2 flex items-center justify-center rounded-md border-[3px] border-[#dcac3b] cursor-pointer hover:bg-slate-100 hover:border-[3px] hover:border-[#e9c162]'
    >
      <div className='flex gap-4 items-center'>
        <img src={googleIcon} alt='' />
        <span className='font-medium'>Continue with Google</span>
      </div>
    </div>
  )
}
