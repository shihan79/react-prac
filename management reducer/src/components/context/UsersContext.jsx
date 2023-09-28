import { createContext ,useReducer,useState} from "react";
import { initialState, reducer } from "../../reducer/usersReducer";

 export const UsersContext = createContext({})
 

 const UsersProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
//     const value = {
//         users:state.users,
//     addUser:(newUser)=>{
//         dispatch({type:'ADD_USER',payload:newUser})
//     },
//     deleteUser:(id)=>{
//         dispatch({type:'DELETE_USER',payload:id})
//     }
// }
    
    return <UsersContext.Provider value={{state,dispatch}}>
        {children}
    </UsersContext.Provider>
 }
 export default UsersProvider

 