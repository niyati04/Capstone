import { CATEGORIES, GET_ALL_PRODUCT_FROM_CART,GET_ALL_PRODUCT_FROM_WISH_LIST, LOADING,PRODUCT_DETAILS,PRODUCTS, SIZES, VIEW_PARTICULAR_PRODUCT_DETAILS,IS_COLOR, COUPON } from "./type"

const initialState = {
    isLoading: false,
    products: {},
    categories: [],
    sizes: [],
    productDetails: {},
    getAllProductFromWishhList: [],
    viewParticularProductDetails: {},
    isColor:"",
    coupon:[],
    getAllProductFromCart:[]
} 
 

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action?.response
            }
        case PRODUCTS:
            return {
                ...state,
                products: action.response,
            
            }
        case CATEGORIES:
            return {
                ...state,
                categories: action.response,
              
            }
        case SIZES:
            return {
                ...state,
                sizes: action.response,
               
            }
            case PRODUCT_DETAILS:
                return {
                    ...state,
                    productDetails: action.response,
                   
                }

                case GET_ALL_PRODUCT_FROM_WISH_LIST:
                    return {
                        ...state,
                        getAllProductFromWishhList: action.response,
                       
                    }
                    case VIEW_PARTICULAR_PRODUCT_DETAILS:
                        return {
                            ...state,
                            viewParticularProductDetails: action.response,
                           
                        }
                        case IS_COLOR:
                            return {
                                ...state,
                                isColor: action.response,
                               
                            }
                            case COUPON:
                                return {
                                    ...state,
                                    coupon: action.response,
                                   
                                }
                                case GET_ALL_PRODUCT_FROM_CART:
                                    return {
                                        ...state,
                                        getAllProductFromCart: action.response,
                                       
                                    }
            
        default:
            return state;
    }

 
}