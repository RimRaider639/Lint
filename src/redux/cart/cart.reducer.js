import { cart } from "./cart.actionTypes";

const initState = {
  items: [],
  total: {
    items: 0,
    price: 0,
    count: 0,
  },
  loading: false,
  error: false,
  message: "",
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
        total: {
          ...state.total,
          count: payload.length,
          price: payload.reduce(
            (acc, item) => acc + item.productID.discounted_price,
            0
          ),
          items: payload.reduce((acc, item) => acc + item.count, 0),
        },
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
    case cart.DELETE_ITEM_LOADING:
      return { ...state, loading: true, error: false };
    case cart.DELETE_ITEM_SUCCESS:
      return { ...state, loading: false, message: payload.data.message };
    case cart.DELETE_ITEM_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return initState;
  }
}
