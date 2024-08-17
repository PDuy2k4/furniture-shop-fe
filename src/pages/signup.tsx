import signup from '../assets/images/signup.png'
import signIcon from '../assets/images/signIcon.png'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { SignupSchema } from '~/constant/validation'
const SignUp = () => {
  const formik = useFormik<{
    userName: string
    userEmail: string
    userPassword: string
    userConfirmPassword: string
  }>({
    initialValues: {
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmPassword: ''
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        console.log('Form submitted', values)
        const response = await fetch('http://localhost:8000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log('Form submitted successfully', data)
        toast.success(data.message)
      } catch (error) {}
    }
  })
  return (
    <div className='flex flex-row h-screen w-screen '>
      <div className='bg-customBg w-3/5 flex items-center justify-center'>
        <img src={signup} className='h-full' alt='' />
      </div>
      <div className='flex flex-col items-center justify-center w-2/5'>
        <img src={signIcon} className='w-[72px] h-[72px]'alt='' />
        <h1 className='text-4xl font-bold'>Sign up your Account</h1>
        <p>See what is going on with your business</p>
        {/* <GoogleLogin onSuccess={responseMessage} /> */}
        <p>------------- or Sign in with Email ------------- </p>
        <form onSubmit={formik.handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>UserName</label>
            <input
              type='text'
              name='userName'
              className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userName ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.errors.userName && <p className='text-red-500 text-sm'>{formik.errors.userName}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='text'
              name='userEmail'
              className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userEmail ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userEmail}
            />
            {formik.errors.userEmail && <p className='text-red-500 text-sm'>{formik.errors.userEmail}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              name='userPassword'
              className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userPassword ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userPassword}
            />
            {formik.errors.userPassword && <p className='text-red-500 text-sm'>{formik.errors.userPassword}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Confirm password</label>
            <input
              type='password'
              name='userConfirmPassword'
              className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userConfirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userConfirmPassword}
            />
            {formik.errors.userConfirmPassword && (
              <p className='text-red-500 text-sm'>{formik.errors.userConfirmPassword}</p>
            )}
          </div>
          <Link to='/' className='text-darkRaspberry'>
            Already have an account? Sign in
          </Link>
          <button type="submit" className="bg-darkRaspberry text-white px-4 py-2 rounded-lg mt-4 w-full">Sign up</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default SignUp
