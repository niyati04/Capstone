import { commonApiForAll } from ".."

let token = localStorage.getItem("token")


//FOR ALL PRODUCT API 
export async function postProductApi(data) {
   let response = await commonApiForAll({
      url: "product",
      method: "POST",
      body: {
         search: data?.search,
         category: data?.category,
         casual_wear : data?.casual_wear,
         design_by : data?.design_by,
         size : data?.size,
         price_start : data?.price_start,
         price_end : data?.price_end,
         sort_by : data?.sort_by,
         sort_action : data?.sort_action,

      }
   })
   return response
}


//FOR PRODUCT DETAILS API ( PRODUCT ID and PRODUCT NAME)
export async function getProductDetailsApi(data) {
   let response = await commonApiForAll({
      url: `product-detail/${data?.product_id}/${data?.sku}`,
      method: "GET",
   })
   return response
}

//FOR FTCHING ALL CATEGORY API
export async function getCategoryApi(data) {
   let response = await commonApiForAll({
      url: "category",
      method: "GET",
     
   })
   return response
}

//FOR FTCHING ALL SIZE API
export async function getSizeApi(data) {
   let response = await commonApiForAll({
      url: "size",
      method: "GET",
   
   })
   return response
}

//FOR ADD TO WISH LIST API
export async function addProductToWishListApi(data) {   
   let response = await commonApiForAll({
      url: "add-wishlist",
      method: "POST",
      body: {
         product_id: data?.product_id,
         product_attr_id: data?.product_attr_id,
      },
      header:{
         "Authorization":`Bearer ${token}`
      }
   })
   return response
}


//FOR FETCH PRODUCT FORM WISH LIST API
export async function getProductFromWishListApi() {
   let response = await commonApiForAll({
      url: "get-product-from-wishlist",
      method: "GET",
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
} 


//FOR REMOVE PRODUCT FORM WISH LIST API
export async function removeProductFromWishListApi(data) {
   console.log('data', data)
   let response = await commonApiForAll({
      url: `remove-product-from-wishlist/${data}`,
      method: "GET",
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
}

//FOR COUPON API
export async function getCouponApi() {
   let response = await commonApiForAll({
      url: "coupon",
      method: "GET",
     
   })
   return response
}

//FOR CART API
export async function getCartApi() {
 
   let response = await commonApiForAll({
      url: "cart",
      method: "GET",
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
}

//FOR ADD TO CART API
export async function addToCartApi(data) {
   let response = await commonApiForAll({
      url: "add-to-cart",
      method: "POST",
      body:{
         product_id: data?.product_id,
         product_attr_id: data?.product_attr_id,
         price: data?.price,
         qty:data?.qty
      },
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
}

//FOR DELETE CART API
export async function removeCartApi(data) {
   let response = await commonApiForAll({
      url: `delete-from-cart/${data}`,
      method: "GET",
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
}




//FOR SECTION WISE PRODUCT API
export async function sectionWiseProductApi(data) {
   let response = await commonApiForAll({
      url: `section-wise-product`,
      method: "GET",
     
   })
   return response
}
