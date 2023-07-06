import React, { useState } from 'react'

const Login = () => {


  const [cred, setCred] = useState({
    username:"",
    password:""
  });

  //set error messages for handling user input 
  const[error, setError] =useState({
    usernameE:"Invalid username or password ",
    passwordE:"Password should not be less than 6 lenth character and not more than 15 character long"
  })

  function handleChange (event:any){
    const {name, value} =event.target;
    setCred({
      ...cred,
      [name]: value

    }
    )
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log(cred);

    try{
      const response = await fetch ('', {
        method:'POST', 
        headers: {
          'Content-Type': 'application/json',
          
        },
          body: JSON.stringify(cred)
      });
      const data = await response.json();
      console.log("data");
    }catch(error){
      console.error(error)
    }
    
  };

  

  return (
    <div className="m-auto flex justify-center md:w-3/4 lg:w-2/3 xl:w-2/3">
        <form className="p-7   md:w-3/4 lg:w-2/3 xl:w-2/3" action="" onSubmit={handleSubmit}>

          <div className="">
          <label className="" htmlFor=""> UserName</label>
          <input required type="text" value={cred.username} name="username" onChange={handleChange} className="block w-full text-center my-4 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-[#E43F5A]  outline-none"  placeholder="Enter your username" />
          {/* <span className={``}>{error.usernameE}</span> */}
          </div>
      
          <div className="">
          <label htmlFor=""> Password</label>
          <input pattern='^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}' required value={cred.password} name="password" onChange={handleChange}  className="block w-full text-center my-4 py-3 text-gray-300 border-[#0F0F0F]   rounded bg-[#E43F5A] border-none outline-none" type="password"    placeholder= "Enter your Password"/>
          <span className={`${cred.password.length <7 ? " text-red-700 text-sm":"hidden " }`}>{error.passwordE}</span>
          </div>
       
          <button type="submit" className="w-full bg-[#E43F5A] hover:bg-[#3b0f17] text-white font-bold py-2 px-4 mt-6 rounded">Submit</button>

        </form>
    </div>
  )
}

export default Login