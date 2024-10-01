import React from 'react'
import Product from './Product'
import styles from '../Layout/ProductList.module.css'; 
import { useSelector } from 'react-redux'
function ProductList() {


  const data=useSelector(state=>state.ProductReducer.products)
  return (
    <div className={styles.productList} >
      {data && data.map((el)=><Product key ={el.id} el={el}/>)}
    </div>
  )
}

export default ProductList