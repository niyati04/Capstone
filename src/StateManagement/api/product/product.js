import { commonApiForAll } from ".."


export async function postProductApi(data) {
   let response = await commonApiForAll({
      url: "product",
      method: "POST",
      body: {
         search: data.search,
         category: data.category,
         casual_wear : data.casual_wear,
         design_by : data.design_by,
         size : data.size,
         price_start : data.price_start,
         price_end : data.price_end,
         sort_by : data.sort_by,
         sort_action : data.sort_action,

      }
   })
   return response
}

export async function getProductDetailsApi(data) {
   let response = await commonApiForAll({
      url: "product-detail",
      method: "GET",
      
     
   })
   return response
}

export async function getCategoryApi(data) {
   let response = await commonApiForAll({
      url: "category",
      method: "GET",
     
   })
   return response
}

export async function getSizeApi(data) {
   let response = await commonApiForAll({
      url: "size",
      method: "GET",
   
   })
   return response
}



