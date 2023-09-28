// import React, { useContext } from 'react'
import { useUserContex } from '../hooks/useUserContex'
import User from './User'
// import { UsersContext } from './context/UsersContext'
const Users = () => {
  // const {users} = useContext(UsersContext)
    //  const {users} = useUserContex()
     const {state} = useUserContex()
  return (
    <div>
        {state.users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users