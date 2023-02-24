import { cart } from "./cart.actionTypes";

const initState = {
  items: [],
  count: 0,
  loading: false,
  error: false,
};

export default function cartReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case cart.GET_ITEMS_LOADING:
      return { ...state, loading: true, error: false };
    case cart.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: payload,
        count: payload.length,
      };
    case cart.GET_ITEMS_ERROR:
      return { ...state, loading: false, error: true };
    case cart.UPDATE_COUNT_LOADING:
      return { ...state, loading: true, error: false };
    case cart.UPDATE_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: state.items.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    case cart.UPDATE_COUNT_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return initState;
  }
}
