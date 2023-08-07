"use client";

import { Divider } from "@/app/components/Divider";
import { GoogleLogInBtn } from "../components/GoogleLoginBtn";
import { Title } from "@/app/components";

export default function Login() {
  return (
    <>
      <Title text="Hello!" />
      <p className="mb-3 text-center text-gray-500">{"Great to meet you! Please continue with one of the following options to get to know each other!"}</p>
      <Divider />
      <GoogleLogInBtn />
    </>
  )
}
