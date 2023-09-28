import React from 'react'
import { useLocation } from 'react-router-dom'

const Blog = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>
        <h1>{location.state.title} page</h1>
        <p>{location.state.body}</p>
    </div>
   )
}

export default Blog