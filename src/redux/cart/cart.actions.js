import axios from "axios";
import { cart } from "./cart.actionTypes";

export const getCartItems = () => async (dispatch) => {
  dispatch({ type: cart.GET_ITEMS_LOADING });
  axios
    .get(`https://wide-eyed-pinafore-duck.cyclic.app/cart`, {
      headers: {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjczM2Y2YWIwMDhkMzdjMDQyNzJiZiIsImlhdCI6MTY3NzE0NTIxMn0.U_Yr-cKZ4lWa1M02zgPdwXzZc1wZGbz4-nODV6x-WQQ`,
      },
    })
    .then((res) =>
      dispatch({ type: cart.GET_ITEMS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: cart.GET_ITEMS_ERROR, payload: err }));
};
