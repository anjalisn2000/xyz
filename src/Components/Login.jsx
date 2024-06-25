import React, { useState } from 'react';
import Header from './Header';
import PageLayout from './PageLayout';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({cred}) => {

  const[username , setusername] = useState('')
  const[password , setrpassword] = useState('')
  const navigate = useNavigate();

  function onsubmit(e){
    e.preventDefault();
    console.log(password)
    console.log(username)
   

    if((username === '10101' && password==="1") || (username==="10102" && password==="2")){

      navigate('/dashboard')
    }else{
      setusername("")
      setrpassword("")
      alert("invalid username and password")
    }
  }
  return (
    <div className=" h-screen bg-gray-200 ">
      <PageLayout>
    

      <div className="w-full max-w-xs absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onsubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              UserName
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="roll" type="text" placeholder="Roll Number" value={username} onChange={(e)=>setusername(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e)=>setrpassword(e.target.value)}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
              Sign In
            </button>
          </div>
        </form>
        <a href="/signup">no account? Register</a>
      </div>

        </PageLayout>
    </div>
  );
};

export default Login;