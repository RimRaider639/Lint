import axios from "axios";
import { cart } from "./cart.actionTypes";

// export const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjg2M2E2MGQ3ZmZkMDAwMGQ1MzJhMiIsImlhdCI6MTY3NzIyMjg5M30.aVfhv18iNOldFPldQOblQPRa_ruI27adYlRpJcIyESw`;
export const getCartItems = () => async (dispatch) => {
  dispatch({ type: cart.GET_ITEMS_LOADING });
  axios
    .get(`https://wide-eyed-pinafore-duck.cyclic.app/cart`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: cart.GET_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: cart.GET_ITEMS_ERROR, payload: err }));
};

export const updateCartItem = (id, count) => async (dispatch) => {
  dispatch({ type: cart.UPDATE_COUNT_LOADING });
  axios
    .patch(
      `https://wide-eyed-pinafore-duck.cyclic.app/cart/${id}`,
      { count },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => dispatch({ type: cart.UPDATE_COUNT_SUCCESS, payload: res }))
    .then((res) => {
      dispatch({ type: cart.GET_ITEMS_LOADING });
      setTimeout(() => dispatch(getCartItems()), 1000);
    })
    .catch((error) =>
      dispatch({ type: cart.UPDATE_COUNT_ERROR, payload: error })
    );
};

export const removeCartItem = (id) => async (dispatch) => {
  dispatch({ type: cart.DELETE_ITEM_LOADING });
  axios
    .delete(`https://wide-eyed-pinafore-duck.cyclic.app/cart/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) =>
      dispatch({ type: cart.DELETE_ITEM_SUCCESS, payload: res.data })
    )
    .then((res) => {
      dispatch({ type: cart.GET_ITEMS_LOADING });
      setTimeout(() => dispatch(getCartItems()), 1000);
    })
    .catch((res) =>
      dispatch({ type: cart.DELETE_ITEM_ERROR, payload: res.response.data })
    );
};

export const addToCart = (productID, onOpen) => async (dispatch) => {
  dispatch({ type: cart.ADD_ITEM_LOADING });
  axios
    .post(
      `https://wide-eyed-pinafore-duck.cyclic.app/cart`,
      {
        productID,
      },
      {
        headers: { token: localStorage.getItem("token") },
      }
    )
    .then((res) => dispatch({ type: cart.ADD_ITEM_SUCCESS, payload: res.data }))
    .then((res) => {
      dispatch({ type: cart.GET_ITEMS_LOADING });
      setTimeout(() => dispatch(getCartItems()), 1000);
    })
    .catch((res) =>
      dispatch({ type: cart.DELETE_ITEM_ERROR, payload: res.response.data })
    )
    .finally(() => onOpen());
};

export const resetCart = () => async (dispatch) => {
  dispatch({ type: cart.RESET });
};
