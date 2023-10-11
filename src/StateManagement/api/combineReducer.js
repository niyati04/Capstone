import { combineReducers } from "redux";
import authReducer from "../slicer/auth/reducer";
import productReducer from "../slicer/product/reducer";



const rootReducer = combineReducers({
    auth: authReducer, 
    product: productReducer,

})

export default rootReducer;
