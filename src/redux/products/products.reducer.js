import {
  GET_ALL_DATA_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./products.actionType";

// subCategory_like = to get category-wise Data for page, index=1
// category= 1st subcategory(showed on filter heading ), index=0
// sub2Category= 2nd subcategory(show inside the filters), index=2
// limit=2&subCategory_like=Women&category=Footwear&sub2Category=Flats

const initParams = {
  page: 1,
  limit: 10,
  subCategory_like: "",
  category: "",
  sub2Category: "",
  order: "",
  sort: null,
};

let initialData = {
  loading: false,
  error: false,
  allData: [],
  productsData: [],
  filters: { filterHeading: [], filterCategory: {}, filterBrands: [] },
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
      console.log(payload.filters);
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
