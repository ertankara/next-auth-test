"use client"

import { Title } from "@/app/components";
import { ActionLink } from "@/app/components";
import { Divider } from "@/app/components/Divider";
import { signOut, useSession } from "next-auth/react"

export default function Logout() {
  const { status } = useSession();

  if (status === "authenticated") signOut({ redirect: false });

  return (
    <>
      <Title text="Sad to see you go :(" />
      <Divider />
      <ActionLink type="regular" text="Go to login page" href="/auth/login" />
    </>
  )
};
