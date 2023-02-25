import { useComponentStyles__unstable } from "@chakra-ui/react";
import axios from "axios";
import {
  GET_ALL_DATA_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./products.actionType";

export const getAllData = (subCategory_like) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
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

      // storing in object locally
      let HeadingObj = {};

      for (let i = 0; i < data.length; i++) {
        if (HeadingObj[[data[i].product_category_tree[0]]] === undefined) {
          HeadingObj[[data[i].product_category_tree[0]]] = [{}, {}];
        }
      }

      let filters = { filterHeading: [] };

      // converting object into array to store in redux
      Object.entries(HeadingObj).map(([name, quantity]) =>
        filters.filterHeading.push([name, quantity])
      );

      // filterHeading=[Heading,{obj for sub category},{object for brand of particular category}]

      // Loop for {obj for sub category}
      for (let j = 0; j < filters.filterHeading.length; j++) {
        for (let i = 0; i < data.length; i++) {
          if (
            filters.filterHeading[j][0] ===
            [data[i].product_category_tree[0]][0]
          ) {
            if (
              filters.filterHeading[j][1][0][
                [data[i].product_category_tree[2]]
              ] === undefined
            ) {
              filters.filterHeading[j][1][0][
                [data[i].product_category_tree[2]]
              ] = 1;
            } else {
              filters.filterHeading[j][1][0][
                [data[i].product_category_tree[2]]
              ]++;
            }
          }
        }
      }

      // Loop for {object for brand of particular category}

      for (let j = 0; j < filters.filterHeading.length; j++) {
        for (let i = 0; i < data.length; i++) {
          if (
            filters.filterHeading[j][0] ===
            [data[i].product_category_tree[0]][0]
          ) {
            if (filters.filterHeading[j][1][1][[data[i].brand]] === undefined) {
              filters.filterHeading[j][1][1][[data[i].brand]] = [
                1,
                data[i].discounted_price,
                data[i].discounted_price,
              ];
            } else {
              filters.filterHeading[j][1][1][[data[i].brand]][0]++;
              filters.filterHeading[j][1][1][[data[i].brand]][1] = Math.min(
                filters.filterHeading[j][1][1][[data[i].brand]][1],
                data[i].discounted_price
              );
              filters.filterHeading[j][1][1][[data[i].brand]][1] = Math.max(
                filters.filterHeading[j][1][1][[data[i].brand]][1],
                data[i].discounted_price
              );
            }
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
  const brandArray = [];
  const sub2CategoryArray = [];

  if (Object.keys(params.brand).length !== 0) {
    Object.entries(params.brand).map(([name, state]) =>
      state ? brandArray.push(name) : null
    );
  }
  // console.log(brandArray);
  if (Object.keys(params.sub2Category).length !== 0) {
    Object.entries(params.sub2Category).map(([name, state]) =>
      state ? sub2CategoryArray.push(name) : null
    );
  }

  try {
    const response = await axios.get(
      `https://wide-eyed-pinafore-duck.cyclic.app/products`,
      {
        params: {
          ...params,
          brand: brandArray,
          sub2Category: sub2CategoryArray,
        },
      }
    );
    let data = response.data;

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: { data, params },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};
