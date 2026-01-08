import React, { useState } from 'react'
import { useContext } from 'react'
import { Contextlogin } from '../contextjs/Contextlogin'


function Login() {
    const {name,setName,pwd,setPwd,setProfileInfo}=useContext(Contextlogin)
   // const [name,setName]=useState("")
   // const [pwd,setPwd]=useState("")
   // const [profileinfo,setProfileInfo]=useState(false)
   const[error,setError]=useState("")
    const show=()=>{
        if (name==="Sharmila" && pwd==="123")
        {
            setProfileInfo(true)
          setError("")
        }
        else
           setError("Invalid User!!!")
   }
  return (
    <div>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter your name'></input>
    <br></br>
    <input type="password" onChange={(e)=>setPwd(e.target.value)} placeholder='enter your password'></input>
    <br></br>
    <input type="button" onClickCapture={()=>show()} value="Login" ></input>
    <br></br>
    {error && <p style={{color:'red'}}>{error}</p>}
    {/* {profileinfo ===false && <font color='red'>Invalid user!!!</font>} */}

     
    </div>
  )
}

export default Login
