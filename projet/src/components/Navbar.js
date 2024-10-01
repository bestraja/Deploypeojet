import React from 'react'
import Style from '../Layout/Navbar.module.css';
import Logo from './Logo';
import { Link ,useNavigate} from "react-router-dom";
function Navbar() {
  const navigate=useNavigate()
   const token=document.cookie.split('=')[1]
  const logout=()=>{

    document.cookie="token= "
    
   if (window.location.pathname!=='/') {
     navigate('/')
     window.location.reload()
   }
 }
  return (
    <div>
      <nav className={Style.nav}>

        <ul className={Style.list}>

          <li>
            <Link to='/'><button>Home</button></Link>
          </li>

          {!token ?<> <li>
            <Link to='/Registeruser'><button>Register</button></Link>
          </li></>:null}
          <li><Logo /></li>
          {!token ?<> <li>
            <Link to='/login'> <button>Login</button></Link>
          </li></>:null}
         
          {token ?<>
          <li>
            <Link to='/profil'><button>Profil</button></Link>
          </li>

          

          <li>
         <Link to='/addproduct' > <button > AddProduct</button> </Link>
        </li>
         
          <li>
            <button  onClick={logout}  > logout</button>
          </li></>:null}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar