import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProfilPage from "./pages/ProfilPage";
import Login from "./pages/Login";
import Addproduct from "./pages/AddProducts";
import { useDispatch } from "react-redux";
import { GetProducts } from "./Redux/Actions/ActionProduct";
import { useEffect } from "react";
import EditProduct from './pages/EditProduct';
import Registeruser from './pages/Registeruser';
import UserRoute from "./privaRouttes/UserRoute";
import AdminRoute from "./privaRouttes/AdminRoute";
import Admin from "./pages/Admin"

function App() {
  
  const dispatch=useDispatch()

 useEffect(() => {
    dispatch(GetProducts())
    
  }, )
 
  return (
    <>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Registeruser' element={<Registeruser/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/profil'  element={ <UserRoute>  <ProfilPage/></UserRoute>  }/>
        <Route path="/addproduct"  element={<UserRoute><Addproduct/></UserRoute> } />
        <Route path="/edit/:id"  element={<UserRoute><EditProduct/></UserRoute>} />
        <Route path="/admin"  element={ <AdminRoute><Admin/></AdminRoute> } />
        <Route path='*'  element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
