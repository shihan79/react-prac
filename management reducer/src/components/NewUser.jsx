// import React, { useContext, useState } from 'react'
// import { UsersContext } from './context/UsersContext'
import { useState } from "react"
import { useUserContex } from "../hooks/useUserContex"

const NewUser = () => {
  // const {setUsers} = useContext(UsersContext)
  // const {addUser} = useUserContex()
  const {users,dispatch} = useUserContex()
    const [userName,setUserName] = useState('')
    const handleSubmit = (e) => {
           e.preventDefault()
           const newUser = {id:new Date().getTime().toString(),userName: userName}
           
           dispatch({type:'ADD_USER',payload:newUser})
          // addUser(newUser)
           setUserName('')
    }
    const handleUserNameChange = (e) => {
            setUserName(e.target.value)
    }
  return (
    <div>
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='userName' placeholder='username' value={userName} onChange={handleUserNameChange} required/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default NewUser