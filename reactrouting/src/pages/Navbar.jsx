import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
        <NavLink to='/'className='nav-link'>Home</NavLink>
        <NavLink to='/contact'className='nav-link'>Contact</NavLink>
        <NavLink to='/blogs'className='nav-link'>Blogs</NavLink>
     </nav>
  )
}

export default Navbar