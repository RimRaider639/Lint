import axios from "axios";
import * as actionType from './actionTypes';

// Get products =>
const getProducts=()=>(dispatch)=>{
    dispatch({type:actionType.GET_PRODUCTS_REQUEST});
    return axios.get("https://wide-eyed-pinafore-duck.cyclic.app/products?limit=10").then((res)=>{
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS, payload:res.data})
    }).catch((err)=>{
        dispatch({type:actionType.GET_PRODUCTS_FAILURE})
    })
}

export { getProducts };