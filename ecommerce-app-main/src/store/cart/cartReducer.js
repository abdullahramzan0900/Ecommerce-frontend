import { cartTypeAction } from "./cartType";

const INITIAL_STATE = {
  cartItems: [],
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartTypeAction.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
