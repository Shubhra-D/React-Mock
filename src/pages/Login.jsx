import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

const Login = () => {
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
   // const {login} = useContext(AuthContext)

const handleSubmit = (e)=>{
     e.preventDefault()
     axios({
        url:`https://peppermint-carnelian-captain.glitch.me/login`,
        method:"POST",
        data:{
            username:"",
            password:""
        }
     }).then((res)=>{
          //  login(res.data.token)
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
