import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { blogsData } from '../data'

const Blogs = () => {
    // const navigate = useNavigate()
    const [blogs,setBlogs] = useState(blogsData)
    const truncateString = (str,num) => {
        if(str.Length>num){
            return str.slice(0,num) + "..."
        }else{
           return  str
        }
    }
    
  return (
    <div>
          {/* <h1>Blogs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro harum beatae sapiente, praesentium rerum et omnis voluptate vero. Ratione enim quasi necessitatibus possimus reprehenderit veniam, minus quibusdam sint sunt vero.</p>
        <button onClick={()=>{navigate('/')}}>go to Homepage</button> */}
        <h1>Blogs page</h1>
        <section>
            {blogs.map(blog => {
                const {id,title,body} = blog
                return <article key={id}>
                      <h2>{title}</h2>
                      <p>{truncateString(body,50)}</p>
                      <Link to={title} state={{id,title,body}}>Learn more</Link>
                </article>
            })}
        </section>
    </div>
  )
}

export default Blogs