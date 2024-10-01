import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AdminRoute({children}) {

    const token=document.cookie.split('=')[1]
    const user=useSelector(state=>state.UserReducer.currentuser)

  return (
    <> {token &&user.role==='admin' ? children : <Navigate to="/" />} </>
  )
}

export default AdminRoute