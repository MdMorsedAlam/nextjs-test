'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


function ProfilePage() {
  const [data,setData]=useState<any>();
  const router=useRouter();

  const getData=async()=>{
    try{
      const response=await axios.get(`/api/users/me`);
    setData(response.data.user._id);
    }catch(error){
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  const logout=async()=>{
    try{
      await axios.get('/api/users/logout');
      router.push('/login');
      toast.success('Logout successful');
    }catch(error){
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='border border-red-600 p-3 flex flex-col justify-center items-center gap-3 w-96 mx-auto mt-10 rounded-lg'>
      <h1 className='text-2xl text-green-500 font-bold'>ProfilePage </h1>
      <p><Link href={`/profile/${data}`}>{data}</Link></p>
      <button onClick={logout} className='bg-green-500 text-white p-2 rounded-md'>Logout</button>
    </div>
  )
}

export default ProfilePage