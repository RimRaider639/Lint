import {
  GET_ALL_DATA_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./products.actionType";

const initParams = {
  page: 1,
  limit: 10,
  category: ["men"],
  sort: "",
};

let initialData = {
  loading: false,
  error: false,
  allData: [],
  productsData: [],
  filters: {},
  params: initParams,
};

const ProductsReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        allData: payload.data,
        filters: payload.filters,
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productsData: payload.data,
        params: payload.params,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default ProductsReducer;
