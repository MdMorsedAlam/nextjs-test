'use client';
import React, { useState } from 'react';
import axios from 'axios';
import {toast} from "react-hot-toast";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function RegisterPage() {
  const [user,setUser]=useState<{username:string,email:string,password:string}>({
    username:'',
    email:'',
    password:''
  });
  const [loading,setLoading]=useState(false);
  const router=useRouter();

  const registerButton=async()=>{

    try{
      setLoading(true);
      await axios.post('/api/users/register',user);
      toast.success('Registration successful, please verify your email');
      router.push('/login');
      setLoading(false);
    }catch(error){
      setLoading(false);
      toast.error('Something went wrong');
    }
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold bg-green-500 text-white py-2 px-5 rounded-md">{loading?'Processing':'Register Page'}</h1>
        <input type="text" placeholder="username" className="border rounded-md border-gray-300 p-2 m-2" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />
        <input type="email" disabled={user.username === ''} placeholder="email" className="border disabled:border-red-500 rounded-md border-gray-300 p-2 m-2" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
        <input type="password" disabled={user.email === ''} placeholder="password" className="border disabled:border-red-500 rounded-md border-gray-300 p-2 m-2" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
        <button onClick={registerButton} disabled={user.password === ''} className="bg-green-500 text-white disabled:bg-red-500 p-2 m-2 rounded-md">{loading?'Processing':'Register'}</button>
        <Link href="/login">Visit Login Page</Link>
    </div>
  )
}

export default RegisterPage;