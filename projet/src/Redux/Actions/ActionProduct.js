import axios from "axios"
import {  ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT, GETONEPRODUCT, GETPRODUCTS } from "../Const/products";
export const GetProducts = () => async (dispatch) => {
    try {
      
      const res= await axios.get('http://localhost:4000/api/product')
    
     
      dispatch({
          type:GETPRODUCTS,
          payload:res.data
      })
    } catch (error) {
       console.log(error);
  }}
  export const addProduct = (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/product',body)
      dispatch({
          type:ADDPRODUCT,
          Payload:res
      })
      dispatch(GetProducts())
      navigate('/')
      
    } catch (error) {
       console.log(error);
  
  }}
  export const GetOneProduct=(data,navigate)=>{
  
    navigate(`/edit/${data._id}`)
   return {type:GETONEPRODUCT,payload:data}
 
 }
 
 export const editProduct = (id,data,navigate) => async (dispatch) => {
     try {
       const res= await axios.patch(`http://localhost:4000/api/product/${id}`,data)
       dispatch({
           type:EDITPRODUCT,
           Payload:res
       })   
        dispatch(GetProducts())
       navigate('/')
    
     } catch (error) {
        console.log(error);
   
 }}
 export const deleteProduct = (id) => async (dispatch) => {
  try {

    const res= await axios.delete(`http://localhost:4000/api/product/${id}`)
    dispatch({
        type:DELETEPRODUCT,
        Payload:res
    })
    dispatch(GetProducts())
  } catch (error) {
     console.log(error);

}}
 