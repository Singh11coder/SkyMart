
import React from "react";
import { useAuth } from "../hooks/authHook";

const Register = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    handleRegister
  } = useAuth();



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Join us and get started today.
        </p>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-4"
        >

          {/* Name */}
          <div>
            <label className="text-gray-300 block mb-2">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is required"
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-purple-500"
            />

            <p className="text-red-500 text-sm">
              {errors.name?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2">
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter Valid Email"
                }
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-purple-500"
            />

            <p className="text-red-500 text-sm">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Enter Strong Password"
                }
              })}
              type="password"
              placeholder="Create a password"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-purple-500"
            />

            <p className="text-red-500 text-sm">
              {errors.password?.message}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-purple-400 font-semibold"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default Register;
