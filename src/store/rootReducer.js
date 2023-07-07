import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  cartReducer: cartReducer,
});
