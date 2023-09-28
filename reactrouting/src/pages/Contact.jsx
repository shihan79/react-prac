import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
  return (
    <div>
          <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro harum beatae sapiente, praesentium rerum et omnis voluptate vero. Ratione enim quasi necessitatibus possimus reprehenderit veniam, minus quibusdam sint sunt vero.</p>
        <button onClick={()=>{navigate('/')}}>go to Homepage</button>
        {/* <Link to='/'> go to hompage</Link> */}
    </div>
  )
}

export default Contact