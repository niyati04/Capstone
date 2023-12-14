import { toast } from "react-toastify";
import { contactUsApi, requestUserForLoginApi, requestUserForOtpApi, requestUserForRegisterApi } from "../../api/login/login";
import { LOGIN_DETAILS, VISIBLE_INPUT_FIELD,OTP_VALUE } from "./type";

//FOR LOGIN API
export const requestUserForOtp = (data, navigate) => {
  return async function (dispatch) {
    const response = await requestUserForOtpApi(data);
    if (response?.data?.success === true) {
      toast.success(response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      })
      setTimeout(() => {  
        dispatch({ type: OTP_VALUE, response: response?.data?.data?.otp })
  
      dispatch({ type: VISIBLE_INPUT_FIELD, response: true })
      }, 2000);

    }
  }
}

//FOR REGISTER API
export const requestUserForRegister = (data, navigate) => {
  return async function (dispatch) {
    const response = await requestUserForRegisterApi(data);
   

    if (response?.data?.success === true) {
      dispatch({
        type: LOGIN_DETAILS,
        response: response?.data
      })
      toast.success(response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      })
      setTimeout(() => {
      navigate('/')
      } , 2000);

    }else{
      toast.error(response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,

      })
    }
  }
}

//FOR LOGIN API
export const requestUserForLogin = (data, navigate) => {
  return async function (dispatch) {
    const response = await requestUserForLoginApi(data);
   

    if (response?.data?.success === true) {
      dispatch({
        type: LOGIN_DETAILS,
        response: response?.data
      })

      toast.success(response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      })
      localStorage.setItem('token', response?.data?.data?.token)
      setTimeout(() => {
      navigate('/Home')
      }
      , 1000);

    } else {
      toast.error(response?.data?.message, {  
        position: toast.POSITION.TOP_CENTER,
      })

    }
  }
}

//FOR CONTACT US API

export const addContactUs = (data) => {

  return async function (dispatch) {
    const response = await contactUsApi(data);
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





