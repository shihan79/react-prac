import React from 'react'

const User = ({user,handleDeleteUser}) => {
    const {id,userName} = user
    const handleDelete = (id) => {
      handleDeleteUser(id)
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