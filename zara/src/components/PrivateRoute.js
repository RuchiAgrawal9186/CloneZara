import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router'
// import { useEffect } from 'react'

const PrivateRoute = ({children}) => {

    const {Auth} = useContext(AuthContext)

    if(!Auth)
    {
        return <Navigate to="/login"></Navigate>
    }

  return children

}

export default PrivateRoute
