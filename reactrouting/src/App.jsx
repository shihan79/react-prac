import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import Error from "./pages/Error"
import Navbar from "./pages/Navbar"
import Blog from "./pages/Blog"
import User from "./pages/User"


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:title" element={<Blog/>} />
        {/* <Route path="/user/:userid" element={<User/>} /> */}
        <Route path="/user" element={<User/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
