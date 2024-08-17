import { useFormik } from 'formik'
import { RequestPasswordChanging } from '~/constant/validation'
import { toast, ToastContainer } from 'react-toastify';
import { Toast } from 'node_modules/react-toastify/dist/components';
export default function ResetPassword() {
  const formik = useFormik<{
    userEmail: string
  }>({
    initialValues: {
      userEmail: ''
    },
    validationSchema: RequestPasswordChanging,
    onSubmit: async (values) => {
      try {
        console.log(values)
        let response = await fetch('http://localhost:8000/api/changePassword', {
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
        toast.success(data.message)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
        toast.error('There was a problem with the fetch operation')
      }
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Your email</label>
          <input
            type='email'
            name='userEmail'
            className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userEmail ? 'border-red-500' : 'border-gray-300'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userEmail}
          />
          {formik.errors.userEmail && <p className='text-red-500 text-sm'>{formik.errors.userEmail}</p>}
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>
          Continue
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}
