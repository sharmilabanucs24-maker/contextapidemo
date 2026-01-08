import React from 'react'
import { useContext } from 'react'
import { Contextlogin } from '../contextjs/Contextlogin'


function Login() {
    const {setName,setProfileInfo}=useContext(Contextlogin)
   // const [name,setName]=useState("")
   // const [pwd,setPwd]=useState("")
   // const [profileinfo,setProfileInfo]=useState(false)
   // const show=()=>{
       // if (name==="Sharmila" && pwd==="admin@123")
      //      setProfileInfo(true)
      //  else
       //     setProfileInfo(false)
  //  }
  return (
    <div>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter your name'></input>
    <br></br>
    <input type="password" placeholder='enter your password'></input>
    <br></br>
    <input type="button"  value="Login" onClick={()=>setProfileInfo(true)}></input>
    <br></br>
    {/*{(profileinfo && "Valid user :"+name+"!") ||"Invalid user!!!"}*/}

      
    </div>
  )
}

export default Login
