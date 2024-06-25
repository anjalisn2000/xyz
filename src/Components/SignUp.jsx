import React, { useState } from 'react';
import PageLayout from './PageLayout';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const[username , setusername] = useState("")
  const[email ,setEmail] = useState("")
  const[name , setName] = useState("")
  const[password , setPassword] = useState("")
  const navigate = useNavigate()

  function onsubmit(e){
    
    e.preventDefault();
    console.log(password)
    console.log(username)
    console.log(email)
    console.log(name)
    navigate('/dashboard')
  }

  return (
   
    <PageLayout>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
         {/* <div className='h-[10dvh] w-full'>
        <Header />
      </div> */}
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={onsubmit}>
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Sign Up
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="username" onChange={(e)=>setusername(e.target.username)} value={username}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.email)} value={email}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" name="name" onChange={(e)=>setName(e.target.name)} value={name}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.password)} value={password}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <a href="/">Already Registered? Login </a>
        <p className="text-center text-gray-500 text-xs">
          
        </p>
      </div>
    </div>
    </PageLayout>
  );
};

export default Signup;