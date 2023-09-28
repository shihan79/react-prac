import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import AddBlog from '../components/AddBlog'
import About from '../components/About'
import Error from '../components/Error'
import Navbar from '../components/Navbar'
import Protedted from './Protedted'

const Index = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
  return     <BrowserRouter>
              <Navbar />
              {isLoggedIn ? <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>logged out</button> : <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>logged In</button>}
              <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/add-blog' element={<Protedted isLoggedIn={isLoggedIn}>
                    <AddBlog/>
                 </Protedted>}/>
                 <Route path='/about' element={<About/>}/>
                 <Route path='*' element={<Error/>}/>
              </Routes>
             </BrowserRouter>
  
}

export default Index