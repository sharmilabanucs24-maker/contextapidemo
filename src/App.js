import React from 'react'
import { useState } from 'react'
import { Contextlogin } from './contextjs/Contextlogin'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {
  const[name,setName]=useState("")
  const[pwd,setPwd]=useState("")
  const[profileinfo,setProfileInfo]=useState(false)


  return (
    <div>
     <Contextlogin.Provider value={{name,setName,pwd,setPwd,setProfileInfo}}>
      {profileinfo ? <Profile/>:<Login/>}
     </Contextlogin.Provider>
     
     
    </div>
  )
}

export default App

