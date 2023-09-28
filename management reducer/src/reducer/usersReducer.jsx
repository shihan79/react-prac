export const initialState = {
    users : 
        [{id:1,userName:'shihan'},{id:2,userName:'anaya'}]
    
}
export const reducer = (state,action) => {
    if(action.type == 'ADD_USER'){
        return {
            ...state,
            users:[...state.users,action.payload]
        }
    }else if(action.type == 'DELETE_USER'){
          const filteredUsers = state.users.filter(user => user.id!= action.payload)
          return{
            ...state,
            users:filteredUsers
          }
    }
return state
}