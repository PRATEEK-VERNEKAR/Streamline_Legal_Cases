import RegisterPage from "@/components/LoginForm";
import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LoginForm from "@/components/LoginForm";

const Login = async () => {
  const session=await getServerSession(authOptions);

  if(session){
    redirect('/');
  }
  return (
    <>
      <LoginForm/>
    </>
  )
}

export default Login;
