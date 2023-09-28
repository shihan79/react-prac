import { useState } from "react"
import Users from "./components/Users"
import NewUser from "./components/NewUser"
import { UsersContext } from "./components/context/UsersContext"


function App() {
 const [users,setUsers] = useState([{id:1,userName:'shihan'},{id:2,userName:'anaya'}])


  return (
    <UsersContext.Provider value={{users,setUsers}}>
     <div>
      <NewUser  />
      <Users  />
    </div>
    </UsersContext.Provider>
  )
}

export default App
