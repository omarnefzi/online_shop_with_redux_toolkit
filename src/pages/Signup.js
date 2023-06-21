import { useFormik } from 'formik'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../Store/userSlice'

const Signup = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    userName: Yup.string().required('Username is required'),
    email:  Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  
  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(register({ userData: values, navigate }));
    },
  });


  return (
    
<div className="h-screen md:flex">
  <div className="relative overflow-hidden md:flex w-1/2  i justify-around items-center hidden" style={{backgroundImage:'url(https://images.pexels.com/photos/2983364/pexels-photo-2983364.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
   
  </div>
  <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
    <form className="bg-white" onSubmit={(e)=>formik.handleSubmit(e)}>
      <h1 className="text-gray-800 font-bold text-2xl mb-7">Sign Up to your account</h1>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <input  onBlur={formik.handleBlur} value={formik.values.fullName} name='fullName' onChange={formik.handleChange}className="pl-2 outline-none border-none" type="text"  placeholder="Full name" />
      </div>
      {formik.touched.fullName && formik.errors.fullName && (
          <div className="text-red-500">{formik.errors.fullName}</div>
        )}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
        <input  onBlur={formik.handleBlur} value={formik.values.userName} name='userName' onChange={formik.handleChange}className="pl-2 outline-none border-none" type="text"  placeholder="Username" />
      </div>
      {formik.touched.userName && formik.errors.userName && (
          <div className="text-red-500">{formik.errors.userName}</div>
        )}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input  onBlur={formik.handleBlur} value={formik.values.email} name='email' onChange={formik.handleChange}className="pl-2 outline-none border-none" type="text"  placeholder="Email Address" />
       
      </div>
      {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <input onBlur={formik.handleBlur}  value={formik.values.password} name='password' onChange={formik.handleChange}className="pl-2 outline-none border-none" type="text"  placeholder="Password" />
      </div>
      {formik.touched.password && formik.errors.password && (
          <div className="text-red-500">{formik.errors.password}</div>
        )}
      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Signup</button>
      <Link to='/login' className="no-underline text-sm ml-2  text-blue-700  hover:text-blue-500 cursor-pointer">already have an account ?</Link>
    </form>
  </div>
</div>
 
  )
}

export default Signup