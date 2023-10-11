import { toast } from "react-toastify";
import { postProductApi,getCategoryApi,getSizeApi,getProductDetailsApi } from "../../api/product/product";
import { STORE_ALL_CATEGORIES, STORE_ALL_SIZES } from "./type";


export const sendForProductFilter = (data) => {
    return async function (dispatch) {
        const response = await postProductApi(data);
        console.log('response', response?.data?.data)
        if (response?.data?.success === true) {
            dispatch({
                type: "PRODUCT_DETAILS",
                response: response?.data?.data
            })
        }
    }
    }


    export const fetchProducts = () => {
        return async function (dispatch) {
            const response = await getProductDetailsApi();
            console.log('response', response?.data?.data)
            if (response?.data?.success === true) {
                dispatch({
                    type: "PRODUCT_DETAILS",
                    response: response?.data?.data
                })
            }
        }
    }

    export const fetchCategory = () => {
        return async function (dispatch) {
            const response = await getCategoryApi();
            console.log('response', response)
            if (response?.data?.success === true) {
                dispatch({
                    type: STORE_ALL_CATEGORIES,
                    response: response?.data?.data
                })
            }
        }
    }


    export const fetchSize = () => {
        return async function (dispatch) {
            const response = await getSizeApi();
            console.log('response', response)
            if (response?.data?.success === true) {
                dispatch({
                    type: STORE_ALL_SIZES,
                    response: response?.data?.data
                })
            }
        }
    }
