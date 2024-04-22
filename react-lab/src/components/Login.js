import React, { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Login() {
  const {setUsername, setShowProfile} = useContext(LoginContext)

  return (
    <div style={{backgroundColor: "lightblue"}}>
        <div style={{padding: "10px"}}>
            <input
            type='text'
            placeholder='Username...'
            onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div style={{padding: "10px"}}>
            <input type='password' placeholder='Password...'/>
        </div>

        <button onClick={()=>{setShowProfile(true)}}> LOGIN </button>
      
    </div>
  )
}

export default Login
