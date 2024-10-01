import {  LOGINFAILED, REGISTERFAILED, GET_CURRENT_SUCCESS} from "../Const/user";

const intialstate = {
    currentuser: {},
    errors: [],
    error: {}
}

export const UserReducer=(state=intialstate,action)=>{
    switch (action.type) {

        case REGISTERFAILED:
            return { ...state, errors: action.payload }
        case LOGINFAILED:
            return { ...state, error: action.payload }
case  GET_CURRENT_SUCCESS:
        return {...state,currentuser:action.payload}
    
        default:
            return state
    }

}