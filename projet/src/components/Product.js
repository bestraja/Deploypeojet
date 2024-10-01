
import style from '../Layout/Product.module.css'; 
import {  useNavigate } from "react-router-dom";
import { deleteProduct, GetOneProduct } from "../Redux/Actions/ActionProduct";
import { useDispatch } from "react-redux";

function Product({el}) {
  
  const navigate=useNavigate()
  const disptach=useDispatch()
  return (
    <div className={style.product}>
      <img src={el.img}  className={style.img} alt='' />
      <div className={style.info}   >
        <h3 className={style.name}>name:{el.name}</h3>
        <p className={style.description}>description:{el.description}</p>
        <p className={style.price}>price:{el.price}</p>
        <p>category:{el.category}</p>
        <p>date:{el.date.slice(0,10)}</p>
        <button  onClick={()=>disptach(deleteProduct(el._id))} >delete</button>
      <button onClick={()=>disptach(GetOneProduct(el,navigate))}  >Edit</button>
      </div>
    </div>
  );
}

export default Product;