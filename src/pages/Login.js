import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../Store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { error } = useSelector((state) => state.users);

  console.log(error);

  const handleChanging = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userData, navigate,toast }));
  
  };

  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-full h-full object-cover"
          alt='kl'
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
      >
        <div className="w-full h-100">
          
          <h1 className="text-gray-800 font-bold text-2xl mt-4">Hello Again!</h1>
      <p className="text-sm font-normal text-gray-600 mt-2">Welcome Back</p>
          <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                onChange={handleChanging}
                name="email"
                type="email"
                placeholder="email.."
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                onChange={handleChanging}
                name="password"
                placeholder="password.."
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="text-right mt-2">
              <Link
                to="/signup"
                className="no-underline text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Need An Acount ?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
