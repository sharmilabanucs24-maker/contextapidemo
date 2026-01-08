import React from 'react'
import { useContext } from 'react'
import { Contextlogin } from '../contextjs/Contextlogin'

function Profile  () {
    const { name }=useContext(Contextlogin)
  return (
    <div>
      <h2>This is Profile Page</h2>
      <h2>Welcome!! {name}</h2>
    </div>
  )
}

export default Profile
