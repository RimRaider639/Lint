import * as actionType from './actionTypes';

const inititalState = {
    products:[],
    isLoading:false,
    isError:false,
}

const reducer = (state=inititalState, action)=>{
    const { type, payload } = action;

    switch(type){
        // For GET =>
        case actionType.GET_PRODUCTS_REQUEST:
            return{...state, isLoading:true}
        case actionType.GET_PRODUCTS_SUCCESS:
            return{...state, products:payload, isLoading:false}
        case actionType.GET_PRODUCTS_FAILURE:
            return{...state, isError:true, isLoading:false}

        // For Updating=>
        case actionType.UPDATE_PRODUCTS_REQUEST:
            return{...state, isLoading:true}
        case actionType.UPDATE_PRODUCTS_SUCCESS:
            let newProd = state.products.map((el)=>el._id===payload._id? payload:el)
             return{...state, isLoading:false, products:newProd}
        case actionType.UPDATE_PRODUCTS_FAILURE:
            return{...state, isError:true, isLoading:false}
            
        // Fpr Deleting=>
        case actionType.DELETE_PRODUCTS_REQUEST:
            return{...state, isLoading:true}
        case actionType.DELETE_PRODUCTS_SUCCESS:
            let filtered = state.products.filter((el)=>el._id!==payload)
            return{...state, isLoading:false, products:filtered}
        case actionType.DELETE_PRODUCTS_FAILURE:
            return{...state, isError:true, isLoading:false}
        default:
            return state;
    }
}

export { reducer };