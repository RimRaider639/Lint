import axios from "axios";
import {
  GET_ALL_DATA_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./products.actionType";

export const getAllData = () => async (dispatch) => {
  axios
    .get(`https://wide-eyed-pinafore-duck.cyclic.app/products`, {
      params: {
        limit: 500,
      },
    })
    .then(function (response) {
      let data = response.data;

      let filters = { category: {}, brands: {} };

      for (let i = 0; i < data.length; i++) {
        if (filters.brands[data[i].brand] === undefined) {
          filters.brands[data[i].brand] = 1;
        } else {
          filters.brands[data[i].brand]++;
        }
        for (let j = 0; j < data[i].product_category_tree.length; j++) {
          if (
            filters.category[data[i].product_category_tree[j]] === undefined
          ) {
            filters.category[data[i].product_category_tree[j]] = 1;
          } else {
            filters.category[data[i].product_category_tree[j]]++;
          }
        }
      }

      dispatch({
        type: GET_ALL_DATA_SUCCESS,
        payload: { data, filters },
      });
    })
    .catch(function (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    });
};

export const getProducts = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  axios
    .get(`https://wide-eyed-pinafore-duck.cyclic.app/products`, {
      params: params,
    })
    .then(function (response) {
      let data = response.data;
      let filters = {};
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].product_category_tree.length; j++) {
          if (filters[data[i].product_category_tree[j]] === undefined) {
            filters[data[i].product_category_tree[j]] = 1;
          } else {
            filters[data[i].product_category_tree[j]]++;
          }
        }
      }
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data, params, filters },
      });
    })
    .catch(function (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    });
};
