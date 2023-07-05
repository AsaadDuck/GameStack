import React, { useState } from 'react'

const Login = () => {


  const [cred, setCred] = useState({
    username:"",
    password:""
  });

  

  return (
    <div className="m-auto flex justify-center ">
        <form className="p-7 w-1/2  " action="">

          <div className="">
          <label className="" htmlFor=""> UserName</label>
          <input className="block w-full text-center my-4 py-3 text-gray-300 border-[#0F0F0F]   rounded-xl bg-[#E43F5A]" type="text" placeholder="Enter your username" />
          </div>
      
          <div className="">
          <label htmlFor=""> Password</label>
          <input className="block w-full text-center my-4 py-3 text-gray-300 border-[#0F0F0F]   rounded-xl bg-[#E43F5A]" type="text" name="" id=""  placeholder= "Enter your Password"/>
          </div>
       

        </form>
    </div>
  )
}

export default Login