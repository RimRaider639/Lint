import {
  GET_ALL_DATA_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  CLEAR_PARAMS_LOADING,
  CLEAR_PARAMS_SUCCESS,
  CLEAR_PARAMS_ERROR,
} from "./products.actionType";

// subCategory_like = to get category-wise Data for page, index=1

// category= 1st subcategory(showed on filter heading ), index=0

// sub2Category= 2nd subcategory(show inside the filters), index=2

// limit=2&subCategory_like=Women&category=Footwear&sub2Category=Flats

const initParams = {
  page: "",
  limit: 10,
  subCategory_like: "",
  category: "",
  sub2Category: {},
  brand: {},
  order: "",
  sort: null,
  discounted_price_gt: null,
  discounted_price_lt: null,
};

let initialData = {
  loading: false,
  error: false,
  allData: [],
  productsData: [],
  filters: { filterHeading: [] },
  params: initParams,
};

const ProductsReducer = (state = initialData, { type, payload }) => {
  console.log("ProductsReducer", "type=", type, "payload=", payload);
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

    case CLEAR_PARAMS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CLEAR_PARAMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productsData: payload.data,
        params: payload.clearParamsState,
      };
    }

    case CLEAR_PARAMS_ERROR: {
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
