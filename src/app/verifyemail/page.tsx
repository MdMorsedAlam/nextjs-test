'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function VerifyEmail() {
    const router=useRouter();
    const [token,setToken]=useState('');
    const [loading,setLoading]=useState(false);
    const [verify,setVerify]=useState(false);
    



    const verifyEmail=async()=>{

        try{
            setLoading(true);
            await axios.post('/api/users/verifyemail',{token});
            toast.success('Email verified');
            router.push('/login');
            setVerify(true);
            setLoading(false);
        }catch(error){
            setLoading(false);
            toast.error('Something went wrong');
    }}
    useEffect(() => {
        const urlToken=window.location.search;
        const token=urlToken.split('=')[1];
        if(!token){
           toast.error('Invalid token');
           router.push('/login');
        }else{
            setToken(token as string);
        }
    }, [token]);

    // console.log(token);
  return (
    <div>

       {
        verify?( <h1>Verified</h1>):<button onClick={verifyEmail}>{loading?'Processing':'Verify Email'}</button>
       }
    </div>
    
  )
}

export default VerifyEmail;