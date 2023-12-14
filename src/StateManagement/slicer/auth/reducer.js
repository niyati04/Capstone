import { LOGIN_DETAILS,LOGIN_DETAILS_MESSAGE, VISIBLE_INPUT_FIELD,OTP_VALUE } from "./type"

const initialState = {
    loginData: [],
    message:'',
    visibleinput:false,
    otpValue:""
} 
 

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_DETAILS:
            return { ...state, loginData: action?.response};
     
        case LOGIN_DETAILS_MESSAGE:
            return { ...state, message: action?.response};

        case VISIBLE_INPUT_FIELD:
            return { ...state, visibleinput: action?.response};

        case OTP_VALUE:
            return { ...state, otpValue: action?.response};

        default:
            return state;
    }

 
}