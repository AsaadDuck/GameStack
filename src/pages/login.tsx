import React, { useState } from 'react'

const Login = () => {


  const [cred, setCred] = useState({
    username:"",
    password:""
  });

  function handleForm (event: { target: { name: any; value: any; }; }){
    const {name, value} =event.target;


  }

  

  return (
    <div className="m-auto flex justify-center md:w-3/4 lg:w-2/3 xl:w-2/3">
        <form className="p-7   md:w-3/4 lg:w-2/3 xl:w-2/3" action="">

          <div className="">
          <label className="" htmlFor=""> UserName</label>
          <input className="block w-full text-center my-4 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" placeholder="Enter your username" />
          </div>
      
          <div className="">
          <label htmlFor=""> Password</label>
          <input className="block w-full text-center my-4 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" name="" id=""  placeholder= "Enter your Password"/>
          </div>
       
          <button type="submit" className="w-full bg-[#E43F5A] hover:bg-[#3b0f17] text-white font-bold py-2 px-4 mt-6 rounded">Submit</button>

        </form>
    </div>
  )
}

export default Login