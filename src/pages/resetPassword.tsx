import { useFormik } from 'formik'
import { ResetpasswordSchema } from '~/constant/validation'
import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
export default function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
        let isMounted = true;
        const verifyToken = async () => {
            const queryParams = new URLSearchParams(location.search);
            const tokenReceived = queryParams.get('token');

            if (tokenReceived) {
                if (isMounted) {
                    setToken(tokenReceived);
                    formik.setFieldValue('token', tokenReceived);
                }
            } else {
                navigate('/error');
            }
        };

        verifyToken();
        return () => {
            isMounted = false;
        };
    }, [location.search]);

    const formik = useFormik<{
        password: string
        confirmPassword: string
        token: string
    }>({
        initialValues: {
            password: '',
            confirmPassword: '',
            token: ''
        },
        validationSchema: ResetpasswordSchema,
        onSubmit: async (values) => {
            try {
                console.log(values);
                const response = await fetch('http://localhost:8000/api/resetPassword', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${values.token}`
                    },
                    body: JSON.stringify(values)
                });
                console.log(response);
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
                    <label className='block text-gray-700'>Password</label>
                    <input
                        type='password'
                        name='password'
                        className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.errors.password && <p className='text-red-500 text-sm'>{formik.errors.password}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>New password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword && <p className='text-red-500 text-sm'>{formik.errors.confirmPassword}</p>}
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>
                    Confirm password
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}
