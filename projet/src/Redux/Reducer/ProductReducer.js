import { GETONEPRODUCT, GETPRODUCTS } from "../Const/products";

const intialstate = {
  products:[],
  oneProduct: {},
};

export const ProductReducer = (state = intialstate, action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return { ...state, products: action.payload };
      case GETONEPRODUCT:
        return {...state, oneProduct:action.payload}
    default:
     return state
  }
};