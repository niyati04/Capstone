import { commonApiForAll } from ".."


export async function requestUserForOtpApi(data) {
   let response = await commonApiForAll({
      url: "send-otp",
      method: "POST",
      body: {
         email: data,

      }
   })
   return response
}

export async function requestUserForRegisterApi(data) {
   let response = await commonApiForAll({
      url: "register",
      method: "POST",
      body: {
         email: data.email,
         otp: data.otp,
         password: data.password
      }
   })
   return response
}


export async function requestUserForLoginApi(data) {
   let response = await commonApiForAll({
      url: "login",
      method: "POST",
      body: {
         email: data.email,
         password: data.password
      }
   })
  
   return response
}


//FOR CONTACT US API
export async function contactUsApi(data) {
   console.log('data', data)
   let response = await commonApiForAll({
      url: "contact-us",
      method: "POST",
      body:{
         fname: data?.firstName,
         lname: data?.lastName,
         email: data?.email,
         phone: data?.contactNo,
         message: data?.message,
      }
     
   })
   return response
}




