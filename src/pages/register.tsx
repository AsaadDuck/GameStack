import React, { useState } from 'react'

const register = () => {

    const [register, setRegister] = useState({
        username:"",
        name:"assad",
        email:"",
        password:""
    })

    const handleChange = (event:any) =>{
        event.preventDefault();

        const {name, value} = event.target;
        setRegister({
            ...register,
            [name]:value
        })
        console.log(register);
    }

    const handleSubmit = async (event:any) =>{
        event.preventDefault();
        try{
            const response = await fetch ('https://gamestack-production.up.railway.app/auth/user/register', {
              method:'POST', 
              headers: {
                'Content-Type': 'application/json',
                
              },
                body: JSON.stringify(register)
            });
            const data = await response.json();
            console.log("data");
          }catch(error){
            console.error(error); 
          }
    }

  return (
    <div className="m-auto flex justify-center md:w-3/4 lg:w-2/3 xl:w-2/3">


    <form className="p-7 text-center  md:w-3/4 lg:w-2/3 xl:w-2/3" onSubmit={handleSubmit}>

        <div className=" text-gray-400">
            <h1 className="text-6xl py-5">Hiii Gamer</h1>
            <p>register to have the a wonderfull expirience</p>
        </div>
      <div className="">
      {/* <label className="" htmlFor=""> Username</label> */}
      <input required onChange={handleChange} className=" border-white block w-full text-center my-6 py-3 text-gray-300 shadow  rounded bg-[#E43F5A] border-none outline-none" type="text" name="username" placeholder="Enter your username" />
      </div>

      <div className="">
      <input required onChange={handleChange} className=" border-white block w-full text-center my-6 py-3 text-gray-300 shadow  rounded bg-[#E43F5A] border-none outline-none" type="text" name="name" placeholder="Enter your name" />
      </div>

      <div className="">
      {/* <label htmlFor=""> Email</label> */}
      <input required onChange={handleChange} className="block w-full text-center my-6 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" name="email" id=""  placeholder= "Enter your Email"/>
      </div>

      <div className="">
      {/* <label htmlFor=""> Password</label> */}
      <input required onChange={handleChange} className="block w-full text-center my-6 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="password" name="password" id=""  placeholder= "Enter your Password"/>
      </div>

      {/* <div className=""> */}
      {/* <label htmlFor="">Confirm Password</label> */}
      {/* <input required onChange={handleChange} className="block w-full text-center my-6 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="text" name="" id=""  placeholder= "Confirm your Password"/>
      </div> */}

   


   
      <button type="submit" className="w-full bg-[#E43F5A] hover:bg-[#3b0f17] text-white font-bold py-2 px-4 mt-6 rounded">Submit</button>

    </form>
</div>
  )
}

export default register