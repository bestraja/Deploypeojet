import React from 'react'
import '../Layout/Profile.css'
import image from'../assett/logoprofil.jpg'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Actions/ActionUser'
function Loginuser() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const disptach=useDispatch()
  const navigate=useNavigate()
  const error=useSelector(state=>state.UserReducer.error)
  const handlesubmit=(e)=>{
    e.preventDefault()
    disptach(login({email,password},navigate))
   }
  return (
    <>
    <div className="login">
    <div className="login-card">
      <div className="login-card-header">
        <img src={image} alt="Logo" className="logo" />
      </div>
      <form className="login-form" onSubmit={handlesubmit}  >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">E-Mail</label>
          <input type="text" id="username" name="username" placeholder="Enter your Email" required  onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required  onChange={(e)=>setpassword(e.target.value)} autoComplete="on" />
        </div>
        <button type="submit" className="submit-button">Login</button>
        {error.errors&&error.errors[0].msg?<p>{error.errors[0].msg}</p>:error.msg&&error.msg?<p>{error.msg}</p>:null}
      </form>
    </div>
   
    </div>
    </>
  )
}

export default Loginuser