import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// import reducer function
import ProductsReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  ProductsManager: ProductsReducer,
  cartManager: cartReducer,
});

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  comp(applyMiddleware(thunk))
);
