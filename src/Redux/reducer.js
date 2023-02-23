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
            return{...state, isError:true}
        default:
            return state;
    }
}

export { reducer };