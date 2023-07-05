import React, { useState } from 'react'

const Login = () => {


  const [cred, setCred] = useState({
    username:"",
    password:""
  });

  return (
    <div>
        <form action="">

          <label htmlFor=""> UserName</label>
          <input type="text" placeholder="Enter your username" />

          <label htmlFor=""> Password</label>
          <input type="text" name="" id=""  placeholder= "Enter your Password"/>

        </form>
    </div>
  )
}

export default Login