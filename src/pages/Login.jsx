import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

const Login = () => {
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
    const {login} = useContext(AuthContext)

const handleSubmit = (e)=>{
     e.preventDefault()
     axios({
        url:``,
        method:"POST",
        data:{
            username:username,
            password:password
        }
     }).then((res)=>{
           login(res.data.token)
           console.log(res.data.token)
     }).catch((err)=>{
        console.error(err)
     })
}


  return (
    <div>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Usename'
          value={username}  onChange={(e)=>setUsername(e.target.value)}
        />
        <input type='password' placeholder='Enter Password'
          value={password}  onChange={(e)=>setPassword(e.target.value)}
        />
        <br/>
        <button type='submit'>Login</button>
       
    </form>

    </div>
  )
}

export default Login
