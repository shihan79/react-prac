import React from 'react'
import Todo from './Todo'

const Todos = ({todos,onRemoveTodo}) => {
    console.log(todos)
  return (
    <section className='tosection'>{todos.map((todo,index) =><Todo key ={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={onRemoveTodo} />)}</section>
  )
}

export default Todos