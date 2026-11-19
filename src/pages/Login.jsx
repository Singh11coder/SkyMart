import React from "react";
import { useAuth } from "../hooks/authHook.jsx"; 


const Login = () => {
  
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    handleLogin
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back!
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Login to continue to your account.
        </p>

        <form 
         onSubmit={handleSubmit(handleLogin)} 
         className="space-y-5">

          <div>
            <label className="text-gray-300 block mb-2">
              Email Address
            </label>

            <input
              {...register("email",{
                  required:"Email is required"
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-purple-500"
            />
            <p className="text-red-600">{errors && errors.email?.message}</p>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <input
             {...register("password",{
                 required:"Password is required",
                 minLength:{
                    value:8,
                    message:"Password must be atleast 8 characters"
                 }
             })}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-purple-500"
            />
            <p className="text-red-600">{errors && errors.password?.message}</p>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            

            <button type="button" className="text-purple-400">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <button 
           onClick={() => navigate("/register")} 
           className="text-purple-400 font-semibold">
            Register
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;