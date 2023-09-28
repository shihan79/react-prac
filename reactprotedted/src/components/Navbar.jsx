import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'className='nav-link'>HomePage</NavLink>
        <NavLink to='/add-blog'className='nav-link'>Add Blog</NavLink>
        <NavLink to='/about'className='nav-link'>HomePage</NavLink>
        
    </nav>
  )
}

export default Navbar