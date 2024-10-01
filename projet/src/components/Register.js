import React, { useState } from 'react'
import style from '../Layout/register.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../Redux/Actions/ActionUser'

function Register() {
  const errors=useSelector(state=>state.UserReducer.errors)

  const dispatch=useDispatch()
  const navigate=useNavigate()
 const [username, setusername] = useState('')
 const [email, setemail] = useState('')
 const [password, setpassword] = useState('')

  const handlesubmit=(e)=>{
    e.preventDefault()

    dispatch(register({username,email,password},navigate))
  }

  return (
    <form  className={style.form}  onSubmit={handlesubmit} >
     <label>username</label>
     <input  className={style.input}  onChange={(e)=>setusername(e.target.value)}  />
     <label>email</label>
     <input className={style.input}  onChange={(e)=>setemail(e.target.value)} />
     <label>password</label>
     <input className={style.input} type='password' onChange={(e)=>setpassword(e.target.value)}   />
    <button className={style.btn} type='submit' >Submit</button>
   {errors[0]&&errors[0].msg ? <p>{errors[0].msg}</p>:null}
    </form>
  )
}

export default Register