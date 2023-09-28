import React, { useState } from 'react'

const NewUser = ({handleAddNewUser}) => {
    const [userName,setUserName] = useState('')
    const handleSubmit = (e) => {
           e.preventDefault()
           const newUser = {id:new Date().getTime().toString(),userName: userName}
           
           handleAddNewUser(newUser)
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