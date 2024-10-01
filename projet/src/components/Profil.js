import { useSelector,useDispatch } from 'react-redux'
import { getCurrent } from "../Redux/Actions/ActionUser";
import React, { useEffect } from 'react'

import { deleteProduct, GetOneProduct } from '../Redux/Actions/ActionProduct'
import { useNavigate } from 'react-router-dom'
import style from '../Layout/Product.module.css'; 
function Profil() {
  const dispatch = useDispatch()
  
  const navigate=useNavigate()
  const user = useSelector(state => state.UserReducer.currentuser)
  const products = useSelector(state => state.ProductReducer.products)
  const productsbyuser = products.filter(el => el.seller._id === user._id)
 
  useEffect(() => {
  
    dispatch(getCurrent())
  
  }, )
  return (
    <>
      <h3>username:{user.username}</h3>
      <p>email:{user.email}</p>
      <div>
        {productsbyuser && productsbyuser.map((el) =><div key={el._id} className={style.product}>
            <img src={el.img} className={style.img} alt='' />
            <div className={style.info}   >
              <h3 className={style.name}>name:{el.name}</h3>
              <p className={style.description}>description:{el.description}</p>
              <p className={style.price}>price:{el.price}</p>
              <p>category:{el.category}</p>
              <p>date:{el.date.slice(0, 10)}</p>
              <button onClick={() => dispatch (deleteProduct(el._id))} >delete</button>
              <button onClick={() => dispatch (GetOneProduct(el, navigate))}  >Edit</button>
            </div>
          </div>)}
      </div>
      </>
      )
}

      export default Profil