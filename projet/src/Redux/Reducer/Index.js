import { combineReducers } from "redux";
import {ProductReducer} from "./ProductReducer";
import {UserReducer} from "./UserReducer";
export const rootReducer = combineReducers({ProductReducer,UserReducer })