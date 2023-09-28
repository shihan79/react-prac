// import React, { useContext } from 'react'
// import { UsersContext } from './context/UsersContext'

import { useUserContex } from "../hooks/useUserContex"

const User = ({user}) => {
    const {id,userName} = user
    // const {users,setUsers} = useContext(UsersContext)
    // const {deleteUser} = useUserContex()
    const {users,dispatch} = useUserContex()
    const handleDelete = (id) => {
      dispatch({type:'DELETE_USER',payload:id})
      // deleteUser(id)
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