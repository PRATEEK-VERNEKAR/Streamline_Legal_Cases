import RegisterPage from "@/components/SignupForm";
import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Signup = async () => {
  const session=await getServerSession(authOptions);

  if(session){
    redirect('/');
  }
  return (
    <>
      <RegisterPage/>
    </>
  )
}

export default Signup;
