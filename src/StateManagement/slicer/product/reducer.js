import { LOADING,STORE_ALL_PRODUCTS, STORE_ALL_CATEGORIES,STORE_ALL_SIZES } from "./type"

const initialState = {
    loading: false,
    products: [],
    categories: [],
    sizes: []
} 
 

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case STORE_ALL_PRODUCTS:
            return {
                ...state,
                products: action.response,
            
            }
        case STORE_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.response,
              
            }
        case STORE_ALL_SIZES:
            return {
                ...state,
                sizes: action.response,
               
            }
            
        default:
            return state;
    }

 
}