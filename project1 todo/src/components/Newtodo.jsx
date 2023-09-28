import React, { useState } from 'react'

const Newtodo = ({onAddTodo}) => {
  const [todo,setTodo] = useState({title:'',desc:''})
    const {title,desc} = todo
    
  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo(todo)
    setTodo({title:'',desc:''})
  }
  const handleChange = (e) => {
setTodo((oldTodo) => {return {...oldTodo,[e.target.name]:e.target.value} })
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="tile">title:</label>
            <input type="text" id='name' name='title' value={title} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="desc">Description:</label>
            <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange}/>
        </div>
        <button type='submit'>add todo</button>
    </form>
  )
}

export default Newtodo