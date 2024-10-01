import React, { useRef, useState} from "react";
import { useDispatch,useSelector  } from "react-redux";
import { addProduct } from "../Redux/Actions/ActionProduct";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const disptach = useDispatch();
  const navigate=useNavigate()
  const name = useRef("");
  const description = useRef("");
  const price = useRef();
 
  const [img, setimg] = useState();
  const category=useRef('')
  const user=useSelector(state=>state.UserReducer.currentuser)
  console.log(user);
  const handlesubmit = (e) => {
 
    e.preventDefault()
    const data= new FormData()
  
    data.append("name",name.current.value)
    data.append("description",description.current.value)
    data.append('price',price.current.value)
    data.append('file',img)
    data.append('category',category.current.value)
    data.append('seller',user._id)
    console.log(data)
   disptach(addProduct(data,navigate));
  };



  return (
    <div>
       <form onSubmit={handlesubmit}>
      <label>name</label>
      <input ref={name} />
      <label>description</label>
      <input ref={description} />
      <label>price</label>
      <input type="number" ref={price} />
      <label>photo</label>
      <input type="file" onChange={(e) => setimg(e.target.files[0])} />
      <select ref={category} >
        <option value='pc'  >pc</option>
        <option value='mobile'  >m</option>
        <option  value='tablette'  >tablette</option>
      </select>
      <button type="submit"   >save</button>
    </form>
    </div>
  )

}
export default AddProduct;