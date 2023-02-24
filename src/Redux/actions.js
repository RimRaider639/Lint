import axios from "axios";
import * as actionType from './actionTypes';

// Get products =>
const getProducts=()=>async(dispatch)=>{
    dispatch({type:actionType.GET_PRODUCTS_REQUEST});
    return await axios.get("https://wide-eyed-pinafore-duck.cyclic.app/products?limit=10").then((res)=>{
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS, payload:res.data})
    }).catch((err)=>{
        dispatch({type:actionType.GET_PRODUCTS_FAILURE})
    })
}

// Update Product=>
const updateProduct = (id, payload)=>(dispatch)=>{
    dispatch({type: actionType.UPDATE_PRODUCTS_REQUEST});
    console.log(payload);
    return axios.patch(`https://wide-eyed-pinafore-duck.cyclic.app/products/${id}`,payload,{
        headers:{
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjczM2Y2YWIwMDhkMzdjMDQyNzJiZiIsImlhdCI6MTY3NzE0NTIxMn0.U_Yr-cKZ4lWa1M02zgPdwXzZc1wZGbz4-nODV6x-WQQ"
        }
    }).then(res=>{
        dispatch({type:actionType.UPDATE_PRODUCTS_SUCCESS, payload:res})
    }).catch((er)=>dispatch({type:actionType.UPDATE_PRODUCTS_FAILURE}))
}

// Delete Product=>
const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:actionType.DELETE_PRODUCTS_REQUEST})
    return axios.delete(`https://wide-eyed-pinafore-duck.cyclic.app/products/${id}`,{
        headers:{
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjczM2Y2YWIwMDhkMzdjMDQyNzJiZiIsImlhdCI6MTY3NzE0NTIxMn0.U_Yr-cKZ4lWa1M02zgPdwXzZc1wZGbz4-nODV6x-WQQ"
        }
    }).then((res)=>{
        dispatch({type:actionType.DELETE_PRODUCTS_SUCCESS, payload:id})
    }).catch((err)=>dispatch({type:actionType.DELETE_PRODUCTS_FAILURE}));
}

export { getProducts, updateProduct, deleteProduct };