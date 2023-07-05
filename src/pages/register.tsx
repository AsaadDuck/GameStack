import React, { useState } from 'react'

const register = () => {

    const [register, setRegister] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setRegister({
            ...register,
            [name]:value
        })
        console.log(register);
        
    }

  return (
    <div className="m-auto flex justify-center md:w-3/4 lg:w-2/3 xl:w-2/3">


    <form className="p-7 text-center  md:w-3/4 lg:w-2/3 xl:w-2/3" onSubmit={handleChange}>

        <div className=" text-gray-400">
            <h1 className="text-6xl py-5">Hiii Gamer</h1>
            <p>register to have the a wonderfull expirience</p>
        </div>
      <div className="">
      {/* <label className="" htmlFor=""> Username</label> */}
      <input required className=" border-white block w-full text-center my-6 py-3 text-gray-300 shadow  rounded bg-[#E43F5A] border-none outline-none" type="text" placeholder="Enter your username" />
      </div>

      <div className="">
      {/* <label htmlFor=""> Email</label> */}
      <input required className="block w-full text-center my-6 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" name="" id=""  placeholder= "Enter your Email"/>
      </div>

      <div className="">
      {/* <label htmlFor=""> Password</label> */}
      <input required className="block w-full text-center my-6 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" name="" id=""  placeholder= "Enter your Password"/>
      </div>

      <div className="">
      {/* <label htmlFor="">Confirm Password</label> */}
      <input required className="block w-full text-center my-6 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" name="" id=""  placeholder= "Confirm your Password"/>
      </div>

   


   
      <button type="submit" className="w-full bg-[#E43F5A] hover:bg-[#3b0f17] text-white font-bold py-2 px-4 mt-6 rounded">Submit</button>

    </form>
</div>
  )
}

export default register