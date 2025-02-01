import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
const SignUpPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullname.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side  */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&amp;shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={(e) => {
                        setformData({ ...formData, fullname: e.target.value });
                      }}
                      id="fullname"
                      autoComplete="fullname"
                      required=""
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setformData({ ...formData, email: e.target.value });
                      }}
                      id="email"
                      autoComplete="email"
                      required=""
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="********"
                      value={formData.password}
                      onChange={(e) => {
                        setformData({ ...formData, password: e.target.value });
                      }}
                      id="password"
                      autoComplete="current-password"
                      required=""
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                      onClick={() => {
                        setshowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full justify-center text-base/6 font-semibold text-white bg-indigo-600 hover:bg-indigo-700"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <>
                        <Loader className="size-5 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      "Create Account"
                    )}
                    {/* Create Account */}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="text-base-content/60">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="link link-primary font-semibold underline hover:text-blue-800"
                  >
                    Log in
                  </Link>
                </p>
              </div>

              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?
                <a
                  href="#"
                  className="ml-3 font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
      </div>
      <AuthImagePattern
        title="Join our community"
        subtitle="connect with friends,share moments,and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;
