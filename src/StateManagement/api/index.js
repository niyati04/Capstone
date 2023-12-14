import axios from 'axios';
import { base_url_api } from './axiosConfig'
const Api = base_url_api;





export async function commonApiForAll({ url, method, header, body, data }) {
  // const token = JSON.parse(basicAuth); //token for authentication 
  // const decodedToken = atob(token); // Use the atob function to decode the Base64 string
  
  const headers = {
    
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
    "Access-Control-Allow-Credentials": true,
    ...header,
  }
  
  
  if (method === 'GET') {
    let response = await axios.get(`${Api}${url}`, {
      mode: 'no-cors',
      headers: headers
    }).then((response) => {
      
      return response
    })
    .catch((error) => {
      
      return error
    })
    return response
  }
  
  if (method === 'POST') {

    let response = await axios.post(`${Api}${url}`, body, {
      mode: 'no-cors',
      headers: headers
    }).then((response) => {
      
      return response
    })
    .catch((error) => {
      
      
      return error.response
    })
    return response
  }
  if (method === 'DELETE') {
    let response = await axios.delete(`${Api}${url}`, {
      mode: 'no-cors',
      headers: headers
    }).then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
    return response
  }
  
}
