"use client";

import { Divider } from "@/app/components/Divider";
import { GoogleLogInBtn } from "../components/GoogleLoginBtn";

export default function Login() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Hello!</h1>
      <p className="mb-3 text-center text-gray-500">{"Great to meet you! Please continue with one of the following options to get to know each other!"}</p>
      <Divider />
      <GoogleLogInBtn />
    </>
  )
}
