import React from 'react'
import {FaExpandArrowsAlt} from "react-icons/fa";
const Todo = (props) => {
  const {desc,title} = props.todo
  const {id} = props
  const {onRemoveTodo} = props
  const handleClick = (id) =>{
    onRemoveTodo(id)
  }
  return (
    <article className='todo'>
      <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      </div>
      <div>
        <button onClick={()=> handleClick(id)} className='btn'><FaExpandArrowsAlt /></button>
      </div>
    </article>
  )
}

export default Todo