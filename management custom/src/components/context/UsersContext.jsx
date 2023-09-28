import { createContext ,useState} from "react";

 export const UsersContext = createContext({})
 

 const UsersProvider = ({children}) => {
    const [users,setUsers] = useState([{id:1,userName:'shihan'},{id:2,userName:'anaya'}])
    return <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
 }
 export default UsersProvider

 