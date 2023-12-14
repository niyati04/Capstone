import { toast } from "react-toastify";
import { postProductApi,getCategoryApi,getSizeApi,getProductDetailsApi, addProductToWishListApi, getProductFromWishListApi, removeProductFromWishListApi, addToCartApi, getCartApi, removeCartApi, getCouponApi } from "../../api/product/product";
import { CATEGORIES, PRODUCTS, SIZES, PRODUCT_DETAILS, GET_ALL_PRODUCT_FROM_WISH_LIST,LOADING, COUPON, GET_ALL_PRODUCT_FROM_CART } from "./type";


export const sendForProductFilter = (data) => {
    return async function (dispatch) {
        dispatch({type:LOADING,response:true})
        const response = await postProductApi(data);
        if (response?.data?.success === true) {
            dispatch({type:LOADING,response:false})
            dispatch({
                type:PRODUCTS,
                response: response?.data?.data
            })
        }
    }
    }


    export const fetchProductDetails = (data,navigate) => {
        return async function (dispatch) {
            dispatch({type:LOADING,response:true})
            const response = await getProductDetailsApi(data);
            if (response?.data?.success === true) {
                dispatch({type:LOADING,response:false})
                dispatch({
                    type: PRODUCT_DETAILS,
                    response: response?.data?.data
                })
                navigate('/product')
            }
        }
    }

    export const fetchParticularProductDetails = (data) => {
        return async function (dispatch) {
            dispatch({type:LOADING,response:true})
            const response = await getProductDetailsApi(data);
            if (response?.data?.success === true) {
                dispatch({type:LOADING,response:false})
                dispatch({
                    type: PRODUCT_DETAILS,
                    response: response?.data?.data
                })
               
            }
        }
    }


    export const fetchCategory = () => {
        return async function (dispatch) {
            const response = await getCategoryApi();
            if (response?.data?.success === true) {
                dispatch({
                    type: CATEGORIES,
                    response: response?.data?.data
                })
            }
        }
    }


    export const fetchSize = () => {
        return async function (dispatch) {
            const response = await getSizeApi();
            if (response?.data?.success === true) {
                dispatch({
                    type: SIZES,
                    response: response?.data?.data
                })
            }
        }
    }


//FOR ADD PRODUCT TO WISH LIST API

export  function addProductToWishList(data) {
    return async function (dispatch) {
        const response = await addProductToWishListApi(data);
        if (response?.data?.success === true) {
        toast.success(response?.data?.message, {  
            position: toast.POSITION.TOP_CENTER,
          })

        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }


    //FOR GET PRODUCT FROM WISH LIST API

export  function fetchProductFromWishList(data) {
    return async function (dispatch) {
        const response = await getProductFromWishListApi(data);
        if (response?.data?.success === true) {
            dispatch({
                type: GET_ALL_PRODUCT_FROM_WISH_LIST,
                response: response?.data?.data
            })
        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }

    //FOR REMOVE PRODUCT FROM WISH LIST API

export  function removeProductFromWishList(data) {
    return async function (dispatch) {
        const response = await removeProductFromWishListApi(data);
        if (response?.data?.success === true) {
        toast.success(response?.data?.message, {  
            position: toast.POSITION.TOP_CENTER,
          })
          setTimeout(() => {
            
        dispatch(fetchProductFromWishList())
            }, 200);

        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }

//FOR GET PRODUCT FROM CART 
export function fetchProductFromCart(){
    return async function (dispatch) {
        const response = await getCartApi();
        
        if (response?.data?.success === true) {
            dispatch({
                type: GET_ALL_PRODUCT_FROM_CART,
                response: response?.data?.data
            })
        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
}


    //FOR ADD PRODUCT TO WATCH LIST API

export  function addProductToWatchList(data) {
    return async function (dispatch) {
        const response = await addToCartApi(data);
      
        if (response?.data?.success === true) {
        toast.success(response?.data?.message, {  
            position: toast.POSITION.TOP_CENTER,
          })
          setTimeout(() => {
            dispatch(fetchProductFromCart())
          }, 100);

        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
              
        }
    }
    }

//FOR REMOVE PRODUCT FROM CART
export  function removeProductFromCart(data) {
    return async function (dispatch) {
        const response = await removeCartApi(data);
        if (response?.data?.success === true) {
        toast.success(response?.data?.message, {  
            position: toast.POSITION.TOP_CENTER,
          })
          setTimeout(() => {
        dispatch(fetchProductFromCart())
            }, 10)

        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }


    //FOR FETCH COUPON API
export  function fetchCoupon() {
    return async function (dispatch) {
    let response = await getCouponApi();
    console.log('response', response)
    if (response?.data?.success === true) {
        dispatch({
            type: COUPON,
            response: response?.data?.data
        })
    
    }
}
}