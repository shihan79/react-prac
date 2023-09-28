import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // const {userid} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    const [name,setName] = useState("")
    const [id,setId] = useState("")
    const handleSubmit = (e) => {
                e.preventDefault()
                setSearchParams({name:name,id:id})
    }
  return (
    // <div>{userid}</div>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
            <button type='submit'>find user</button>
        </form>
        <h1>{searchParams.get("id")}</h1>
        <p>{searchParams.get("age")}</p>
        <p>{searchParams.get("name")}</p>
        </div>
  )
}

export default User