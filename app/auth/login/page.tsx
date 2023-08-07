"use client";

import { GoogleLogInBtn } from "../components/GoogleLoginBtn";

export default function Login() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Hello!</h1>
      <p className="mb-3 text-center text-gray-500">{"Great to meet you! Please continue with one of the following options to get to know each other!"}</p>
      <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      <GoogleLogInBtn />
    </>
  )
}
