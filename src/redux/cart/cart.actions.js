import axios from "axios";
import { cart } from "./cart.actionTypes";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjg2M2E2MGQ3ZmZkMDAwMGQ1MzJhMiIsImlhdCI6MTY3NzIyMjg5M30.aVfhv18iNOldFPldQOblQPRa_ruI27adYlRpJcIyESw`;

export const getCartItems = () => async (dispatch) => {
  dispatch({ type: cart.GET_ITEMS_LOADING });
  axios
    .get(`https://wide-eyed-pinafore-duck.cyclic.app/cart`, {
      headers: {
        token,
      },
    })
    .then((res) =>
      dispatch({ type: cart.GET_ITEMS_SUCCESS, payload: res.data })
    )
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
          token,
        },
      }
    )
    .then((res) => dispatch({ type: cart.UPDATE_COUNT_SUCCESS, payload: res }))
    .catch((error) =>
      dispatch({ type: cart.UPDATE_COUNT_ERROR, payload: error })
    );
};

export const removeCartItem = (id) => async (dispatch) => {
  axios.patch(`https://wide-eyed-pinafore-duck.cyclic.app/cart/${id}`, {
    headers: {
      token,
    },
  });
};
