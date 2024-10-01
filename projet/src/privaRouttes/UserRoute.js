
import React from 'react'
import { Navigate } from 'react-router-dom'

function UserRoute({children}) {

    const token=document.cookie.split('=')[1]


  return (
    <> {token  ? children : <Navigate to="/" />} </>
  )
}

export default UserRoute
