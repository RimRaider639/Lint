import axios from "axios";
import {
  GET_ALL_DATA_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./products.actionType";

export const getAllData = (subCategory_like) => async (dispatch) => {
  axios
    .get(`https://wide-eyed-pinafore-duck.cyclic.app/products`, {
      params: {
        limit: 200,
        subCategory_like,
      },
    })
    .then(function (response) {
      let data = response.data;
      console.log(data);

      let HeadingObj = {};
      let CategoryObj = {};
      let BrandsObj = {};

      for (let i = 0; i < data.length; i++) {
        if (BrandsObj[data[i].brand] === undefined) {
          BrandsObj[data[i].brand] = 1;
        } else {
          BrandsObj[data[i].brand]++;
        }

        if (HeadingObj[[data[i].product_category_tree[0]]] === undefined) {
          HeadingObj[[data[i].product_category_tree[0]]] = {};
        }
      }
      let filters = { filterHeading: [], filterCategory: [], filterBrands: [] };

      Object.entries(HeadingObj).map(([name, quantity]) =>
        filters.filterHeading.push([name, quantity])
      );

      Object.entries(BrandsObj).map(([name, quantity]) =>
        filters.filterBrands.push([name, quantity])
      );

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < filters.filterHeading.length; j++) {
          if (
            filters.filterHeading[j][0] ===
            [data[i].product_category_tree[0]][0]
          ) {
            if (CategoryObj[[data[i].product_category_tree[2]]] === undefined) {
              CategoryObj[[data[i].product_category_tree[2]]] = 1;
            } else {
              CategoryObj[[data[i].product_category_tree[2]]]++;
            }
          }
        }
      }

      for (let j = 0; j < filters.filterHeading.length; j++) {
        for (let i = 0; i < data.length; i++) {
          if (
            filters.filterHeading[j][0] ===
            [data[i].product_category_tree[0]][0]
          ) {
            if (
              filters.filterHeading[j][1][
                [data[i].product_category_tree[2]]
              ] === undefined
            ) {
              filters.filterHeading[j][1][
                [data[i].product_category_tree[2]]
              ] = 1;
            } else {
              filters.filterHeading[j][1][[data[i].product_category_tree[2]]]++;
            }
          }
        }
      }

      filters.filterCategory = CategoryObj;

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
