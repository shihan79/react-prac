import { useState } from "react"
import Users from "./components/Users"
import NewUser from "./components/NewUser"
import UsersProvider from "./components/context/UsersContext"


function App() {
//  const [users,setUsers] = useState([{id:1,userName:'shihan'},{id:2,userName:'anaya'}])


  return (
    <UsersProvider>
     <div>
      <NewUser  />
      <Users  />
    </div>
    </UsersProvider>
  )
}

export default App
