import signup from '../assets/images/signup.png';
import signIcon from '../assets/images/signIcon.png';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { SigninSchema } from '~/constant/validation';
import { useState } from 'react';
const SignIn = () => {
  const [remember, setRemember] = useState(false);
  const handleLoginSuccess = async (resp: CredentialResponse) => {
    console.log(resp.credential);
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${resp.credential}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    if(response.statusText === 'Unauthorized'){
      throw new Error('Unauthorized: Invalid credentials');
    }else if(response.status == 200){
      window.location.href = '/welcome';
    }
  };
  const navigate = useNavigate();
  
  const formik = useFormik<{
    userEmail: string
    userPassword: string
  }>({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    validationSchema: SigninSchema,
    onSubmit: async (values) => {
      try {
          const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
          });
          console.log(values);

          if (response.status === 401) {
              throw new Error('Unauthorized: Invalid credentials');
          }
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
  
          if(remember){
            // Assuming the token is in the data object
            const token = data.token;
            // Store the token in local storage
            localStorage.setItem('authToken', token);
          }

          // Redirect to the dashboard page
          navigate('/welcome');
        } 
        catch (error) {
          console.error('There was a problem with the fetch operation:', error);
      }
    }
  })
  return(
    <div className="flex flex-row h-screen w-screen ">
      <div className="bg-customBg w-3/5 flex items-center justify-center">
        <img src={signup} className='h-full' alt="" />
      </div>
      <div className="flex flex-col items-center justify-center w-2/5">
        <div className="">
          <img src={signIcon} className='w-[72px] h-[72px]' alt="" />
          <h1 className="text-4xl font-bold">Login to your Account</h1>
          <p>See what is going on with your business</p>
          <GoogleLogin onSuccess={handleLoginSuccess} />
          <p>------------- or Sign in with Email ------------- </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="text"
                    name="userEmail"
                    className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userEmail ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userEmail}
                />
                {formik.errors.userEmail && <p className="text-red-500 text-sm">{formik.errors.userEmail}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    name="userPassword"
                    className={`border-2 rounded-lg w-full px-4 py-2 ${formik.errors.userPassword ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userPassword}
                />
                {formik.errors.userPassword && <p className="text-red-500 text-sm">{formik.errors.userPassword}</p>}
            </div>
            <div className="mb-4 flex flex-row justify-between ">
              <div className="flex flex-row items-center">
                <input type="checkbox" name="remember"
                  defaultChecked={remember}
                  className='checked:bg-darkRaspberry'
                  onChange={() => {}} />
                <label className=" text-darkRaspberry mb-1">Remember me?</label>
              </div>
              <Link to="/requestNewPass" className="text-darkRaspberry">Forgot Password?</Link>
            </div>
            <button type="submit" className="bg-darkRaspberry text-white px-4 py-2 rounded-lg mt-4 w-full">Sign in</button>
          </form>
        </div>
        <p className='mb-10'>Not Registered Yet?<Link to="/signup" className="text-darkRaspberry"> Create an account</Link></p>
      </div>
    </div>
  )
}

export default SignIn;