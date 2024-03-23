"use client"

import useAuthCalls from "@/hooks/useAuthCalls"
import Link from "next/link"
import { useState } from "react";

const Login = () => {
  const [info, setInfo] = useState({
    email:"",
    password:""
  })

  const { login } = useAuthCalls()

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(info)
    login(info)
  };

  return (
    <div className="relative h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full lg:bg-opacity-50">
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <form onSubmit={handleSubmit}>
            <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Sign In
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="email"
                className="peer login-register-input"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_email" className="login-register-label">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="password"
                className="peer login-register-input"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_password" className="login-register-label">Password</label>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p className="text-white text-[11px] sm:text-base">Don't you have an account?</p>
                <Link
                  className="text-[#ff4b45] text-[11px] sm:text-base py-3 font-[0.75em] cursor-pointer hover:text-gray-500"
                  href="/register"
                >
                  Register
                </Link>
              </div>
            
            <button className="btn-danger" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login