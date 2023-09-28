import { useState } from "react"
import Users from "./components/Users"
import NewUser from "./components/NewUser"


function App() {
 const [users,setUsers] = useState([{id:1,userName:'shihan'},{id:2,userName:'anaya'}])
const handleDeleteUser = (id) => {
   const filteredUsers = users.filter(user => user.id != id)
   setUsers(filteredUsers)
}
const handleAddNewUser = (newUser) => {
       console.log(newUser)
       setUsers((prevUsers) => [...prevUsers,newUser])
}
  return (
    <>
      <NewUser handleAddNewUser={handleAddNewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser}/>
    </>
  )
}

export default App
