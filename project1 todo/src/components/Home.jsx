import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
import Newtodo from './Newtodo'
// const dummyTodos = [
//     {id:1,
//     title:'todo title 1',
//     desc : 'todo1 description'
// },    {id:2,
//     title:'todo title 2',
//     desc : 'todo2 description'
// }
// ]

const Home = () => {
  const [todos,setTodos] = useState([])
 const handleAddTodo = (todo) => {
      setTodos(previousTodos => {return[ ...previousTodos,{id:uuidv4(),todo}]})
      console.log(todo)
 }
 const handleRemoveTodo = (id) => {
  // const filteredTodos = Todos.filter(todo => todo.id != id)
       setTodos((prevTodos) =>{
        const filteredTodos = prevTodos.filter(todo => todo.id != id)
        return filteredTodos })
 }
  return (
    <div className='container'>
      <h1 style={{color:'white'}}>Todo app</h1>
        <Newtodo onAddTodo={handleAddTodo} />
        <Todos todos = {todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home