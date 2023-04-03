import React, { useState } from 'react'


export const AuthContext = React.createContext()

const AuthContextProvider = (props) => {

    const [Auth,setAuth] = useState(false)
    const [name,setname] = useState("")
    
    const login = (name) =>{
        setAuth(true)
        setname(name)
    }

    const logout = () =>{
        setAuth(false)
    }

  return (
    <AuthContext.Provider value ={{Auth,setAuth,login,logout,name}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
