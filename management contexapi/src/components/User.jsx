// import React, { useContext } from 'react'
// import { UsersContext } from './context/UsersContext'

import { useUserContex } from "../hooks/useUserContex"

const User = ({user}) => {
    const {id,userName} = user
    // const {users,setUsers} = useContext(UsersContext)
    const {users,setUsers} = useUserContex()
    const handleDelete = (id) => {
      const filteredUsers = users.filter(user => user.id != id)
      setUsers(filteredUsers)
    }
  return (
    <div>
        <h2>{id}</h2>
        <p>{userName}</p>
        <button onClick={()=> handleDelete(id)}>delete</button>
    </div>
  )
}

export default User