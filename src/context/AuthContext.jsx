import React, { createContext, useState } from 'react'


const AuthProvider = createContext();


const AuthContext = ({children}) => {
  const [auth,setAuth] = useState({
    token:'',
    username:''
  });
  
  const login = (token,usename)=>{
    setAuth({token,usename});
  }
  const logout = ()=>{
    setAuth({token:"",username:""})                                                                                                                                                                                                                                                     
  }
    return (
    <AuthContext.Provider value={{auth,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
